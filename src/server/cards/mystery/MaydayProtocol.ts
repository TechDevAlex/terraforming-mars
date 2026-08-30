import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MaydayProtocol extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MAYDAY_PROTOCOL, tags: [Tag.SCIENCE], cost: 7,
      behavior: {tr: 1},
      metadata: {cardNumber: 'MY120', renderData: CardRenderer.builder((b) => {b.text('Raise TR.');}),
        description: 'Raise TR. (Trust no one.)'},
    });
  }
}
