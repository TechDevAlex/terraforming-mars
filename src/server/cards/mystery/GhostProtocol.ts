import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GhostProtocol extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.GHOST_PROTOCOL, tags: [Tag.EARTH, Tag.MARS], cost: 4,
      behavior: {production: {megacredits: 1, energy: 1}},
      metadata: {cardNumber: 'MY097', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Innovation breeds opportunity.)'},
    });
  }
}
