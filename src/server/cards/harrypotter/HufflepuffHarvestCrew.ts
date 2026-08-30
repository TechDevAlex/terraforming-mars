import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class HufflepuffHarvestCrew extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.HUFFLEPUFF_HARVEST_CREW, tags: [Tag.PLANT], cost: 6,
      behavior: {production: {plants: 1, megacredits: 1}},
      metadata: {cardNumber: 'HP41', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.plants(1).megacredits(1));}),
        description: 'Increase plant and M€ production 1 step each. (Hufflepuffs work without complaint, and the harvest is always plentiful.)'},
    });
  }
}
