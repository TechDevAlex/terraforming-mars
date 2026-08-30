import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DerelictStation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DERELICT_STATION, tags: [Tag.SPACE], cost: 21,
      behavior: {tr: 1, production: {steel: 1}},
      metadata: {cardNumber: 'MY154', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'Raise your TR 1 step. (Nature finds a way.)'},
    });
  }
}
