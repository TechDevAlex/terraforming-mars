import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {CardResource} from '../../../common/CardResource';

export class Anthozoa extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ANTHOZOA,
      cost: 7,
      tags: [Tag.PLANT, Tag.ANIMAL, Tag.MARS],
      requirements: {oceans: 3},
      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}, per: 2},
      action: {
        spend: {plants: 1},
        addResourcesToAnyCard: {count: 1, type: CardResource.ANIMAL, mustHaveCard: true},
      },

      metadata: {
        cardNumber: 'Pf55',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 plant to add an animal to any card.', (eb) => {
            eb.plants(1).startAction.resource(CardResource.ANIMAL);
          });
        }),
        description: 'Requires 3 oceans on Mars. 1 VP per 2 animals on this card.',
      },
    });
  }

}

