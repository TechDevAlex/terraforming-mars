import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BunkerComplex extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BUNKER_COMPLEX, tags: [Tag.ANIMAL], cost: 10,
      behavior: {production: {titanium: 1, heat: 2}},
      metadata: {cardNumber: 'MY116', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Knowledge is the ultimate currency.)'},
    });
  }
}
