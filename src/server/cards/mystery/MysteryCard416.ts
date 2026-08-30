import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard416 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_416, tags: [Tag.SCIENCE, Tag.BUILDING], cost: 20,
      behavior: {production: {titanium: 1, megacredits: 2}},
      metadata: {cardNumber: 'MY416', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(1); pb.megacredits(2);});}),
        description: 'Adjust production. (Darkness falls.)'},
    });
  }
}
