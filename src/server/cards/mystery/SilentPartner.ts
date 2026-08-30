import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SilentPartner extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.SILENT_PARTNER, tags: [Tag.POWER, Tag.EARTH], cost: 19,
      behavior: {production: {megacredits: 2, steel: 1}},
      metadata: {cardNumber: 'MY020', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(2); pb.steel(1);});}),
        description: 'Adjust production. (A whisper in the void.)'},
    });
  }
}
