import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class Whistleblower extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.WHISTLEBLOWER, tags: [Tag.MICROBE, Tag.JOVIAN], cost: 6,
      behavior: {global: {temperature: 1}},
      metadata: {cardNumber: 'MY186', renderData: CardRenderer.builder((b) => {b.text('Raise global parameter.');}),
        description: 'Raise global parameter. (Progress demands sacrifice.)'},
    });
  }
}
