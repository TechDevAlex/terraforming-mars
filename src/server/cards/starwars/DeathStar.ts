import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
import {CardResource} from '../../../common/CardResource';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {Size} from '../../../common/cards/render/Size';
import {all} from '../Options';

export class DeathStar extends Card implements IActionCard, IProjectCard {
  public data: {timesFired: number} = {timesFired: 0};

  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.DEATH_STAR,
      tags: [Tag.SPACE, Tag.SCIENCE],
      cost: 34,
      resourceType: CardResource.CLONE_TROOPER,

      metadata: {
        cardNumber: 'SW10',
        renderData: CardRenderer.builder((b) => {
          b.titanium(1).arrow(Size.SMALL).resource(CardResource.CLONE_TROOPER).or().resource(CardResource.CLONE_TROOPER, 2).arrow(Size.SMALL).minus().tr(1, {all}).text('GEN+2');
          b.br;
          b.text('(Action: Pay 1 titanium to add 1 Clone Trooper, OR remove 2 Clone Troopers: all opponents lose GEN+2 TR. Cannot be blocked. Max 2x per game.)', Size.TINY, false, false);
          b.br;
          b.text('FIRE DA LASOR', Size.SMALL, true);
        }),
        description: 'Action: Pay 1 titanium to add 1 Clone Trooper to this card, OR remove 2 Clone Troopers: all opponents lose TR equal to the current generation number + 2. THIS CANNOT BE BLOCKED. The laser may only be fired twice per game.',
      },
    });
  }

  public canAct(player: Player): boolean {
    if (player.titanium >= 1) return true;
    if (this.resourceCount >= 2 && this.data.timesFired < 2) return true;
    return false;
  }

  public action(player: Player) {
    const options = new OrOptions();

    // Option 1: Pay 1 titanium to add a Clone Trooper
    if (player.titanium >= 1) {
      options.options.push(new SelectOption('Pay 1 titanium to add 1 Clone Trooper', 'Pay').andThen(() => {
        player.stock.deduct(Resource.TITANIUM, 1);
        player.addResourceTo(this, {log: true});
        return undefined;
      }));
    }

    // Option 2: Remove 2 Clone Troopers to fire the laser (max 2 times per game)
    if (this.resourceCount >= 2 && this.data.timesFired < 2) {
      const trLoss = player.game.generation + 2;
      options.options.push(new SelectOption(`Remove 2 Clone Troopers to fire the laser (all opponents lose ${trLoss} TR)`, 'Fire').andThen(() => {
        player.removeResourceFrom(this, 2);
        this.data.timesFired++;

        if (this.data.timesFired === 1) {
          player.game.log('☠️ ☠️ ☠️ ${0} FIRES THE DEATH STAR! That\'s no moon... All opponents lose ${1} TR! ☠️ ☠️ ☠️', (b) => b.player(player).number(trLoss));
        } else {
          player.game.log('💀 💀 💀 ${0} FIRES THE DEATH STAR AGAIN! You may fire when ready. All opponents lose ${1} TR! 💀 💀 💀', (b) => b.player(player).number(trLoss));
        }

        for (const opponent of player.opponents) {
          opponent.decreaseTerraformRating(trLoss, {log: true});
        }
        return undefined;
      }));
    }

    if (options.options.length === 1) {
      return options.options[0].cb(undefined);
    }
    return options;
  }
}
