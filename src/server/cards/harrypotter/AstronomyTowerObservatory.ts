import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AstronomyTowerObservatory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ASTRONOMY_TOWER_OBSERVATORY, tags: [Tag.SPACE, Tag.SCIENCE, Tag.BUILDING], cost: 16, victoryPoints: 2,
      behavior: {production: {energy: 1, titanium: 1}, drawCard: 1},
      metadata: {cardNumber: 'HP26', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.energy(1).titanium(1)).cards(1);}),
        description: 'Increase energy and titanium production 1 step each. Draw a card. (From the tallest tower, students chart the movements of planets and prophecies alike.)'},
    });
  }
}
