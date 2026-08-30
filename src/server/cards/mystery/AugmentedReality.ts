import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AugmentedReality extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.AUGMENTED_REALITY, tags: [Tag.SPACE, Tag.JOVIAN], cost: 17,
      victoryPoints: 2,
      metadata: {cardNumber: 'MY353', renderData: CardRenderer.builder((b) => {b.action('Gain 1 titanium.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 1 titanium. (A whisper in the void.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.titanium += 1; return undefined;}
}
