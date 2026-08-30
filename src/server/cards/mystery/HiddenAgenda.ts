import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class HiddenAgenda extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.HIDDEN_AGENDA, tags: [Tag.CITY, Tag.MARS], cost: 19,
      behavior: {production: {plants: 1, megacredits: 2}},
      metadata: {cardNumber: 'MY009', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(1); pb.megacredits(2);});}),
        description: 'Adjust production. (Trust no one.)'},
    });
  }
}
