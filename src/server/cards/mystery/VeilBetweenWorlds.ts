import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class VeilBetweenWorlds extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.VEIL_BETWEEN_WORLDS, tags: [Tag.POWER], cost: 25,
      behavior: {production: {plants: 1, steel: 3}},
      metadata: {cardNumber: 'MY070', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(1); pb.steel(3);});}),
        description: 'Adjust production. (The unknown beckons.)'},
    });
  }
}
