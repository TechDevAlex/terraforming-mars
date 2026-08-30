import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class StealthSatellite extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.STEALTH_SATELLITE, tags: [Tag.JOVIAN], cost: 20,
      victoryPoints: 1,
      behavior: {production: {steel: 2, megacredits: 1, titanium: 1}},
      metadata: {cardNumber: 'MY093', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (The mystery deepens.)'},
    });
  }
}
