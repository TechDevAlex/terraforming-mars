import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryThinkTank extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_THINK_TANK, tags: [Tag.SCIENCE, Tag.POWER], cost: 10,
      behavior: {production: {energy: 1}, drawCard: 2},
      metadata: {cardNumber: 'MY191', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(1);}); b.br; b.cards(2);}),
        description: 'Production and draw. (Time bends.)'},
    });
  }
}
