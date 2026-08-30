import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
export class HippogriffSanctuary extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.HIPPOGRIFF_SANCTUARY, tags: [Tag.ANIMAL, Tag.BUILDING], cost: 15,
      resourceType: CardResource.ANIMAL, victoryPoints: {resourcesHere: {}, per: 2},
      metadata: {cardNumber: 'HP40', renderData: CardRenderer.builder((b) => {b.action('Add 1 animal to this card.', (ab) => {ab.empty().startAction.resource(CardResource.ANIMAL);});b.br.vpText('1 VP per 2 animals on this card.');}),
        description: 'Action: Add 1 animal. 1 VP per 2 animals. (Buckbeak bowed first, and a friendship between worlds began.)'},
    });
  }
  public canAct(): boolean {return true;}
  public action(player: Player) {player.addResourceTo(this, {log: true}); return undefined;}
}
