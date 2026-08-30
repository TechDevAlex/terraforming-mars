import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class VaultDoor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.VAULT_DOOR, tags: [Tag.BUILDING, Tag.JOVIAN], cost: 18,
      behavior: {production: {plants: 1, megacredits: 2}},
      metadata: {cardNumber: 'MY264', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(1); pb.megacredits(2);});}),
        description: 'Adjust production. (Reality shifts.)'},
    });
  }
}
