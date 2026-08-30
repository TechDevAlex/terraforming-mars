import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class HiveMind extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.HIVE_MIND, tags: [Tag.MICROBE, Tag.BUILDING], cost: 5,
      behavior: {production: {heat: 1, plants: 1}},
      metadata: {cardNumber: 'MY330', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(1); pb.plants(1);});}),
        description: 'Adjust production. (The plot thickens.)'},
    });
  }
}
