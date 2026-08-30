import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class EncryptedVault extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ENCRYPTED_VAULT, tags: [Tag.POWER], cost: 19,
      victoryPoints: 2,
      behavior: {city: {}, production: {megacredits: 1}},
      metadata: {cardNumber: 'MY101', renderData: CardRenderer.builder((b) => {b.text('Place city, gain production.');}),
        description: '2 VP. (Darkness falls.)'},
    });
  }
}
