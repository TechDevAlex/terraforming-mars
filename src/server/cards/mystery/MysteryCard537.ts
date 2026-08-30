import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard537 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_537, tags: [], cost: 14,
      behavior: {production: {heat: 1, titanium: 1}},
      metadata: {cardNumber: 'MY537', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(1); pb.titanium(1);});}),
        description: 'Adjust production. (A whisper in the void.)'},
    });
  }
}
