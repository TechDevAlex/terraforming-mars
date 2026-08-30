import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FluxCapacitor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.FLUX_CAPACITOR, tags: [Tag.EARTH], cost: 16,
      behavior: {production: {heat: 4}},
      metadata: {cardNumber: 'MY275', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(4);});}),
        description: 'Adjust production. (Innovation breeds opportunity.)'},
    });
  }
}
