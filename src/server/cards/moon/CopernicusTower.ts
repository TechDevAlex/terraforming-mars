import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {Resource} from '../../../common/Resource';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';
import {ActionCard} from '../ActionCard';

export class CopernicusTower extends ActionCard {
  constructor() {
    super({
      name: CardName.COPERNICUS_TOWER,
      type: CardType.ACTIVE,
      tags: [Tag.SPACE, Tag.MOON],
      cost: 36,

      resourceType: CardResource.ASTEROID,
      requirements: {production: Resource.TITANIUM, count: 2},
      victoryPoints: {tag: Tag.MOON},

      action: {
        or: {
          autoSelect: true,
          behaviors: [
            {
              spend: {resourcesHere: 1},
              tr: 2,
              title: 'Remove 1 asteroid resource to increase TR 2 step',
            },
            {
              addResources: 1,
              title: 'Add 1 asteroid resource to this card',
            },
          ],
        },
      },

      metadata: {
        cardNumber: 'M72',
        renderData: CardRenderer.builder((b) => {
          b.text('Requires you have 2 titanium production.', Size.TINY, false, false).br;
          b.action('Add 1 asteroid resource here, or spend 1 asteroid resource here to raise your TR 2 steps.', (eb) => {
            eb.empty().startAction.resource(CardResource.ASTEROID).nbsp.slash().nbsp.resource(CardResource.ASTEROID).arrow().tr(2);
          });
          b.br;
          b.vpText('1 VP PER MOON TAG YOU HAVE.');
        }),
      },
    });
  }
}
