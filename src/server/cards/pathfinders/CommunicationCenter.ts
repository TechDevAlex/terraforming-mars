import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {CardResource} from '../../../common/CardResource';
import {all, digit} from '../Options';
import {Size} from '../../../common/cards/render/Size';
import {ICard} from '../ICard';
import {Priority} from '../../deferredActions/Priority';

export class CommunicationCenter extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.COMMUNICATION_CENTER,
      cost: 20,
      tags: [Tag.SCIENCE, Tag.MARS, Tag.BUILDING],
      resourceType: CardResource.DATA,
      victoryPoints: 1,

      behavior: {
        production: {energy: -1},
        addResources: 2,
      },

      metadata: {
        cardNumber: 'Pf28',
        renderData: CardRenderer.builder((b) => {
          b.tag(Tag.EVENT, {all}).colon().resource(CardResource.DATA).nbsp.resource(CardResource.DATA, {amount: 3, digit}).colon().cards(1).br;
          b.text('(Effect: Whenever ANY PLAYER plays an event, add 1 data to this card.)', Size.TINY, false, false).br;
          b.text('(Effect: Remove 3 data to draw a card automatically.)', Size.TINY, false, false).br;
          b.minus().production((pb) => pb.energy(1)).resource(CardResource.DATA, 2);
        }),
        description: 'Decrease your energy production 1 step. Place 2 data on this card.',
      },
    });
  }

  public onResourceAdded(player: IPlayer, playedCard: ICard) {
    if (playedCard.name !== this.name) return;
    while (this.resourceCount >= 3) {
      this.resourceCount -= 3;
      player.drawCard(1);
      player.game.log('${0} automatically removed 3 data from ${1} to draw a card.', (b) => {
        b.player(player).card(this);
      });
    }
  }

  public onCardPlayedFromAnyPlayer(thisCardOwner: IPlayer, _playedCardOwner: IPlayer, card: IProjectCard) {
    if (card.type === CardType.EVENT) {
      // Resolve CEO's Favorite Project before adding the resource.
      const priority = (card.name === CardName.CEOS_FAVORITE_PROJECT) ? Priority.BACK_OF_THE_LINE : Priority.DEFAULT;
      thisCardOwner.defer(() => {
        thisCardOwner.addResourceTo(this, {qty: 1, log: true});
      }, priority);
    }
    return undefined;
  }
}
