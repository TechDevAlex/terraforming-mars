import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SummitMeeting extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.SUMMIT_MEETING, tags: [Tag.MICROBE], cost: 26,
      victoryPoints: 1,
      behavior: {production: {plants: 2}},
      metadata: {cardNumber: 'MY209', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(2);});}),
        description: '1 VP. (Every clue matters.)'},
    });
  }
}
