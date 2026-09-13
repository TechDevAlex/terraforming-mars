import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class SelfStirringCauldrons extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.SELF_STIRRING_CAULDRONS, tags: [Tag.SCIENCE], cost: 5, victoryPoints: 1,
      metadata: {cardNumber: 'HP209', renderData: CardRenderer.builder((b) => {
        b.effect('You may brew a potion twice per generation. Hand cards are worth 2 ingredient points instead of 1.', (eb) => {
          eb.cards(1).startEffect.text('2 pts');
        });
      }), description: 'You may brew a potion twice per generation. Hand cards you sacrifice for brewing are worth 2 potion points instead of 1. (Enchanted cauldrons that stir themselves and adjust temperature — potion brewing has never been easier.)'}
    });
  }
}
