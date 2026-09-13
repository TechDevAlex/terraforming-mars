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
import {max} from '../Options';

export class DevilsSnareCultivation extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.DEVILS_SNARE_CULTIVATION, tags: [Tag.PLANT], cost: 8,
      requirements: {temperature: 0, max},
      metadata: {cardNumber: 'HP139', renderData: CardRenderer.builder((b) => {
        b.action('Remove 1 animal from EACH card (yours and opponents). Gain 1 plant per animal removed.', (ab) => {ab.minus().resource(CardResource.ANIMAL).asterix().startAction.plants(1).slash().resource(CardResource.ANIMAL);});
      }), description: 'Temperature must be 0°C or lower. Action: Remove 1 animal from EACH card in play (including opponents\'). Gain 1 plant per animal removed.'}
    });
  }
  public canAct(player: IPlayer): boolean {
    return player.game.players.some((p: IPlayer) => p.getCardsWithResources(CardResource.ANIMAL).length > 0);
  }
  public action(player: IPlayer) {
    let removed = 0;
    for (const p of player.game.players) {
      for (const c of p.getCardsWithResources(CardResource.ANIMAL)) {
        if (c.resourceCount > 0) {
          c.resourceCount -= 1;
          removed += 1;
        }
      }
    }
    if (removed > 0) {
      player.stock.add(Resource.PLANTS, removed, {log: true});
      player.game.log('${0} removed ${1} animals with Devil\'s Snares', (b) => b.player(player).number(removed));
    }
    return undefined;
  }
}
