import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FusionCore extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.FUSION_CORE, tags: [Tag.SPACE], cost: 7,
      behavior: {tr: 1, production: {steel: 1}},
      metadata: {cardNumber: 'MY291', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'Raise your TR 1 step. (The frontier expands.)'},
    });
  }
}
