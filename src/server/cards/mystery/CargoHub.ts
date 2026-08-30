import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CargoHub extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CARGO_HUB, tags: [Tag.MICROBE], cost: 24,
      behavior: {production: {steel: 1, heat: 4}},
      metadata: {cardNumber: 'MY167', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(1); pb.heat(4);});}),
        description: 'Adjust production. (Every clue matters.)'},
    });
  }
}
