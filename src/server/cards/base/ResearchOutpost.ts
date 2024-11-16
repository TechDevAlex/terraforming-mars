import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';

export class ResearchOutpost extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.RESEARCH_OUTPOST,
      tags: [Tag.JOVIAN, Tag.SCIENCE],
      cost: 23,

      behavior: {
      },
      action: {
        stock: {megacredits: {tag: Tag.JOVIAN}},
      },

      victoryPoints: {tag: Tag.JOVIAN, per: 2},


      requirements: {tag: Tag.JOVIAN, count: 2},
      metadata: {
        description: {
          text: 'Requires 2 Jovian tags to play.',
          align: 'left',
        },
        cardNumber: '208',
        renderData: CardRenderer.builder((b) => {
          b.action('Gain 1 M€ for each Jovian Tag you own.', (eb) => {
            eb.startAction.megacredits(1).slash();
            eb.tag(Tag.JOVIAN);
          }).br;
        }),
      },
    });
  }
}
