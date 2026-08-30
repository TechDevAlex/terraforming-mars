import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ThestralsInTheMist extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.THESTRALS_IN_THE_MIST, tags: [Tag.ANIMAL, Tag.SPACE], cost: 10, victoryPoints: 1,
      behavior: {stock: {titanium: 2}, drawCard: 1},
      metadata: {cardNumber: 'HP43', renderData: CardRenderer.builder((b) => {b.titanium(2).cards(1);}),
        description: 'Gain 2 titanium. Draw a card. (Visible only to those who have witnessed death, they pull carriages in silence.)'},
    });
  }
}
