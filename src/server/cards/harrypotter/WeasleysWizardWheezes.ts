import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class WeasleysWizardWheezes extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.WEASLEYS_WIZARD_WHEEZES,
      tags: [Tag.EARTH, Tag.BUILDING],
      cost: 10,

      metadata: {
        cardNumber: 'HP16',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a building tag, gain 1 steel.', (eb) => {
            eb.tag(Tag.BUILDING).startEffect.steel(1);
          });
        }),
        description: 'Effect: When you play a building tag, gain 1 steel. (Weasleys\' Wizard Wheezes — Fred and George\'s joke shop at 93 Diagon Alley. Skiving Snackboxes, Extendable Ears, and chaos sold daily.)',
      },
    });
  }

  public onCardPlayed(player: IPlayer, card: ICard) {
    const buildingTags = card.tags.filter((tag) => tag === Tag.BUILDING).length;
    if (buildingTags > 0) {
      player.stock.add(Resource.STEEL, buildingTags, {log: true});
    }
  }
}
