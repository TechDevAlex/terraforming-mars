import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard382 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_382, tags: [Tag.BUILDING], cost: 5,
      behavior: {production: {heat: 1}, drawCard: 1},
      metadata: {cardNumber: 'MY382', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(1);}); b.br; b.cards(1);}),
        description: 'Production and draw. (A whisper in the void.)'},
    });
  }
}
