import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {Tag} from '../../../common/cards/Tag';

export class ImprovedMoonConcrete extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.IMPROVED_MOON_CONCRETE,
      type: CardType.ACTIVE,
      tags: [Tag.MOON, Tag.MOON],
      cost: 4,
      reserveUnits: {steel: 1},


      metadata: {
        description: 'Spend 1 steel.',
        cardNumber: 'M37',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you build a mine on The Moon, you spend 1 titanium less.', (eb) => {
            eb.moonMine().startEffect.minus().titanium(1);
          }).br;
          b.minus().steel(1);
        }),
      },
    });
  }
}
