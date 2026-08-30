import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AnsibleNetwork extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ANSIBLE_NETWORK, tags: [Tag.JOVIAN], cost: 25,
      behavior: {production: {energy: 2, steel: 2}},
      metadata: {cardNumber: 'MY364', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(2); pb.steel(2);});}),
        description: 'Adjust production. (Nothing is as it seems.)'},
    });
  }
}
