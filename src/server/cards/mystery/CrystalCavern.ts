import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CrystalCavern extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.CRYSTAL_CAVERN, tags: [], cost: 15,
      victoryPoints: -1,
      behavior: {tr: 2},
      metadata: {cardNumber: 'MY135', renderData: CardRenderer.builder((b) => {b.text('Raise TR.');}),
        description: 'Raise TR. (Secrets have power.)'},
    });
  }
}
