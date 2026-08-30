import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {SelectPlayer} from '../../inputs/SelectPlayer';
import {SelectOption} from '../../inputs/SelectOption';
import {OrOptions} from '../../inputs/OrOptions';

export class Redirect extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.REDIRECT,
      tags: [Tag.SCIENCE],
      cost: 7,
      metadata: {
        cardNumber: 'BM06',
        description: 'Steal 3 steel or 3 titanium from another player.',
        renderData: CardRenderer.builder((b) => {
          b.text('STEAL 3').steel(1).text('OR 3').titanium(1);
        }),
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    return new OrOptions(
      new SelectOption('Steal 3 steel').andThen(() => {
        return new SelectPlayer(player.opponents, 'Select player').andThen((target) => {
          const amount = Math.min(target.steel, 3);
          target.stock.deduct(Resource.STEEL, amount, {log: true, from: {player}});
          player.stock.add(Resource.STEEL, amount, {log: true});
          return undefined;
        });
      }),
      new SelectOption('Steal 3 titanium').andThen(() => {
        return new SelectPlayer(player.opponents, 'Select player').andThen((target) => {
          const amount = Math.min(target.titanium, 3);
          target.stock.deduct(Resource.TITANIUM, amount, {log: true, from: {player}});
          player.stock.add(Resource.TITANIUM, amount, {log: true});
          return undefined;
        });
      }),
    );
  }
}
