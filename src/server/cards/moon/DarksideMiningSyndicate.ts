import {CardName} from '../../../common/cards/CardName';
import {IPlayer} from '../../IPlayer';
import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {MoonExpansion} from '../../moon/MoonExpansion';
import {Resource} from '../../../common/Resource';
import {Card} from '../Card';

export class DarksideMiningSyndicate extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.DARKSIDE_MINING_SYNDICATE,
      type: CardType.AUTOMATED,
      tags: [Tag.MOON, Tag.SPACE],
      cost: 17,
      tr: {moonMining: 1},

      metadata: {
        description: 'Increase your titanium production 2 steps, or ' +
        '1 step if the mining rate is at least 3. And then raise the mining rate 1 step.',
        cardNumber: 'M66',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(2)).or().br;
          b.moonMiningRate({amount: 3}).colon().production((pb) => pb.titanium(1)).br;
          b.moonMiningRate().br;
        }),
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    const productionBonus = (MoonExpansion.moonData(player.game).miningRate >= 3) ? 1 : 2;
    player.production.add(Resource.TITANIUM, productionBonus, {log: true});
    MoonExpansion.raiseMiningRate(player);
    return undefined;
  }
}
