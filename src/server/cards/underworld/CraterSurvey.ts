import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {Tag} from '../../../common/cards/Tag';
import {digit} from '../Options';
import {CardResource} from '../../../common/CardResource';

export class CraterSurvey extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.CRATER_SURVEY,
      type: CardType.EVENT,
      cost: 1,
      tags: [Tag.MARS],

      behavior: {
        addResourcesToAnyCard: {count: 2, type: CardResource.DATA},
        underworld: {identify: 4},
      },

      metadata: {
        cardNumber: 'U69',
        renderData: CardRenderer.builder((b) => {
          b.resource(CardResource.DATA, 2).asterix().identify(4, {digit});
        }),
        description: 'Add 2 data resources to ANOTHER card. Identify 4 underground resources.',
      },
    });
  }
}
