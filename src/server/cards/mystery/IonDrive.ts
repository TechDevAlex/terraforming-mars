import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class IonDrive extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ION_DRIVE, tags: [Tag.CITY], cost: 17,
      behavior: {production: {titanium: 2}, drawCard: 2},
      metadata: {cardNumber: 'MY302', renderData: CardRenderer.builder((b) => {b.text('Production and draw.');}),
        description: 'Production and draw. (A whisper in the void.)'},
    });
  }
}
