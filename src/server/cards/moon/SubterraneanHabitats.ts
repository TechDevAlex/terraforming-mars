import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {Tag} from '../../../common/cards/Tag';

export class SubterraneanHabitats extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.SUBTERRANEAN_HABITATS,
      type: CardType.ACTIVE,
      tags: [Tag.MOON],
      cost: 3,
      reserveUnits: {titanium: 1},
      victoryPoints: 1,

      metadata: {
        description: 'Spend 1 titanium.',
        cardNumber: 'M36',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you build a habitat on THE MOON, you spend 1 titanium less.', (eb) => {
            eb.startEffect.moonHabitat().colon().minus().titanium(1);
          });
          b.br;
          b.minus().titanium(1);
        }),
      },
    });
  }
}
