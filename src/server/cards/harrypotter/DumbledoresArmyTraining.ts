import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DumbledoresArmyTraining extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DUMBLEDORES_ARMY_TRAINING, tags: [Tag.EARTH], cost: 11, victoryPoints: 1,
      behavior: {tr: 1, drawCard: 1},
      metadata: {cardNumber: 'HP32', renderData: CardRenderer.builder((b) => {b.tr(1).cards(1);}),
        description: 'Raise TR 1 step. Draw a card. (Every student who joined the DA chose courage over comfort.)'},
    });
  }
}
