import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ColdWarStandoff extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.COLD_WAR_STANDOFF, tags: [Tag.EARTH], cost: 7,
      behavior: {production: {titanium: 1, steel: 1}},
      metadata: {cardNumber: 'MY240', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (A whisper in the void.)'},
    });
  }
}
