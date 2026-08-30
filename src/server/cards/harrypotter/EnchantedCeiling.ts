import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class EnchantedCeiling extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ENCHANTED_CEILING, tags: [Tag.BUILDING], cost: 5,
      behavior: {production: {energy: 1}},
      metadata: {cardNumber: 'HP35', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.energy(1));}),
        description: 'Increase energy production 1 step. (The Great Hall\'s ceiling mirrors the sky above, stormy or serene.)'},
    });
  }
}
