import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class SecurityFleet extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SECURITY_FLEET,
      tags: [Tag.SPACE],
      cost: 5,
      resourceType: CardResource.FIGHTER,

      victoryPoints: {resourcesHere: {}},

      action: {
        spend: {titanium: 2},
        addResources: 2,
      },

      metadata: {
        cardNumber: '028',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 titanium to add 2 fighters resource to this card.', (eb) => {
            eb.titanium(2).startAction.resource(CardResource.FIGHTER);
            eb.resource(CardResource.FIGHTER);
          }).br;
          b.vpText('1 VP for each fighter resource on this card.');
        }),
      },
    });
  }
}
