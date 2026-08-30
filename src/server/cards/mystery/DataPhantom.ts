import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DataPhantom extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DATA_PHANTOM, tags: [Tag.PLANT, Tag.JOVIAN], cost: 22,
      behavior: {production: {titanium: 1}},
      metadata: {cardNumber: 'MY109', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(1);});}),
        description: 'Adjust production. (The truth is out there.)'},
    });
  }
}
