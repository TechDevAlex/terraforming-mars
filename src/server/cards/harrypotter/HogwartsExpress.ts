import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class HogwartsExpress extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HOGWARTS_EXPRESS,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 22,
      victoryPoints: 1,

      behavior: {
        city: {},
        production: {megacredits: {tag: Tag.CITY}},
      },

      metadata: {
        cardNumber: 'HP06',
        renderData: CardRenderer.builder((b) => {
          b.city().br;
          b.production((pb) => pb.megacredits(1).slash().tag(Tag.CITY));
        }),
        description: 'Place a city tile. Increase your M€ production 1 step for each city tag you have, including this.',
      },
    });
  }
}
