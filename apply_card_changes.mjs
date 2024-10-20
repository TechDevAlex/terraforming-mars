/* eslint-env node */
/* eslint "linebreak-style": ["error", "unix"] */
/* eslint "no-console": "off" */

import * as fs from 'node:fs/promises';
import path from 'node:path';

const changesPath = path.join(process.cwd(), 'custom_card_changes.json');
const cardsRootPath = path.join(process.cwd(), 'src', 'server', 'cards');

// Recursive function to find card files in subdirectories
async function findCardFile(cardName) {
  const dirs = await fs.readdir(cardsRootPath, { withFileTypes: true });

  for (const dir of dirs) {
    if (dir.isDirectory()) {
      const cardFilePath = path.join(cardsRootPath, dir.name, `${cardName}.ts`);
      try {
        const stats = await fs.stat(cardFilePath);
        if (stats.isFile()) {
          return cardFilePath; // Found the card file
        }
      } catch {
        // File does not exist in this directory, continue searching
      }
    }
  }
  return null; // Card file not found in any subdirectory
}

// Function to apply specific value changes without altering the structure
async function applyChangesToFile(cardFile, cardChanges) {
  try {
    let content = await fs.readFile(cardFile, 'utf8');

    // Replace specific values in the card file content
    if (cardChanges.cost !== undefined) {
      const costRegex = /cost:\s*\d+/;
      content = content.replace(costRegex, `cost: ${cardChanges.cost}`);
    }

    if (cardChanges.behavior && cardChanges.behavior.production && cardChanges.behavior.production.megacredits !== undefined) {
      const productionRegex = /production:\s*\{\s*megacredits:\s*\d+\s*\}/;
      content = content.replace(productionRegex, `production: {megacredits: ${cardChanges.behavior.production.megacredits}}`);
    }

    if (cardChanges.metadata && cardChanges.metadata.description !== undefined) {
      const descriptionRegex = /description:\s*['"].*?['"]/;
      content = content.replace(descriptionRegex, `description: '${cardChanges.metadata.description}'`);
    }

    if (cardChanges.renderData && cardChanges.renderData.megacredits !== undefined) {
      const renderDataRegex = /pb\.megacredits\(\s*\d+\s*\)/;
      content = content.replace(renderDataRegex, `pb.megacredits(${cardChanges.renderData.megacredits})`);
    }

    // Write the updated content back to the card file
    await fs.writeFile(cardFile, content, 'utf8');
    console.log(`Updated ${path.basename(cardFile)}`);
  } catch (error) {
    console.error(`Could not update ${path.basename(cardFile)}:`, error.message);
  }
}

// Main function to load changes and apply them
async function applyCardChanges() {
  try {
    // Load custom card changes
    const changesContent = await fs.readFile(changesPath, 'utf8');
    const changes = JSON.parse(changesContent);

    // Apply changes to each specified card
    for (const [cardName, cardChanges] of Object.entries(changes)) {
      const cardFile = await findCardFile(cardName);
      if (cardFile) {
        await applyChangesToFile(cardFile, cardChanges);
      } else {
        console.log(`Card file ${cardName} not found in any expansion folder.`);
      }
    }
  } catch (error) {
    console.error('Error loading or applying changes:', error.message);
  }
}

// Execute the script
applyCardChanges();
