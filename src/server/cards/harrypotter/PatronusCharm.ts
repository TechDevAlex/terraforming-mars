import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PatronusCharm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.PATRONUS_CHARM, tags: [Tag.POWER], cost: 11,
      behavior: {tr: 2},
      metadata: {cardNumber: 'HP39', renderData: CardRenderer.builder((b) => {b.tr(2);}),
        description: 'Raise TR 2 steps. (Expecto Patronum—the spell is powered by the happiest memory you possess.)'},
    });
  }
}
