import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {IActionCard} from '../ICard';
import {SelectCard} from '../../inputs/SelectCard';

export class DarkRituals extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.DARK_RITUALS, tags: [Tag.POWER], cost: 6, victoryPoints: -3,
      metadata: {cardNumber: 'HP207', renderData: CardRenderer.builder((b) => {
        b.action('Sacrifice 1 animal (from any of your cards) to gain 10 M€.', (ab) => {ab.minus().resource(CardResource.ANIMAL).startAction.megacredits(10);});
      }), description: 'Sacrifice an animal from any of your cards to gain 10 M€. -3 VP. (Blood magic — the darkest kind, forbidden by every civilized wizarding tradition.)'}
    });
  }
  public canAct(player: IPlayer): boolean {
    return player.getCardsWithResources(CardResource.ANIMAL).length > 0;
  }
  public action(player: IPlayer) {
    const cards = player.getCardsWithResources(CardResource.ANIMAL);
    if (cards.length === 0) return undefined;
    return new SelectCard('Select card to sacrifice an animal from', 'Sacrifice', cards).andThen((selected) => {
      const c = selected[0];
      c.resourceCount = Math.max(0, c.resourceCount - 1);
      player.stock.add(Resource.MEGACREDITS, 10, {log: true});
      return undefined;
    });
  }
}
