import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PsionicAmplifier extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PSIONIC_AMPLIFIER, tags: [Tag.CITY], cost: 22,
      victoryPoints: 2,
      behavior: {production: {titanium: 2}, drawCard: 1},
      metadata: {cardNumber: 'MY333', renderData: CardRenderer.builder((b) => {b.text('Production and draw.');}),
        description: '2 VP. (Innovation breeds opportunity.)'},
    });
  }
}
