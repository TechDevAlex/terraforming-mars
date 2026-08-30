import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CosmicDread extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.COSMIC_DREAD, tags: [Tag.ANIMAL, Tag.BUILDING], cost: 4,
      behavior: {production: {steel: 2, megacredits: 1}},
      metadata: {cardNumber: 'MY034', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Time bends.)'},
    });
  }
}
