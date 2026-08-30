import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class Disinformation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DISINFORMATION, tags: [], cost: 33,
      behavior: {production: {heat: 2, megacredits: 2, plants: 2}},
      metadata: {cardNumber: 'MY184', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2); pb.megacredits(2); pb.plants(2);});}),
        description: 'Adjust production. (Reality shifts.)'},
    });
  }
}
