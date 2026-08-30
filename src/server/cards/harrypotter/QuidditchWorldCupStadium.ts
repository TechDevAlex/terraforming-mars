import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class QuidditchWorldCupStadium extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.QUIDDITCH_WORLD_CUP_STADIUM, tags: [Tag.BUILDING, Tag.EARTH], cost: 22, victoryPoints: 2,
      behavior: {city: {}, production: {megacredits: 3}},
      metadata: {cardNumber: 'HP49', renderData: CardRenderer.builder((b) => {b.city().production((pb) => pb.megacredits(3));}),
        description: 'Place a city. Increase M€ production 3 steps. (A hundred thousand witches and wizards gathered for the greatest spectacle in the magical world.)'},
    });
  }
}
