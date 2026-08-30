import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DarkWebHub extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.DARK_WEB_HUB, tags: [], cost: 11,
      behavior: {global: {temperature: 1}},
      metadata: {cardNumber: 'MY100', renderData: CardRenderer.builder((b) => {b.text('Raise global parameter.');}),
        description: 'Raise temperature 1 step. (The stars align.)'},
    });
  }
}
