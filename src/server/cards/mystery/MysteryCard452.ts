import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard452 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_452, tags: [Tag.SCIENCE, Tag.POWER], cost: 16,
      behavior: {production: {heat: 2, steel: 1}},
      metadata: {cardNumber: 'MY452', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2); pb.steel(1);});}),
        description: 'Adjust production. (Trust no one.)'},
    });
  }
}
