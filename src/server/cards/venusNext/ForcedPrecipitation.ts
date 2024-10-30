import {IActionCard} from '../ICard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardResource} from '../../../common/CardResource';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {MAX_VENUS_SCALE} from '../../../common/constants';
import {CardName} from '../../../common/cards/CardName';
import {SelectPaymentDeferred} from '../../deferredActions/SelectPaymentDeferred';
import {LogHelper} from '../../LogHelper';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {TITLES} from '../../inputs/titles';

export class ForcedPrecipitation extends Card implements IActionCard {
  constructor() {
    super({
      name: CardName.FORCED_PRECIPITATION,
      type: CardType.ACTIVE,
      tags: [Tag.VENUS],
      cost: 8,
      resourceType: CardResource.FLOATER,

      metadata: {
        cardNumber: '226',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 M€ to add 1 floater to THIS card.', (eb) => {
            eb.megacredits(1).startAction.resource(CardResource.FLOATER);
          }).br;
          b.or().br;
          b.action('Spend 3 floaters here to increase Venus 2 steps.', (eb) => {
            eb.resource(CardResource.FLOATER, 3).startAction.venus(2);
          });
        }),
      },
    });
  }

  public canAct(player: IPlayer): boolean {
    if (player.canAfford(1)) {
      return true;
    }
    if (this.resourceCount > 1 && player.canAfford({cost: 0, tr: {venus: 2}})) {
      if (player.game.getVenusScaleLevel() === MAX_VENUS_SCALE) {
        this.warnings.add('maxvenus');
      }
      return true;
    }
    return false;
  }

  public action(player: IPlayer) {
    const opts = [];

    const addResource = new SelectOption('Pay 1 M€ to add 1 floater to this card', 'Pay').andThen(() => this.addResource(player));
    const spendResource = new SelectOption('Remove 3 floaters to raise Venus 2 step', 'Remove floaters').andThen(() => this.spendResource(player));
    if (player.game.getVenusScaleLevel() === MAX_VENUS_SCALE) {
      spendResource.warnings = ['maxvenus'];
    }
    if (this.resourceCount > 3 && player.canAfford({cost: 0, tr: {venus: 2}})) {
      opts.push(spendResource);
    } else {
      return this.addResource(player);
    }

    if (player.canAfford(1)) {
      opts.push(addResource);
    } else {
      return this.spendResource(player);
    }

    return new OrOptions(...opts);
  }

  private addResource(player: IPlayer) {
    player.game.defer(new SelectPaymentDeferred(player, 1, {title: TITLES.payForCardAction(this.name)}))
      .andThen(() => player.addResourceTo(this, {log: true}));
    return undefined;
  }

  private spendResource(player: IPlayer) {
    player.removeResourceFrom(this, 3);
    const actual = player.game.increaseVenusScaleLevel(player, 2);
    LogHelper.logVenusIncrease(player, actual);
    return undefined;
  }
}
