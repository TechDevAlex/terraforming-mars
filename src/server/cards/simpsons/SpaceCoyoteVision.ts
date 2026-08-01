import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class SpaceCoyoteVision extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SPACE_COYOTE_VISION,
      tags: [Tag.JOVIAN, Tag.JOVIAN],
      cost: 26,
      victoryPoints: {tag: Tag.JOVIAN},

      behavior: {
        production: {titanium: 1},
      },

      metadata: {
        cardNumber: 'SI20',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1)).br;
          b.vpText('1 VP per Jovian tag you have.');
        }),
        description: 'Increase your titanium production 1 step. 1 VP per Jovian tag you have.',
      },
    });
  }
}
