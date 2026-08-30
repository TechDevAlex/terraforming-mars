import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class RevenantProtocol extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.REVENANT_PROTOCOL, tags: [Tag.POWER, Tag.PLANT], cost: 4,
      victoryPoints: -2,
      behavior: {greenery: {}},
      metadata: {cardNumber: 'MY085', renderData: CardRenderer.builder((b) => {b.greenery();}),
        description: '-2 VP. (Nature finds a way.)'},
    });
  }
}
