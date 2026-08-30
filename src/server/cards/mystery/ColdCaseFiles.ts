import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ColdCaseFiles extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.COLD_CASE_FILES, tags: [Tag.EARTH], cost: 20,
      behavior: {production: {energy: 2}, drawCard: 1},
      metadata: {cardNumber: 'MY005', renderData: CardRenderer.builder((b) => {b.text('Production and draw.');}),
        description: 'Production and draw. (Every clue matters.)'},
    });
  }
}
