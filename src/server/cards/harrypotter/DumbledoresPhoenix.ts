import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class DumbledoresPhoenix extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.DUMBLEDORES_PHOENIX,
      tags: [Tag.SPACE, Tag.JOVIAN],
      cost: 24,
      victoryPoints: {tag: Tag.SCIENCE, per: 2},

      behavior: {
        production: {energy: 1},
      },

      metadata: {
        cardNumber: 'HP09',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1)).br;
          b.vpText('1 VP per 2 science tags you have.');
        }),
        description: 'Increase your energy production 1 step. 1 VP per 2 science tags you have. (Fawkes — Dumbledore\'s phoenix, whose tears heal and whose song strengthens the pure of heart.)',
      },
    });
  }
}
