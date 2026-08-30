import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MaskedFigure extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MASKED_FIGURE, tags: [Tag.EARTH, Tag.MARS], cost: 9,
      behavior: {production: {energy: 2, steel: 1}},
      metadata: {cardNumber: 'MY248', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(2); pb.steel(1);});}),
        description: 'Adjust production. (The truth is out there.)'},
    });
  }
}
