import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PuzzleLock extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PUZZLE_LOCK, tags: [Tag.BUILDING], cost: 18,
      behavior: {production: {steel: 2}, drawCard: 1},
      metadata: {cardNumber: 'MY243', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(2);}); b.br; b.cards(1);}),
        description: 'Production and draw. (Trust no one.)'},
    });
  }
}
