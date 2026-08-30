import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PlasmaCathedral extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PLASMA_CATHEDRAL, tags: [Tag.CITY, Tag.SPACE], cost: 20,
      behavior: {production: {titanium: 2}},
      metadata: {cardNumber: 'MY046', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(2);});}),
        description: 'Adjust production. (Every clue matters.)'},
    });
  }
}
