import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard449 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_449, tags: [Tag.SPACE], cost: 22,
      behavior: {production: {energy: 2}, drawCard: 2},
      metadata: {cardNumber: 'MY449', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(2);}); b.br; b.cards(2);}),
        description: 'Production and draw. (The truth is out there.)'},
    });
  }
}
