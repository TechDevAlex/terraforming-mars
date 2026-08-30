import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SupplyChain extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SUPPLY_CHAIN, tags: [Tag.MARS, Tag.EARTH], cost: 9,
      behavior: {global: {temperature: 1}},
      metadata: {cardNumber: 'MY165', renderData: CardRenderer.builder((b) => {b.text('Raise global parameter.');}),
        description: 'Raise global parameter. (The stars align.)'},
    });
  }
}
