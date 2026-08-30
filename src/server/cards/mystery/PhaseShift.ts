import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PhaseShift extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PHASE_SHIFT, tags: [Tag.ANIMAL, Tag.MICROBE], cost: 20,
      behavior: {city: {}, production: {megacredits: 2}},
      metadata: {cardNumber: 'MY272', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(2);}); b.br; b.city();}),
        description: 'Place city, gain production. (The plot thickens.)'},
    });
  }
}
