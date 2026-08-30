import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class QuantumEncryption extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.QUANTUM_ENCRYPTION, tags: [Tag.MARS], cost: 15,
      metadata: {cardNumber: 'MY111', renderData: CardRenderer.builder((b) => {b.action('Gain 3 MC.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 3 MC.. (Progress demands sacrifice.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.megaCredits += 3; return undefined;}
}
