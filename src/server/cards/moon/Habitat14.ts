import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';


export class Habitat14 extends Card {
  constructor() {
    super({
      name: CardName.HABITAT_14,
      type: CardType.AUTOMATED,
      tags: [Tag.CITY, Tag.MOON],
      cost: 4,

      behavior: {
        production: {energy: -1},
        moon: {habitatTile: {}},
      },
      reserveUnits: {titanium: 2},

      metadata: {
        description: 'Decrease your energy production 1 step. Spend 2 titanium. Place a habitat tile on The Moon and raise the habitat rate 1 step.',
        cardNumber: 'M05',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1);
          }).br;
          b.minus().titanium(2).br;
          b.moonHabitat();
        }),
      },
    });
  }
}
