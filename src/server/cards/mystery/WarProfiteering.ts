import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class WarProfiteering extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.WAR_PROFITEERING, tags: [Tag.EARTH], cost: 19,
      behavior: {production: {steel: 2}},
      metadata: {cardNumber: 'MY238', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(2);});}),
        description: 'Adjust production. (Nature finds a way.)'},
    });
  }
}
