import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard456 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_456, tags: [Tag.SCIENCE, Tag.MARS], cost: 17,
      victoryPoints: 3,
      behavior: {production: {heat: 2}, drawCard: 1},
      metadata: {cardNumber: 'MY456', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2);}); b.br; b.cards(1);}),
        description: '3 VP. (The plot thickens.)'},
    });
  }
}
