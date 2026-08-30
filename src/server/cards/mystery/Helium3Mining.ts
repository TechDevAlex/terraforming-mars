import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class Helium3Mining extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.HELIUM_3_MINING, tags: [Tag.CITY], cost: 36,
      victoryPoints: 3,
      behavior: {production: {titanium: 2, megacredits: 2}},
      metadata: {cardNumber: 'MY296', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(2); pb.megacredits(2);});}),
        description: '3 VP. (The stars align.)'},
    });
  }
}
