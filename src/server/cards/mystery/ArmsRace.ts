import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ArmsRace extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ARMS_RACE, tags: [], cost: 6,
      victoryPoints: -1,
      behavior: {tr: 1, production: {megacredits: 1}},
      metadata: {cardNumber: 'MY239', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'TR and production. (The stars align.)'},
    });
  }
}
