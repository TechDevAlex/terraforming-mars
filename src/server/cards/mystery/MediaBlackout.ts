import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MediaBlackout extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MEDIA_BLACKOUT, tags: [Tag.PLANT], cost: 17,
      behavior: {production: {megacredits: 1, energy: 2, titanium: 2}},
      metadata: {cardNumber: 'MY183', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (The unknown beckons.)'},
    });
  }
}
