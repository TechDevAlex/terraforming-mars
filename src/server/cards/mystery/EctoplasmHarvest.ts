import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class EctoplasmHarvest extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ECTOPLASM_HARVEST, tags: [Tag.EARTH], cost: 9,
      victoryPoints: -1,
      behavior: {production: {heat: 2}, drawCard: 1},
      metadata: {cardNumber: 'MY077', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2);}); b.br; b.cards(1);}),
        description: '-1 VP. (The veil lifts.)'},
    });
  }
}
