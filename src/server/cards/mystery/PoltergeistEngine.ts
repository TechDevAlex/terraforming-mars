import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PoltergeistEngine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.POLTERGEIST_ENGINE, tags: [Tag.SCIENCE], cost: 22,
      behavior: {greenery: {}},
      metadata: {cardNumber: 'MY082', renderData: CardRenderer.builder((b) => {b.greenery();}),
        description: 'Place greenery. (Nature finds a way.)'},
    });
  }
}
