import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard511 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_511, tags: [Tag.CITY, Tag.MICROBE], cost: 24,
      victoryPoints: 2,
      behavior: {city: {}, production: {megacredits: 2}},
      metadata: {cardNumber: 'MY511', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(2);}); b.br; b.city();}),
        description: '2 VP. (Secrets have power.)'},
    });
  }
}
