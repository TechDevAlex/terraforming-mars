import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SubspaceRelay extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SUBSPACE_RELAY, tags: [], cost: 17,
      behavior: {tr: 1},
      metadata: {cardNumber: 'MY365', renderData: CardRenderer.builder((b) => {b.text('Raise TR.');}),
        description: 'Raise TR. (Secrets have power.)'},
    });
  }
}
