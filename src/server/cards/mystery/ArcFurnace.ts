import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ArcFurnace extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ARC_FURNACE, tags: [Tag.JOVIAN, Tag.SCIENCE], cost: 16,
      behavior: {production: {megacredits: 3, energy: 1}},
      metadata: {cardNumber: 'MY282', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(3); pb.energy(1);});}),
        description: 'Adjust production. (A whisper in the void.)'},
    });
  }
}
