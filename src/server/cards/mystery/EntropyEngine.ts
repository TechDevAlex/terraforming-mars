import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class EntropyEngine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ENTROPY_ENGINE, tags: [Tag.SPACE], cost: 13,
      behavior: {production: {steel: 1}, drawCard: 1},
      metadata: {cardNumber: 'MY043', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(1);}); b.br; b.cards(1);}),
        description: 'Production and draw. (Time bends.)'},
    });
  }
}
