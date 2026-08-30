import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AncientRuins extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.ANCIENT_RUINS, tags: [Tag.SCIENCE], cost: 22,
      behavior: {tr: 2},
      metadata: {cardNumber: 'MY213', renderData: CardRenderer.builder((b) => {b.text('Raise TR.');}),
        description: 'Raise TR. (The unknown beckons.)'},
    });
  }
}
