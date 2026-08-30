import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TachyonPulse extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.TACHYON_PULSE, tags: [Tag.SCIENCE], cost: 12,
      behavior: {production: {heat: 2, titanium: 1}},
      metadata: {cardNumber: 'MY362', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2); pb.titanium(1);});}),
        description: 'Adjust production. (The truth is out there.)'},
    });
  }
}
