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

export class Dragons extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.DRAGONS, tags: [Tag.ANIMAL], cost: 18,
      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}, per: 2},
      requirements: {oxygen: 10},
      metadata: {cardNumber: 'HP202', renderData: CardRenderer.builder((b) => {
        b.action('Add 1 animal to this card. Gain 2 heat.', (ab) => {ab.empty().startAction.resource(CardResource.ANIMAL).heat(2);}).br;
        b.vpText('1 VP per 2 animals on this card.');
      }), description: 'Requires 10% oxygen. Add 1 animal to this card and gain 2 heat. 1 VP per 2 animals on this card.'}
    });
  }
  public canAct(): boolean {return true;}
  public action(player: IPlayer) {
    player.addResourceTo(this, {log: true});
    player.stock.add(Resource.HEAT, 2, {log: true});
    return undefined;
  }
}
