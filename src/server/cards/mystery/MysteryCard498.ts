import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard498 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_498, tags: [Tag.MICROBE, Tag.SPACE], cost: 11,
      victoryPoints: -1,
      behavior: {production: {plants: 2, energy: 1}},
      metadata: {cardNumber: 'MY498', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(2); pb.energy(1);});}),
        description: '-1 VP. (Every clue matters.)'},
    });
  }
}
