import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
export class RoomOfRequirement extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.ROOM_OF_REQUIREMENT, tags: [Tag.BUILDING], cost: 17, victoryPoints: 2,
      metadata: {cardNumber: 'HP42', renderData: CardRenderer.builder((b) => {b.action('Spend 3 M€ to gain 2 steel and 2 titanium.', (ab) => {ab.megacredits(3).startAction.steel(2).titanium(2);});}),
        description: 'Action: Spend 3 M€ to gain 2 steel and 2 titanium. (The room becomes whatever you need most—a refuge, an arsenal, a classroom.)'},
    });
  }
  public canAct(player: Player): boolean {return player.canAfford(3);}
  public action(player: Player) {player.megaCredits -= 3; player.stock.add(Resource.STEEL, 2, {log: true}); player.stock.add(Resource.TITANIUM, 2, {log: true}); return undefined;}
}
