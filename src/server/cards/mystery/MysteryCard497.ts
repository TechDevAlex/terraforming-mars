import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard497 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_497, tags: [Tag.ANIMAL, Tag.SPACE], cost: 26,
      behavior: {city: {}, production: {megacredits: 2}},
      metadata: {cardNumber: 'MY497', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(2);}); b.br; b.city();}),
        description: 'Place city, gain production. (A whisper in the void.)'},
    });
  }
}
