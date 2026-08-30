import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard400 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_400, tags: [Tag.POWER], cost: 11,
      behavior: {production: {heat: 3}},
      metadata: {cardNumber: 'MY400', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(3);});}),
        description: 'Adjust production. (The mystery deepens.)'},
    });
  }
}
