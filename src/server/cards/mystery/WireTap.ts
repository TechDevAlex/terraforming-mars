import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class WireTap extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.WIRE_TAP, tags: [Tag.EARTH, Tag.ANIMAL], cost: 17,
      behavior: {production: {energy: 6}},
      metadata: {cardNumber: 'MY027', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(6);});}),
        description: 'Adjust production. (Innovation breeds opportunity.)'},
    });
  }
}
