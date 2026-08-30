import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DistressSignal extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DISTRESS_SIGNAL, tags: [Tag.MARS], cost: 3,
      behavior: {production: {heat: 1}},
      metadata: {cardNumber: 'MY119', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(1);});}),
        description: 'Adjust production. (Reality shifts.)'},
    });
  }
}
