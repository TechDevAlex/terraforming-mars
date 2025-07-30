import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Card} from '../Card';
import {CardRenderer} from '../render/CardRenderer';

export class EarthElevator extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 50,
      tags: [Tag.SPACE, Tag.EARTH, Tag.EARTH, Tag.EARTH],
      name: CardName.EARTH_ELEVATOR,
      type: CardType.AUTOMATED,
      victoryPoints: 4,

      behavior: {
        production: {titanium: 5},
      },

      metadata: {
        description: 'Increase your titanium production 5 steps.',
        cardNumber: 'C08',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(3));
        }),
      },
    });
  }
}
