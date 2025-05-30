import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class EarthEmbassy extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.EARTH_EMBASSY,
      type: CardType.ACTIVE,
      tags: [Tag.MOON, Tag.EARTH],
      cost: 10,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'M77',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you perform an action, your PLAYED Moon tags count as Earth tags, but not vice versa.', (eb) => {
            eb.empty().startEffect.tag(Tag.MOON).equals().tag(Tag.EARTH);
          });
        }),
      },
    });
  }
}
