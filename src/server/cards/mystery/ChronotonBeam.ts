import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ChronotonBeam extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CHRONOTON_BEAM, tags: [Tag.POWER, Tag.MICROBE], cost: 21,
      victoryPoints: 3,
      behavior: {production: {titanium: 1, megacredits: 2}},
      metadata: {cardNumber: 'MY361', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(1); pb.megacredits(2);});}),
        description: '3 VP. (Shadows hide secrets.)'},
    });
  }
}
