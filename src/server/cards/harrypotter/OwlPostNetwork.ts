import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {IActionCard} from '../ICard';

export class OwlPostNetwork extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.OWL_POST_NETWORK, tags: [Tag.ANIMAL, Tag.CITY], cost: 9, victoryPoints: 1,
      metadata: {cardNumber: 'HP187', renderData: CardRenderer.builder((b) => {
        b.action('Draw 1 card per 5 cities in play (min 1).', (ab) => {ab.empty().startAction.cards(1).slash().text('5').city();});
      }), description: 'Draw 1 card per 5 cities in play (min 1). (Hedwig soared through the night sky, letter clutched in her talons.)'}
    });
  }
  public canAct(): boolean {return true;}
  public action(player: IPlayer) {
    const cities = player.game.board.getCities().length;
    const draws = Math.max(1, Math.floor(cities / 5));
    player.drawCard(draws);
    return undefined;
  }
}
