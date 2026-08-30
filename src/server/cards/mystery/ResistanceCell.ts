import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ResistanceCell extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.RESISTANCE_CELL, tags: [], cost: 12,
      victoryPoints: 2,
      behavior: {production: {heat: 2}},
      metadata: {cardNumber: 'MY197', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2);});}),
        description: '2 VP. (Nature finds a way.)'},
    });
  }
}
