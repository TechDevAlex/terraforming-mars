import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FtlCommunication extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.FTL_COMMUNICATION, tags: [Tag.ANIMAL], cost: 20,
      behavior: {production: {plants: 2}},
      metadata: {cardNumber: 'MY363', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(2);});}),
        description: 'Adjust production. (Knowledge is the ultimate currency.)'},
    });
  }
}
