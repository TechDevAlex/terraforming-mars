import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';

export class TransfigureAntimatter extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.TRANSFIGURE_ANTIMATTER, tags: [Tag.SCIENCE], cost: 24,
      requirements: {tag: Tag.SCIENCE, count: 7},
      metadata: {cardNumber: 'HP213', renderData: CardRenderer.builder((b) => {
        b.temperature(3).temperature(2);
      }), description: 'Requires 7 science tags. Raise temperature 5 steps. (You see that rock down there? No? That is because we are at a safe distance. You will see the boom.)'}
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (let i = 0; i < 5; i++) {
      player.game.increaseTemperature(player, 1);
    }
    return undefined;
  }
}
