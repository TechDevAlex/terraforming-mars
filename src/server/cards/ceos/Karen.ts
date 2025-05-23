import {CardName} from '../../../common/cards/CardName';
import {IPlayer} from '../../IPlayer';
import {PlayerInput} from '../../PlayerInput';
import {CardRenderer} from '../render/CardRenderer';
import {CeoCard} from './CeoCard';
import {PreludesExpansion} from '../../preludes/PreludesExpansion';

export class Karen extends CeoCard {
  constructor() {
    super({
      name: CardName.KAREN,
      metadata: {
        cardNumber: 'L11',
        renderData: CardRenderer.builder((b) => {
          b.opgArrow().text('X').prelude().asterix();
        }),
        description: 'DO NOT PLAY GEN 1!!Once per game, draw Prelude cards equal to the current generation number -1 and choose one to play, and discard the rest.',
      },
    });
  }

  public override canAct(player: IPlayer) {
    if (!player.game.preludeDeck.canDraw(player.game.generation) && player.game.generation > 1) {
      this.warnings.add('deckTooSmall');
    }
    return super.canAct(player);
  }
  public action(player: IPlayer): PlayerInput | undefined {
    this.isDisabled = true;
    const game = player.game;
    const cards = game.preludeDeck.drawN(game, game.generation);
    return PreludesExpansion.selectPreludeToPlay(player, cards, 'discard');
  }
}
