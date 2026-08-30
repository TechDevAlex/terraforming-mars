import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AbandonedMine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ABANDONED_MINE, tags: [Tag.BUILDING, Tag.JOVIAN], cost: 14,
      behavior: {production: {heat: 2}, drawCard: 2},
      metadata: {cardNumber: 'MY153', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2);}); b.br; b.cards(2);}),
        description: 'Production and draw. (The plot thickens.)'},
    });
  }
}
