import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CrimeScene extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CRIME_SCENE, tags: [Tag.BUILDING], cost: 27,
      victoryPoints: 1,
      behavior: {city: {}, production: {megacredits: 3}},
      metadata: {cardNumber: 'MY017', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(3);}); b.br; b.city();}),
        description: '1 VP. (The stars align.)'},
    });
  }
}
