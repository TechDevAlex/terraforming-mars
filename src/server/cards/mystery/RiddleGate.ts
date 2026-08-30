import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class RiddleGate extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.RIDDLE_GATE, tags: [], cost: 3,
      behavior: {global: {temperature: 1}},
      metadata: {cardNumber: 'MY244', renderData: CardRenderer.builder((b) => {b.text('Raise global parameter.');}),
        description: 'Raise global parameter. (Steel and will forge the path.)'},
    });
  }
}
