import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class UndermoonDrugLordsNetwork extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.UNDERMOON_DRUG_LORDS_NETWORK,
      type: CardType.AUTOMATED,
      tags: [Tag.MOON],
      cost: 1,
      victoryPoints: -2,

      behavior: {
        production: {megacredits: {moon: {habitatRate: {}}, per: 1}},
      },

      metadata: {
        description: 'Increase your M€ production 1 step per step of habitat rate.',
        cardNumber: 'M81',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(1);
          }).slash().moonHabitatRate({amount: 1});
        }),
      },
    });
  }
}
