import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class LobbyGroup extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.LOBBY_GROUP, tags: [Tag.MARS], cost: 20,
      behavior: {tr: 1, production: {megacredits: 1}},
      metadata: {cardNumber: 'MY193', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'TR and production. (Steel and will forge the path.)'},
    });
  }
}
