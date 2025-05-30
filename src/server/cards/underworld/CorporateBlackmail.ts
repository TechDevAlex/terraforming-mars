import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {IPlayer} from '../../IPlayer';
import {SelectPlayer} from '../../inputs/SelectPlayer';
import {UnderworldExpansion} from '../../underworld/UnderworldExpansion';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {Resource} from '../../../common/Resource';
import {message} from '../../../server/logs/MessageBuilder';
import {Size} from '../../../common/cards/render/Size';
import {all} from '../Options';


export class CorporateBlackmail extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.CORPORATE_BLACKMAIL,
      type: CardType.EVENT,
      cost: 2,
      victoryPoints: -1,

      requirements: {corruption: 1},

      metadata: {
        cardNumber: 'U39',
        renderData: CardRenderer.builder((b) => {
          b.text('PAYS YOU', Size.SMALL).megacredits(7, {all}).or().minus().corruption(2).br;
          b.text('THIS CANNOT BE BLOCKED BY CORRUPTION', Size.SMALL).br;
        }),
        description: 'Requires 1 corruption. Target a player that has at least 2 corruption. ' +
          'Unless that player pays you 7 M€, they lose 2 corruption.',
      },
    });
  }


  private targets(player: IPlayer) {
    return player.getOpponents().filter((p) => p.underworldData.corruption >= 2);
  }

  public override bespokeCanPlay(player: IPlayer) {
    return player.game.isSoloMode() || this.targets(player).length > 0;
  }

  public override bespokePlay(player: IPlayer) {
    if (player.game.isSoloMode()) {
      player.stock.add(Resource.MEGACREDITS, 7);
      player.game.log('${0} blackmailed the neutral player and was paid 7 M€.', (b) => b.player(player));
      return undefined;
    }
    function corruptionConsequence(blackmailedPlayer: IPlayer) {
      UnderworldExpansion.loseCorruption(blackmailedPlayer, 2);
      player.game.log('${0} blackmailed ${1} who lost 2 corruption.', (b) => b.player(player).player(blackmailedPlayer));
    }

    return new SelectPlayer(this.targets(player), 'Select player to blackmail', 'blackmail')
      .andThen((blackmailedPlayer: IPlayer) => {
        if (blackmailedPlayer.megaCredits < 7) {
          corruptionConsequence(blackmailedPlayer);
          return undefined;
        } else {
          const orOptions = new OrOptions(
            new SelectOption(message('Pay ${0} 7 M€', (b) => b.player(player)), 'Pay 7 M€')
              .andThen(() => {
                blackmailedPlayer.stock.steal(Resource.MEGACREDITS, 7, player);
                player.game.log('${0} blackmailed ${1} and was paid 7 M€.', (b) => b.player(player).player(blackmailedPlayer));
                return undefined;
              }),
            new SelectOption('Lose 2 corruption', 'Lose 2 corruption')
              .andThen(() => {
                corruptionConsequence(blackmailedPlayer);
                return undefined;
              }));
          blackmailedPlayer.defer(orOptions);
        }
        return undefined;
      });
  }
}
