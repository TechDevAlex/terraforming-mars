import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class NexusPoint extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.NEXUS_POINT, tags: [Tag.PLANT], cost: 9,
      behavior: {tr: 1, production: {steel: 2}},
      metadata: {cardNumber: 'MY370', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'TR and production. (Nature finds a way.)'},
    });
  }
}
