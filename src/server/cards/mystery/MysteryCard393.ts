import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard393 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_393, tags: [Tag.MARS], cost: 13,
      behavior: {production: {titanium: 1}, drawCard: 1},
      metadata: {cardNumber: 'MY393', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(1);}); b.br; b.cards(1);}),
        description: 'Production and draw. (Nothing is as it seems.)'},
    });
  }
}
