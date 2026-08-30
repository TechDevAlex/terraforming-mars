import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AidDrop extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.AID_DROP, tags: [], cost: 23,
      behavior: {production: {steel: 2, titanium: 2}},
      metadata: {cardNumber: 'MY200', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(2); pb.titanium(2);});}),
        description: 'Adjust production. (Knowledge is the ultimate currency.)'},
    });
  }
}
