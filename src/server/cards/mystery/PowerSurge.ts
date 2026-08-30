import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PowerSurge extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.POWER_SURGE, tags: [Tag.SCIENCE, Tag.POWER], cost: 12,
      behavior: {production: {titanium: 1}, drawCard: 2},
      metadata: {cardNumber: 'MY171', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(1);}); b.br; b.cards(2);}),
        description: 'Production and draw. (Darkness falls.)'},
    });
  }
}
