import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
import {SelectCard} from '../../inputs/SelectCard';
import {SelectAmount} from '../../inputs/SelectAmount';
import {AndOptions} from '../../inputs/AndOptions';

export class Transfiguration extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.TRANSFIGURATION, tags: [Tag.SCIENCE], cost: 5,
      metadata: {cardNumber: 'HP217', renderData: CardRenderer.builder((b) => {
        b.text('MOVE UP TO 3 RESOURCES BETWEEN YOUR CARDS');
      }), description: 'Move up to 3 resources from one of your cards onto another of your cards (must be the same resource type). (Matter reshapes itself under a skilled wand—teacups become mice, boulders become brooms.)'}
    });
  }
  public override bespokePlay(player: IPlayer) {
    const sources = player.playedCards.filter((c) => c.resourceCount > 0 && c.resourceType !== undefined);
    if (sources.length === 0) return undefined;

    let sourceCard: ICard | undefined;
    let destCard: ICard | undefined;
    let amount = 0;

    const selectSource = new SelectCard('Transfiguration: select source card', 'Select', sources)
      .andThen(([source]) => {
        sourceCard = source;
        return undefined;
      });

    const selectDestAndAmount = () => {
      if (!sourceCard) return undefined;
      const dests = player.playedCards.filter((c) => c !== sourceCard && c.resourceType === sourceCard!.resourceType);
      if (dests.length === 0) {
        player.game.log('Transfiguration: no valid destination card', (b) => b.player(player));
        return undefined;
      }
      const max = Math.min(3, sourceCard.resourceCount);
      const selectDest = new SelectCard('Transfiguration: select destination card', 'Select', dests)
        .andThen(([dest]) => {
          destCard = dest;
          return undefined;
        });
      const selectAmount = new SelectAmount('Transfiguration: amount to move', 'Move', 1, max)
        .andThen((n) => {
          amount = n;
          return undefined;
        });
      return new AndOptions(selectDest, selectAmount).andThen(() => {
        if (!sourceCard || !destCard) return undefined;
        sourceCard.resourceCount -= amount;
        destCard.resourceCount += amount;
        player.game.log('${0} moved ${1} resource(s) from ${2} to ${3}', (b) =>
          b.player(player).number(amount).card(sourceCard!).card(destCard!));
        return undefined;
      });
    };

    return selectSource.andThen(() => selectDestAndAmount());
  }
}
