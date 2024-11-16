import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';

export class AICentral extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.AI_CENTRAL,
      tags: [Tag.SCIENCE, Tag.BUILDING],
      cost: 15,

      behavior: {
        production: {energy: -2},
      },

      action: {
        drawCard: {count: 2},
      },

      victoryPoints: 1,

      requirements: {tag: Tag.SCIENCE, count: 5},
      metadata: {
        description: {
          text: 'Requires 5 science tags to play. Decrease your energy production 2 steps.',
          align: 'left',
        },
        cardNumber: '208',
        renderData: CardRenderer.builder((b) => {
          b.action('Draw 2 cards.', (ab) => ab.empty().startAction.cards(2)).br;
          b.production((pb) => pb.minus().energy(2));
        }),
      },
    });
  }
}
