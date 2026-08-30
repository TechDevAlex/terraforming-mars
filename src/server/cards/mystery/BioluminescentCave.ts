import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BioluminescentCave extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BIOLUMINESCENT_CAVE, tags: [Tag.CITY], cost: 17,
      victoryPoints: 1,
      behavior: {production: {energy: 2}, drawCard: 1},
      metadata: {cardNumber: 'MY124', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(2);}); b.br; b.cards(1);}),
        description: '1 VP. (Time bends.)'},
    });
  }
}
