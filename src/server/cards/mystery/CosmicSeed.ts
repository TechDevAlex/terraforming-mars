import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CosmicSeed extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.COSMIC_SEED, tags: [], cost: 12,
      victoryPoints: -1,
      behavior: {production: {titanium: 2, plants: 1}},
      metadata: {cardNumber: 'MY054', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(2); pb.plants(1);});}),
        description: '-1 VP. (The truth is out there.)'},
    });
  }
}
