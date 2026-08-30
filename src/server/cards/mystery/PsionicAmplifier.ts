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
      metadata: {cardNumber: 'MY333', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(2);}); b.br; b.cards(1);}),
        description: '2 VP. (Innovation breeds opportunity.)'},
    });
  }
}
