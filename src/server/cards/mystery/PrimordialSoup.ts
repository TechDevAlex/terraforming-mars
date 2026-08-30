import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PrimordialSoup extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PRIMORDIAL_SOUP, tags: [Tag.EARTH], cost: 15,
      behavior: {production: {plants: 2}},
      metadata: {cardNumber: 'MY129', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(2);});}),
        description: 'Adjust production. (The mystery deepens.)'},
    });
  }
}
