import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CloakingField extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CLOAKING_FIELD, tags: [Tag.MICROBE], cost: 22,
      victoryPoints: -1,
      behavior: {production: {plants: 1, steel: 2, energy: 1}},
      metadata: {cardNumber: 'MY094', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Space warps.)'},
    });
  }
}
