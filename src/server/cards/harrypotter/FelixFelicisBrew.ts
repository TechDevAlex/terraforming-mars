import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FelixFelicisBrew extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.FELIX_FELICIS_BREW, tags: [Tag.SCIENCE], cost: 16,
      behavior: {drawCard: 4},
      metadata: {cardNumber: 'HP44', renderData: CardRenderer.builder((b) => {b.cards(4);}),
        description: 'Draw 4 cards. (Liquid luck—every choice you make until sunset will be the right one.)'},
    });
  }
}
