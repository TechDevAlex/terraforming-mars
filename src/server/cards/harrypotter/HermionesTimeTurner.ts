import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class HermionesTimeTurner extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HERMIONES_TIME_TURNER,
      tags: [Tag.SCIENCE],
      cost: 9,
      victoryPoints: 1,

      behavior: {
        production: {megacredits: {tag: Tag.SCIENCE, per: 2}},
      },

      metadata: {
        cardNumber: 'HP12',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1).slash().tag(Tag.SCIENCE, 2));
        }),
        description: 'Increase your M€ production 1 step for every 2 science tags you have, including this. (Hermione\'s Time-Turner — a tiny golden hourglass that lets its wearer slip back through time. She used it to attend extra classes, naturally.)',
      },
    });
  }
}
