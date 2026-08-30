import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AntennaFarm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ANTENNA_FARM, tags: [Tag.ANIMAL, Tag.SCIENCE], cost: 18,
      behavior: {production: {megacredits: 2, heat: 2}},
      metadata: {cardNumber: 'MY179', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(2); pb.heat(2);});}),
        description: 'Adjust production. (Every clue matters.)'},
    });
  }
}
