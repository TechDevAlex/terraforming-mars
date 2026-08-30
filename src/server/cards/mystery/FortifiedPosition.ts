import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FortifiedPosition extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.FORTIFIED_POSITION, tags: [Tag.JOVIAN], cost: 5,
      behavior: {production: {megacredits: 2, energy: 1}},
      metadata: {cardNumber: 'MY229', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Time bends.)'},
    });
  }
}
