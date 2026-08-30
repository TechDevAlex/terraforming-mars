import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class EldritchSigil extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ELDRITCH_SIGIL, tags: [Tag.ANIMAL, Tag.BUILDING], cost: 8,
      behavior: {greenery: {}},
      metadata: {cardNumber: 'MY075', renderData: CardRenderer.builder((b) => {b.greenery();}),
        description: 'Place greenery. (The frontier expands.)'},
    });
  }
}
