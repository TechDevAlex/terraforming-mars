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

    // Update cost
    if (cardChanges.cost !== undefined) {
      const costRegex = /(cost:\s*)\d+/;
      content = content.replace(costRegex, `$1${cardChanges.cost}`);
    }

    // Update victory points (top level, not in behavior)
    if (cardChanges.victoryPoints !== undefined) {
      const victoryPointsRegex = /(victoryPoints:\s*)\d+/;
      content = content.replace(victoryPointsRegex, `$1${cardChanges.victoryPoints}`);
    }

    // Update production behavior (precise replacement for production properties)
    if (cardChanges.behavior && cardChanges.behavior.production !== undefined) {
      const productionRegex = /(production:\s*\{[^}]*)(megacredits:\s*)\d+/;
      if (cardChanges.behavior.production.megacredits !== undefined) {
        content = content.replace(productionRegex, `$1$2${cardChanges.behavior.production.megacredits}`);
      }
    }

    // Update requirements (Venus, oxygen, temperature, etc.)
    if (cardChanges.requirements) {
      if (cardChanges.requirements.venus !== undefined) {
        const venusRequirementRegex = /(venus:\s*)\d+/;
        content = content.replace(venusRequirementRegex, `$1${cardChanges.requirements.venus}`);
      }
      if (cardChanges.requirements.oxygen !== undefined) {
        const oxygenRequirementRegex = /(oxygen:\s*)\d+/;
        content = content.replace(oxygenRequirementRegex, `$1${cardChanges.requirements.oxygen}`);
      }
      if (cardChanges.requirements.temperature !== undefined) {
        const temperatureRequirementRegex = /(temperature:\s*)\d+/;
        content = content.replace(temperatureRequirementRegex, `$1${cardChanges.requirements.temperature}`);
      }
    }

    // Update metadata description
    if (cardChanges.metadata && cardChanges.metadata.description !== undefined) {
      const descriptionRegex = /(description:\s*['"]).*?(['"])/;
      content = content.replace(descriptionRegex, `$1${cardChanges.metadata.description}$2`);
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
