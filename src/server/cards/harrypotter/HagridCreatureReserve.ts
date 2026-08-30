import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard, ICard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
export class HagridCreatureReserve extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.HAGRID_CREATURE_RESERVE, tags: [Tag.ANIMAL, Tag.BUILDING], cost: 14,
      resourceType: CardResource.ANIMAL, victoryPoints: {resourcesHere: {}, per: 2},
      metadata: {cardNumber: 'HP46', renderData: CardRenderer.builder((b) => {b.action('Add 1 animal.', (ab) => {ab.empty().startAction.resource(CardResource.ANIMAL);});b.br.vpText('1 VP per 2 animals.');}),
        description: 'Action: Add 1 animal. 1 VP per 2 animals. (Hagrid never met a dangerous creature he didn\'t want to adopt.)'},
    });
  }
  public canAct(): boolean {return true;}
  public action(player: Player) {player.addResourceTo(this, {log: true}); return undefined;}
  public onCardPlayed(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.ANIMAL)) player.addResourceTo(this, 1);
  }
}
