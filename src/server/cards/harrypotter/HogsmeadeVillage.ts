import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class HogsmeadeVillage extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.HOGSMEADE_VILLAGE, tags: [Tag.CITY, Tag.BUILDING], cost: 18, victoryPoints: 2,
      behavior: {city: {}, production: {megacredits: 2}},
      metadata: {cardNumber: 'HP31', renderData: CardRenderer.builder((b) => {b.city().production((pb) => pb.megacredits(2));}),
        description: 'Place a city. Increase M€ production 2 steps. (The only all-wizarding village in Britain bustles with butterbeer and enchantment.)'},
    });
  }
}
