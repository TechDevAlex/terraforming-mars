import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard401 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_401, tags: [Tag.JOVIAN, Tag.EARTH], cost: 10,
      behavior: {production: {titanium: 4, energy: 2}},
      metadata: {cardNumber: 'MY401', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(4); pb.energy(2);});}),
        description: 'Adjust production. (Shadows hide secrets.)'},
    });
  }
}
