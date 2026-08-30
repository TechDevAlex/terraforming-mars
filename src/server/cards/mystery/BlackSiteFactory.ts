import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BlackSiteFactory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BLACK_SITE_FACTORY, tags: [Tag.BUILDING], cost: 7,
      behavior: {production: {steel: 1}},
      metadata: {cardNumber: 'MY151', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(1);});}),
        description: 'Adjust production. (The veil lifts.)'},
    });
  }
}
