import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {all} from '../Options';

export class OffWorldCityLiving extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.OFF_WORLD_CITY_LIVING,
      type: CardType.AUTOMATED,
      tags: [Tag.CITY, Tag.SPACE],
      cost: 15,
      victoryPoints: {cities: {}, all: true, per: 3},

      behavior: {
        production: {megacredits: {cities: {where: 'offmars'}}},
      },

      metadata: {
        // Check the card for a clever icon.
        description: 'Increase your M€ production 1 step per city tile NOT ON MARS.',
        cardNumber: 'M53',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1)).slash().city({all, secondaryTag: Tag.SPACE}).br;
          b.vpText('1 VP for every 3rd City in play.');
        }),
      },
    });
  }
}
