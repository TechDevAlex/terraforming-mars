import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class ComputerizedArithmancy extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.COMPUTERIZED_ARITHMANCY, tags: [Tag.SCIENCE], cost: 10, victoryPoints: 1,
      requirements: {tag: Tag.SCIENCE, count: 3},
      behavior: {production: {energy: -1, megacredits: 3}, drawCard: 1},
      metadata: {cardNumber: 'HP211', renderData: CardRenderer.builder((b) => {
        b.production((pb) => pb.minus().energy(1).megacredits(3)).cards(1);
      }), description: 'Requires 3 science tags. Decrease energy production 1 step and increase M€ production 3 steps. Draw 1 card. (Arithmancy runs on numbers—and now those numbers hum through crystal cores at the speed of thought.)'}
    });
  }
}
