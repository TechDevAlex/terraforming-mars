import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class EnigmaMachine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.ENIGMA_MACHINE, tags: [Tag.SCIENCE], cost: 16,
      behavior: {drawCard: 1},
      metadata: {cardNumber: 'MY091', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw cards. (The truth is out there.)'},
    });
  }
}
