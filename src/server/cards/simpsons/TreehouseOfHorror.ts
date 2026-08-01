import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

export class TreehouseOfHorror extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.TREEHOUSE_OF_HORROR,
      tags: [Tag.MICROBE, Tag.SPACE],
      cost: 14,

      behavior: {
        global: {oxygen: 1},
        addResourcesToAnyCard: [
          {type: CardResource.MICROBE, count: 3},
        ],
      },

      metadata: {
        cardNumber: 'SI17',
        renderData: CardRenderer.builder((b) => {
          b.oxygen(1).br;
          b.resource(CardResource.MICROBE, {amount: 3, digit}).asterix();
        }),
        description: 'Raise oxygen 1 step. Add 3 microbes to ANY card.',
      },
    });
  }
}
