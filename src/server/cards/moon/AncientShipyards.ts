import {CardName} from '../../../common/cards/CardName';
import {IPlayer} from '../../IPlayer';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
// import {CardResource} from '../../../common/CardResource';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {all} from '../Options';

export class AncientShipyards extends Card {
  constructor() {
    super({
      name: CardName.ANCIENT_SHIPYARDS,
      type: CardType.ACTIVE,
      tags: [Tag.MOON, Tag.SPACE],
      cost: 12,

      victoryPoints: -1,
      reserveUnits: {titanium: 3},

      metadata: {
        description: 'Spend 3 titanium.',
        cardNumber: 'M19',
        renderData: CardRenderer.builder((b) => {
          b.action('Steal 2 M€ from each player.', (eb) => {
            eb.empty().startAction.text('Steal').nbsp.megacredits(2, {all});
          }).br.br;
          b.minus().titanium(3);
        }),
      },
    });
  }

  public canAct(): boolean {
    return true;
  }

  public action(player: IPlayer) {
    const game = player.game;
    for (const target of player.opponents) {
      target.attack(player, Resource.MEGACREDITS, 2, {stealing: true});
    }
    if (game.isSoloMode()) {
      player.stock.add(Resource.MEGACREDITS, 2);
    }
    return undefined;
  }
}
