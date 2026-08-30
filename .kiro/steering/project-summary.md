# Terraforming Mars — Project Summary

A web-based TypeScript implementation of the Terraforming Mars board game.

Repo: `https://github.com/terraforming-mars/terraforming-mars.git`

## Architecture

- **Server**: Node.js — `src/server/` (entry: `src/server/server.ts`)
- **Client**: Vue 2 — `src/client/` (entry: `src/client/main.ts`)
- **Shared types**: `src/common/` (enums, interfaces, models shared between client and server)
- **Tests**: `tests/` (Mocha + Chai, mirroring the source structure)
- **Build**: TypeScript + Webpack. LESS for styles.
- **Database**: SQLite (default) or PostgreSQL (optional)
- **Node**: >=16.x <=22.x

## Key Commands

```bash
npm run build            # Full build (CSS + JSON + server + client)
npm run build:server     # TypeScript compile server only
npm run build:client     # Webpack client bundle
npm run dev:server       # Dev server with auto-reload (tsnd)
npm run dev:client       # Webpack watch mode
npm run test             # Run all tests (server + client)
npm run test:server      # Server tests only
npm run lint             # ESLint + Vue diagnostics + i18n audit
```

## Expansions (GameModule)

Defined in `src/common/cards/GameModule.ts`. Each expansion has a string key:

| Key          | Name            | Card Folder                              | Manifest File                                        |
|--------------|-----------------|------------------------------------------|------------------------------------------------------|
| `base`       | Base            | `src/server/cards/base/`                 | `src/server/cards/StandardCardManifests.ts`           |
| `corpera`    | Corporate Era   | `src/server/cards/base/`                 | `src/server/cards/StandardCardManifests.ts`           |
| `promo`      | Promo           | `src/server/cards/promo/`               | `src/server/cards/promo/PromoCardManifest.ts`        |
| `venus`      | Venus Next      | `src/server/cards/venusNext/`           | `src/server/cards/venusNext/VenusCardManifest.ts`    |
| `colonies`   | Colonies        | `src/server/cards/colonies/`            | `src/server/cards/colonies/ColoniesCardManifest.ts`  |
| `prelude`    | Prelude         | `src/server/cards/prelude/`             | `src/server/cards/prelude/PreludeCardManifest.ts`    |
| `prelude2`   | Prelude 2       | `src/server/cards/prelude2/`            | `src/server/cards/prelude2/Prelude2CardManifest.ts`  |
| `turmoil`    | Turmoil         | `src/server/cards/turmoil/`             | `src/server/cards/turmoil/TurmoilCardManifest.ts`    |
| `community`  | Community       | `src/server/cards/community/`           | `src/server/cards/community/CommunityCardManifest.ts`|
| `ares`       | Ares            | `src/server/cards/ares/`                | `src/server/cards/ares/AresCardManifest.ts`          |
| `moon`       | The Moon        | `src/server/cards/moon/`                | `src/server/cards/moon/MoonCardManifest.ts`          |
| `pathfinders` | Pathfinders    | `src/server/cards/pathfinders/`         | `src/server/cards/pathfinders/PathfindersCardManifest.ts` |
| `ceo`        | CEOs            | `src/server/cards/ceos/`               | `src/server/cards/ceos/CeoCardManifest.ts`           |
| `starwars`   | Star Wars       | `src/server/cards/starwars/`            | `src/server/cards/starwars/StarwarsCardManifest.ts`  |
| `simpsons`   | The Simpsons    | `src/server/cards/simpsons/`            | `src/server/cards/simpsons/SimpsonsCardManifest.ts`  |
| `underworld` | Underworld      | `src/server/cards/underworld/`          | `src/server/cards/underworld/UnderworldCardManifest.ts` |

## Card Structure

Each card is a single TypeScript class extending `Card` (from `src/server/cards/Card.ts`).

### Card Class Pattern

```typescript
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';

export class MyNewCard extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,     // AUTOMATED | ACTIVE | EVENT | CORPORATION | PRELUDE | CEO | STANDARD_PROJECT | STANDARD_ACTION
      name: CardName.MY_NEW_CARD,
      tags: [Tag.SCIENCE],
      cost: 10,
      // victoryPoints: 1,
      // requirements: [{tag: Tag.SCIENCE, count: 2}],
      // resourceType: CardResource.SCIENCE,

      // Declarative behavior (preferred over imperative):
      behavior: {
        production: {megacredits: 2},
        // stock: {titanium: 1},
        // drawCard: 1,
        // tr: 1,
        // ocean: {},
        // city: {},
        // greenery: {},
      },

      metadata: {
        cardNumber: 'X01',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2));
        }),
        description: 'Increase your M€ production 2 steps.',
      },
    });
  }
}
```

### Card Types

- `CardType.AUTOMATED` — played once, effect resolves immediately
- `CardType.ACTIVE` — has a repeatable action (implement `IActionCard` with `canAct` / `action`)
- `CardType.EVENT` — played once then flipped face-down
- `CardType.CORPORATION` — corporation card
- `CardType.PRELUDE` — prelude card
- `CardType.CEO` — CEO card
- `CardType.STANDARD_PROJECT` — standard project
- `CardType.STANDARD_ACTION` — standard action (always available)

### Key Interfaces

