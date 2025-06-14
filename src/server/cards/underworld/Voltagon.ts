import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Space} from '../../boards/Space';
import {ActiveCorporationCard} from '../corporation/CorporationCard';
import {Resource} from '../../../common/Resource';

export class Voltagon extends ActiveCorporationCard {
  constructor() {
    super({
      name: CardName.VOLTAGON,
      tags: [Tag.SCIENCE, Tag.POWER],
      startingMegaCredits: 38,

      behavior: {
        production: {energy: 2},
      },

      action: {
        or: {
          behaviors: [
            {
              spend: {energy: 6},
              global: {oxygen: 1},
              title: 'Spend 6 energy to increase oxygen 1 step.',
              log: '${player} spent 6 energy to increase oxygen 1 step.',
            },
            {
              spend: {energy: 6},
              global: {venus: 1},
              title: 'Spend 6 energy to increase Venus 1 step.',
              log: '${player} spent 6 energy to increase Venus 1 step.',
            },
          ],
        },
      },

      metadata: {
        cardNumber: 'UC09',
        description: 'You start with 38 M€ and 2 energy production.',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(38).production((pb) => pb.energy(2)).br;
          b.effect('After you excavate an underground resource, gain 2 energy.', (eb) => {
            eb.excavate(1).startEffect.energy(2);
          }).br;
          b.action('Spend 6 energy to increase oxygen or Venus 1 step.', (ab) => {
            ab.energy(6).startAction.oxygen(1).or().venus(1);
          });
        }),
      },
    });
  }

  onExcavation(player: IPlayer, _space: Space) {
    player.stock.add(Resource.ENERGY, 2, {log: true});
  }
}
