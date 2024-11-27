import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {AddResourcesToCard} from '../../deferredActions/AddResourcesToCard';
import {CardResource} from '../../../common/CardResource';
import {Tag} from '../../../common/cards/Tag';
// import {digit} from '../Options';
// import {Resource} from '../../../common/Resource';
import {Size} from '../../../common/cards/render/Size';

export class MartianMystery extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MARTIAN_MYSTERY,
      cost: 16,
      tags: [Tag.WILD],
      requirements: [{tag: Tag.BUILDING}, {tag: Tag.MICROBE}, {tag: Tag.POWER}, {tag: Tag.SCIENCE}, {tag: Tag.SPACE}],

      metadata: {
        // cardNumber: 'Pf53',
        renderData: CardRenderer.builder((b) => {
          b.resource(CardResource.DATA, 0).cards(1, {size: Size.SMALL}).asterix();
          b.tag(Tag.WILD).colon().text('play ', Size.SMALL, true);
          b.cards(1).br;
          b.text(
            'Do 10 Ave Marias for your boy RnJezuz. ' +
            'Draw a RANDOM CARD and play it for FREEEE, it usually works, sometimes it might not... nobody knows for sure... this was implemented by a steam dev... Then draw another card.',
            Size.SMALL, false, false);
        }),
        description: 'Requires ballz of steel or just being rich enough to waste money.',
      },
    });
  }

  private keep(player: IPlayer, card: IProjectCard) {
    player.cardsInHand.push(card);
    player.game.log('${0} kept ${1}', (b) => b.player(player).card(card));
  }

  private processCard(player: IPlayer, card: IProjectCard): boolean {
    // const tags = card.tags;
    // if (player.tags.cardHasTag(card, Tag.SCIENCE) || player.tags.cardHasTag(card, Tag.MICROBE)) {
    player.playCard(card, undefined);
    return true;
    // } else if (tags.includes(Tag.SPACE)) {
    //   player.production.add(Resource.ENERGY, 3, {log: true});
    //   this.keep(player, card);
    //   return true;
    // } else {
    //   this.keep(player, card);
    //   return false;
    // }
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.game.projectDeck.canDraw(2);
  }

  public override bespokePlay(player: IPlayer) {
    const game = player.game;
    // TODO(kberg): Make sure this action occurs after the card play, in case the played card has data.
    game.defer(new AddResourcesToCard(player, CardResource.DATA, {count: 2}));
    const cards = game.projectDeck.drawNOrThrow(game, 2);

    player.game.log('${0} revealed ${1} and ${2}', (b) => b.player(player).card(cards[0], {tags: true}).card(cards[1], {tags: true}));
    if (this.processCard(player, cards[0])) {
      this.keep(player, cards[1]);
    } else {
      this.processCard(player, cards[1]);
    }

    return undefined;
  }
}
