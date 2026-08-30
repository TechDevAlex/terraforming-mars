import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class JammingStation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.JAMMING_STATION, tags: [Tag.PLANT], cost: 22,
      victoryPoints: 1,
      behavior: {city: {}, production: {megacredits: 2}},
      metadata: {cardNumber: 'MY096', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(2);}); b.br; b.city();}),
        description: '1 VP. (Knowledge is the ultimate currency.)'},
    });
  }
}
