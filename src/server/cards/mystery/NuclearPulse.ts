import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class NuclearPulse extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.NUCLEAR_PULSE, tags: [Tag.POWER], cost: 15,
      victoryPoints: 3,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY305', renderData: CardRenderer.builder((b) => {b.oceans(1);}),
        description: '3 VP. (The truth is out there.)'},
    });
  }
}
