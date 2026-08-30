import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class WeasleyBurrowExpansion extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.WEASLEY_BURROW_EXPANSION, tags: [Tag.BUILDING], cost: 7,
      behavior: {production: {megacredits: 1, steel: 1}},
      metadata: {cardNumber: 'HP28', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(1).steel(1));}),
        description: 'Increase M€ and steel production 1 step each. (Another floor added, held together by magic and Molly\'s determination.)'},
    });
  }
}
