import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GameOfLife extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.GAME_OF_LIFE, tags: [], cost: 15,
      behavior: {production: {megacredits: 1}},
      metadata: {cardNumber: 'MY324', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(1);});}),
        description: 'Adjust production. (The plot thickens.)'},
    });
  }
}
