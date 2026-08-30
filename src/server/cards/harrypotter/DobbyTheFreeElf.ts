import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DobbyTheFreeElf extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DOBBY_THE_FREE_ELF, tags: [Tag.EARTH], cost: 4, victoryPoints: 1,
      behavior: {stock: {megacredits: 3}, drawCard: 1},
      metadata: {cardNumber: 'HP47', renderData: CardRenderer.builder((b) => {b.megacredits(3).cards(1);}),
        description: 'Gain 3 M€. Draw a card. (Dobby is free, and Dobby has come to save Harry Potter.)'},
    });
  }
}
