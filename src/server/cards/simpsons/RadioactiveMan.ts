import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class RadioactiveMan extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.RADIOACTIVE_MAN,
      tags: [Tag.SCIENCE, Tag.SPACE],
      cost: 17,
      victoryPoints: {tag: Tag.SCIENCE, per: 2},

      behavior: {
        production: {energy: 1},
      },

      metadata: {
        cardNumber: 'SI09',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1)).br;
          b.vpText('1 VP per 2 science tags you have.');
        }),
        description: 'Increase your energy production 1 step. 1 VP per 2 science tags you have.',
      },
    });
  }
}
