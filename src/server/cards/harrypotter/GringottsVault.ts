import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class GringottsVault extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.GRINGOTTS_VAULT,
      tags: [Tag.EARTH],
      cost: 18,

      behavior: {
        production: {megacredits: 5},
        tr: -2,
      },

      metadata: {
        cardNumber: 'HP07',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(5)).br;
          b.minus().tr(2);
        }),
        description: 'Increase your M€ production 5 steps. Lose 2 TR. (Gringotts — the goblin-run wizarding bank. Its vaults run miles beneath London, guarded by dragons and dark enchantments. Safe, but at what cost?)',
      },
    });
  }
}
