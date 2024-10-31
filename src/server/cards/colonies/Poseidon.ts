import {CorporationCard} from '../corporation/CorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';

export class Poseidon extends CorporationCard {
  constructor() {
    super({
      name: CardName.POSEIDON,
      startingMegaCredits: 36,

      firstAction: {
        text: 'Place a colony',
        // title: 'Poseidon first action - Select where to build colony
        colonies: {buildColony: {}},
      },
      metadata: {
        cardNumber: 'R02',
        description: 'You start with 36 M€. As your first action, place a colony.',
        renderData: CardRenderer.builder((b) => {
          b.br.br;
          b.megacredits(36).nbsp.colonies(1);
          b.corpBox('effect', (ce) => {
            ce.effect('When any colony is placed, including this, raise your M€ production 1 step.', (eb) => {
              eb.colonies(1, {all}).startEffect.production((pb) => pb.megacredits(1));
            });
          });
        }),
      },
    });
  }

  public onColonyAdded(_player: IPlayer, cardOwner: IPlayer) {
    cardOwner.production.add(Resource.MEGACREDITS, 1, {log: true});
  }
}
