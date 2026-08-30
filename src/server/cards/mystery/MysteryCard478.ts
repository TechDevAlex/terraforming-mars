import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard478 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_478, tags: [Tag.EARTH, Tag.JOVIAN], cost: 15,
      victoryPoints: 3,
      behavior: {production: {energy: 1}},
      metadata: {cardNumber: 'MY478', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(1);});}),
        description: '3 VP. (Time bends.)'},
    });
  }
}
