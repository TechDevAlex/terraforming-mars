import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PulsarArray extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PULSAR_ARRAY, tags: [Tag.EARTH, Tag.POWER], cost: 5,
      behavior: {production: {heat: 1}, drawCard: 2},
      metadata: {cardNumber: 'MY040', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(1);}); b.br; b.cards(2);}),
        description: 'Production and draw. (The unknown beckons.)'},
    });
  }
}
