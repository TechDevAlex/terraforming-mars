import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {Size} from '../../../common/cards/render/Size';
import {SpaceName} from '../../SpaceName';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';
import {ActionCard} from '../ActionCard';

export class DysonScreens extends ActionCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.DYSON_SCREENS,
      tags: [Tag.SCIENCE, Tag.VENUS, Tag.POWER, Tag.SPACE],
      cost: 25,
      victoryPoints: 2,

      behavior: {
        production: {energy: 2, heat: 2},
        drawCard: 1,
        global: {temperature: 1},
        city: {space: SpaceName.DYSON_SCREENS},
      },

      action: {
        spend: {titanium: 1},
        production: {energy: 1, heat: 1},
      },

      metadata: {
        cardNumber: 'Pf15',
        renderData: CardRenderer.builder((b) => {
          b.action(
            'Pay 1 titanium to raise your heat and energy production 1 step each.',
            (ab) => ab.titanium(1, {digit}).startAction.production((pb) => pb.heat(1).energy(1))).br;
          b.temperature(1).cards(1, {size: Size.SMALL}).city({size: Size.SMALL}).asterix();
          b.production((pb) => pb.heat(2, {digit}).energy(2, {digit}));
        }),
        description: 'Raise the temperature 1 step. Draw a card. Place a city tile ON THE RESERVED AREA. Raise your energy and heat production 2 steps.',
      },
    });
  }
}
