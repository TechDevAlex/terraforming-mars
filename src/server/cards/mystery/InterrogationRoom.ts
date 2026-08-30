import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class InterrogationRoom extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.INTERROGATION_ROOM, tags: [], cost: 23,
      victoryPoints: 3,
      behavior: {production: {steel: 1, megacredits: 2}},
      metadata: {cardNumber: 'MY016', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Space warps.)'},
    });
  }
}
