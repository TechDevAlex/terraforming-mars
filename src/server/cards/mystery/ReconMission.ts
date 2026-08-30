import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ReconMission extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.RECON_MISSION, tags: [], cost: 24,
      victoryPoints: -2,
      behavior: {production: {steel: 2, plants: 1}},
      metadata: {cardNumber: 'MY222', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(2); pb.plants(1);});}),
        description: '-2 VP. (Secrets have power.)'},
    });
  }
}
