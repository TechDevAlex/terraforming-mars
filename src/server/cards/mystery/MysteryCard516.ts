import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard516 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_516, tags: [Tag.MICROBE, Tag.ANIMAL], cost: 7,
      victoryPoints: -2,
      behavior: {production: {heat: 2}, drawCard: 1},
      metadata: {cardNumber: 'MY516', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2);}); b.br; b.cards(1);}),
        description: '-2 VP. (Reality shifts.)'},
    });
  }
}
