import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class IoMiningIndustries extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.IO_MINING_INDUSTRIES,
      tags: [Tag.JOVIAN, Tag.SPACE],
      cost: 41,
      victoryPoints: {tag: Tag.JOVIAN},

      behavior: {
        production: {titanium: 2, megacredits: 3},
      },

      metadata: {
        cardNumber: '092',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(2).megacredits(3)).br;
          b.vpText('1 VP per Jovian tag you have.');
        }),
        description: 'Increase your titanium production 2 steps and your M€ production 3 steps.',
      },
    });
  }
}
