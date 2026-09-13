import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {IActionCard} from '../ICard';

export class PhilosophersStone extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.PHILOSOPHERS_STONE, tags: [Tag.SCIENCE, Tag.JOVIAN], cost: 22, victoryPoints: 2,
      requirements: {tag: Tag.SCIENCE, count: 10},
      metadata: {cardNumber: 'HP219', renderData: CardRenderer.builder((b) => {
        b.action('Spend 1 steel to gain 15 M€.', (ab) => {ab.steel(1).startAction.megacredits(15);});
      }), description: 'Requires 10 science tags. Action: spend 1 steel to gain 15 M€. (Turning base metals into gold funds terraforming — the elixir of life ensures you see it complete.)'}
    });
  }
  public canAct(player: IPlayer): boolean {
    return player.steel >= 1;
  }
  public action(player: IPlayer) {
    player.stock.deduct(Resource.STEEL, 1, {log: true});
    player.stock.add(Resource.MEGACREDITS, 15, {log: true});
    return undefined;
  }
}
