import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TrapDoor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.TRAP_DOOR, tags: [Tag.MARS, Tag.BUILDING], cost: 18,
      behavior: {city: {}, production: {megacredits: 1}},
      metadata: {cardNumber: 'MY253', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(1);}); b.br; b.city();}),
        description: 'Place city, gain production. (The truth is out there.)'},
    });
  }
}
