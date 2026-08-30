import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard463 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_463, tags: [Tag.MICROBE], cost: 16,
      behavior: {production: {titanium: 2}, drawCard: 2},
      metadata: {cardNumber: 'MY463', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(2);}); b.br; b.cards(2);}),
        description: 'Production and draw. (Nature finds a way.)'},
    });
  }
}
