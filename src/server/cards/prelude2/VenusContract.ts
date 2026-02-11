
import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {PreludeCard} from '../prelude/PreludeCard';
import {GlobalParameter} from '../../../common/GlobalParameter';

export class VenusContract extends PreludeCard {
  constructor() {
    super({
      name: CardName.VENUS_CONTRACT,
      tags: [Tag.VENUS],

      behavior: {
        drawCard: {count: 2, tag: Tag.VENUS},
      },

      metadata: {
        cardNumber: 'P65',
        description: 'Draw 2 Venus cards.',
        renderData: CardRenderer.builder((b) => {
          b.effect('Each step you raise Venus, gain 3 M€.', (eb) => {
            eb.venus(2).startEffect.megacredits(3);
          });
          b.br;
          b.cards(2, {secondaryTag: Tag.VENUS});
        }),
      },
    });
  }

  public onGlobalParameterIncrease(player: IPlayer, parameter: GlobalParameter, steps: number) {
    if (parameter === GlobalParameter.VENUS) {
      player.stock.add(Resource.MEGACREDITS, 3 * steps, {log: true, from: {card: this}});
    }
  }
}
