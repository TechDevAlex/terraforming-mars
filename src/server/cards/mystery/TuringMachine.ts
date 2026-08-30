import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TuringMachine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.TURING_MACHINE, tags: [Tag.POWER], cost: 13,
      behavior: {production: {energy: 1, heat: 2}},
      metadata: {cardNumber: 'MY325', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(1); pb.heat(2);});}),
        description: 'Adjust production. (Every clue matters.)'},
    });
  }
}
