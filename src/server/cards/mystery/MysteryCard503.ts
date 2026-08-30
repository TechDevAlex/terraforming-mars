import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard503 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_503, tags: [Tag.ANIMAL, Tag.POWER], cost: 5,
      behavior: {production: {titanium: 1}, drawCard: 2},
      metadata: {cardNumber: 'MY503', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(1);}); b.br; b.cards(2);}),
        description: 'Production and draw. (The stars align.)'},
    });
  }
}
