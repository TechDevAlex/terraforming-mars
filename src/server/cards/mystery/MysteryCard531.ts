import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard531 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_531, tags: [], cost: 50,
      behavior: {production: {titanium: 4, megacredits: 2}},
      metadata: {cardNumber: 'MY531', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(4); pb.megacredits(2);});}),
        description: 'Adjust production. (Trust no one.)'},
    });
  }
}
