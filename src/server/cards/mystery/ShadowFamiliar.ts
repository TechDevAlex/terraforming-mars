import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ShadowFamiliar extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SHADOW_FAMILIAR, tags: [Tag.BUILDING, Tag.SCIENCE], cost: 15,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY068', renderData: CardRenderer.builder((b) => {b.text('Place an ocean.');}),
        description: 'Place an ocean. (The mystery deepens.)'},
    });
  }
}
