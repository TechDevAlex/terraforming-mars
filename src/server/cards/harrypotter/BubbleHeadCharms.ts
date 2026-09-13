import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {GlobalParameter} from '../../../common/GlobalParameter';
import {CardRenderer} from '../render/CardRenderer';

export class BubbleHeadCharms extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.BUBBLE_HEAD_CHARMS, tags: [Tag.MARS, Tag.SCIENCE], cost: 8, victoryPoints: 1,
      globalParameterRequirementBonus: {steps: 30, parameter: GlobalParameter.OXYGEN},
      metadata: {cardNumber: 'HP216', renderData: CardRenderer.builder((b) => {
        b.effect('You ignore oxygen requirements on cards.', (eb) => {eb.oxygen(1).asterix().startEffect.text('ignore');});
      }), description: 'Your oxygen requirements on cards are ignored (both minimums and maximums). (A shimmering pocket of air around your head—breathe freely wherever you go.)'}
    });
  }
}
