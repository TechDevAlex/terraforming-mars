import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ReflexTraining extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.REFLEX_TRAINING, tags: [Tag.JOVIAN], cost: 15,
      behavior: {production: {megacredits: 3}},
      metadata: {cardNumber: 'MY348', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(3);});}),
        description: 'Adjust production. (Time bends.)'},
    });
  }
}
