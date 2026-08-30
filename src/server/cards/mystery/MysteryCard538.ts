import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard538 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_538, tags: [Tag.BUILDING, Tag.MICROBE], cost: 8,
      victoryPoints: 2,
      behavior: {production: {titanium: 1, plants: 1}},
      metadata: {cardNumber: 'MY538', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(1); pb.plants(1);});}),
        description: '2 VP. (The plot thickens.)'},
    });
  }
}
