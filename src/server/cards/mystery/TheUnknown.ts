import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TheUnknown extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.THE_UNKNOWN, tags: [], cost: 13,
      victoryPoints: -1,
      behavior: {production: {megacredits: 2}, drawCard: 2},
      metadata: {cardNumber: 'MY241', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(2);}); b.br; b.cards(2);}),
        description: '-1 VP. (Innovation breeds opportunity.)'},
    });
  }
}
