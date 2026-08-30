import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard480 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_480, tags: [Tag.ANIMAL], cost: 4,
      behavior: {production: {steel: 2}, drawCard: 1},
      metadata: {cardNumber: 'MY480', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(2);}); b.br; b.cards(1);}),
        description: 'Production and draw. (Darkness falls.)'},
    });
  }
}
