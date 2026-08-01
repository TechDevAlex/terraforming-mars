import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class ItchyAndScratchyStudios extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ITCHY_AND_SCRATCHY_STUDIOS,
      tags: [Tag.EARTH],
      cost: 7,

      behavior: {
        production: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'SI04',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2));
        }),
        description: 'Increase your M€ production 2 steps.',
      },
    });
  }
}
