import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';

export class LastResortIngenuity extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.LAST_RESORT_INGENUITY,
      cost: 2,

      metadata: {
        cardNumber: 'Pf47',
        renderData: CardRenderer.builder((b) => {
          b.cards(1).asterix().colon().super((b) => b.steel(1).titanium(1));
          b.br;
          b.text('The next card you play this generation can be paid for with steel or titanium despite its tags.', Size.MEDIUM, true, true);
        }),
      },
    });
  }
  // Behavior in player.canUseSteel, player.canUseTitanium, and SelectPaymentDeferred.
}

