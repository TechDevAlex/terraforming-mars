import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {Resource} from '../../../common/Resource';
import {max} from '../Options';

export class FlatMarsTheory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.FLAT_MARS_THEORY,
      cost: 12,
      tags: [Tag.EARTH, Tag.MARS],
      requirements: {tag: Tag.SCIENCE, count: 1, max},

      metadata: {
        cardNumber: 'Pf39',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2)).slash().text('GENERATION');
        }),
        description: 'Requires maximum 1 science tag. Increase your M€ production 2 steps for every generation played so far.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    const generation = player.game.generation;
    player.production.add(Resource.MEGACREDITS, generation, {log: true});
    return undefined;
  }
}