- `IProjectCard` — any playable project card
- `IActionCard` — cards with repeatable actions (`canAct`, `action`)
- `ICorporationCard` — corporations (in `src/server/cards/corporation/`)
- `IPreludeCard` — prelude cards (in `src/server/cards/prelude/IPreludeCard.ts`)
- `ICeoCard` — CEO cards (in `src/server/cards/ceos/ICeoCard.ts`)

## How to Add a New Card

### 1. Add card name to enum

File: `src/common/cards/CardName.ts`

Add a new entry to the `CardName` enum. Names are organized alphabetically within sections. The value is the display name.

```typescript
MY_NEW_CARD = 'My New Card',
```

### 2. Create the card class

File: `src/server/cards/{expansion}/MyNewCard.ts`

Create a class extending `Card`. See "Card Class Pattern" above. For active cards, also implement `IActionCard`.

### 3. Register in the expansion's manifest

File: `src/server/cards/{expansion}/{Expansion}CardManifest.ts`

Add an entry to the appropriate section (`projectCards`, `corporationCards`, `preludeCards`, `ceoCards`, `standardProjects`, `standardActions`):

```typescript
[CardName.MY_NEW_CARD]: {Factory: MyNewCard},
```

If the card requires another expansion to be active, add `compatibility`:

```typescript
[CardName.MY_NEW_CARD]: {Factory: MyNewCard, compatibility: 'venus'},
// or multiple:
[CardName.MY_NEW_CARD]: {Factory: MyNewCard, compatibility: ['venus', 'turmoil']},
```

### 4. Write tests

File: `tests/cards/{expansion}/MyNewCard.spec.ts`

```typescript
import {expect} from 'chai';
import {MyNewCard} from '../../../src/server/cards/{expansion}/MyNewCard';
import {TestGame} from '../../TestGame';
import {testGame} from '../../TestGame';

describe('MyNewCard', () => {
  it('Should play', () => {
    const card = new MyNewCard();
    const [game, player] = testGame(2);
    card.play(player);
    expect(player.production.megacredits).to.eq(2);
  });
});
```

### 5. Build and test

```bash
npm run build:server
npm run test:server
```

## How to Add a New Expansion

### 1. Add to GameModule

File: `src/common/cards/GameModule.ts`

- Add the expansion key to the `EXPANSIONS` array
- Add it to `MODULE_NAMES` with a display name
- Add it to `DEFAULT_EXPANSIONS` (usually `false`)

### 2. Create card folder and manifest

- Create `src/server/cards/{expansion}/`
- Create `src/server/cards/{expansion}/{Expansion}CardManifest.ts`:

```typescript
import {ModuleManifest} from '../ModuleManifest';

export const MY_EXPANSION_CARD_MANIFEST = new ModuleManifest({
  module: 'myexpansion',
  projectCards: { /* ... */ },
  corporationCards: { /* ... */ },
  // preludeCards, ceoCards, standardProjects, standardActions, globalEvents
});
```

### 3. Register the manifest

**AllManifests.ts** (`src/server/cards/AllManifests.ts`):
- Import and add to `ALL_MODULE_MANIFESTS` array

**GameCards.ts** (`src/server/GameCards.ts`):
- Import the manifest
- Add a `[gameOptions.myExpansionOption, MY_EXPANSION_MANIFEST]` entry to the manifests array

### 4. Add game option flag

**GameOptions.ts** (`src/server/game/GameOptions.ts`):
- Add a boolean field to `GameOptions` type (e.g. `myExpansionOption: boolean`)
- Add it to `DEFAULT_GAME_OPTIONS` (default `false`)
- Add it to the `expansions` record in `DEFAULT_GAME_OPTIONS`

### 5. Add compatibility check

**CardFactorySpec.ts** (`src/server/cards/CardFactorySpec.ts`):
- Add a `case` in the `isCompatibleWith` switch for the new expansion key

### 6. Wire up the UI (optional)

- Update the game creation form to include a toggle for the expansion

### 7. Create test folder

- Create `tests/cards/{expansion}/` for card tests

## Key Files Reference

| Purpose                        | Location                                           |
|-------------------------------|----------------------------------------------------|
| Card base class               | `src/server/cards/Card.ts`                         |
| Card name enum                | `src/common/cards/CardName.ts`                     |
| GameModule / Expansion types  | `src/common/cards/GameModule.ts`                   |
| All manifests aggregation     | `src/server/cards/AllManifests.ts`                 |
| Module manifest class         | `src/server/cards/ModuleManifest.ts`               |
| Card factory spec + compat    | `src/server/cards/CardFactorySpec.ts`              |
| Game card assembly            | `src/server/GameCards.ts`                          |
| Game options                  | `src/server/game/GameOptions.ts`                   |
| Card renderer                 | `src/server/cards/render/CardRenderer.ts`          |
| Card requirements             | `src/server/cards/requirements/`                   |
| Behavior system               | `src/server/behavior/Behavior.ts`                  |
| Behavior executor             | `src/server/behavior/Executor.ts`                  |
| Card types enum               | `src/common/cards/CardType.ts`                     |
| Tags enum                     | `src/common/cards/Tag.ts`                          |
| Resources enum                | `src/common/Resource.ts`                           |
| Card resource types           | `src/common/CardResource.ts`                       |
| Test game helpers             | `tests/TestGame.ts`, `tests/TestingUtils.ts`       |
| Main game logic               | `src/server/Game.ts`                               |
| Player logic                  | `src/server/Player.ts`                             |
| Server entry                  | `src/server/server.ts`                             |
