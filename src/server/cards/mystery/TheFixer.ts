import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TheFixer extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.THE_FIXER, tags: [Tag.MARS], cost: 12,
      metadata: {cardNumber: 'MY018', renderData: CardRenderer.builder((b) => {b.action('Gain 1 steel and 1 titanium.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 1 steel and 1 titanium.. (Secrets have power.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.steel += 1; player.titanium += 1; return undefined;}
}
