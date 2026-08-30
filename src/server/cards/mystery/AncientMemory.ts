import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AncientMemory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ANCIENT_MEMORY, tags: [], cost: 28,
      behavior: {production: {plants: 2}},
      metadata: {cardNumber: 'MY343', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(2);});}),
        description: 'Adjust production. (The truth is out there.)'},
    });
  }
}
