import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class HumanitarianMission extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.HUMANITARIAN_MISSION, tags: [Tag.CITY], cost: 9,
      behavior: {production: {megacredits: 1}, drawCard: 2},
      metadata: {cardNumber: 'MY201', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(1);}); b.br; b.cards(2);}),
        description: 'Production and draw. (The frontier expands.)'},
    });
  }
}
