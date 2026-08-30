import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class EmergencyBeacon extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.EMERGENCY_BEACON, tags: [], cost: 9,
      victoryPoints: -2,
      behavior: {city: {}, production: {megacredits: 1}},
      metadata: {cardNumber: 'MY118', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(1);}); b.br; b.city();}),
        description: '-2 VP. (The frontier expands.)'},
    });
  }
}
