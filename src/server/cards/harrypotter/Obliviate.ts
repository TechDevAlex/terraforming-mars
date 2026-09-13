import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';

export class Obliviate extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.OBLIVIATE, tags: [Tag.POWER], cost: 6, victoryPoints: -1,
      metadata: {cardNumber: 'HP214', renderData: CardRenderer.builder((b) => {
        b.cards(3);
      }), description: 'Draw 3 cards. -1 VP. (The ministry is wiping memories all the time. What is one more or less?)'}
    });
  }
  public override bespokePlay(player: IPlayer) {
    player.drawCard(3);
    return undefined;
  }
}
