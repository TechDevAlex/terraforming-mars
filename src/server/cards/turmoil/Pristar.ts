import {CorporationCard} from '../corporation/CorporationCard';
import {IPlayer} from '../../IPlayer';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';
import {Resource} from '../../../common/Resource';

export class Pristar extends CorporationCard {
  constructor() {
    super({
      name: CardName.PRISTAR,
      startingMegaCredits: 53,
      resourceType: CardResource.PRESERVATION,

      victoryPoints: {resourcesHere: {}},

      metadata: {
        cardNumber: 'R07',
        description: 'You start with 53 M€. 1 VP per preservation resource here.',

        renderData: CardRenderer.builder((b) => {
          b.br.br.br;
          b.megacredits(53);
          b.corpBox('effect', (ce) => {
            ce.effect('During production phase, if you did not get TR so far this generation, add one preservation resource here and gain 6 M€.', (eb) => {
              eb.tr(1, {size: Size.SMALL, cancelled: true}).startEffect.resource(CardResource.PRESERVATION).megacredits(6);
            });
          });
        }),
      },
    });
  }

  // public override bespokePlay(player: IPlayer) {
  //    player.decreaseTerraformRating(2);
  //    return undefined;
  //  }

  public onProductionPhase(player: IPlayer) {
    if (!(player.hasIncreasedTerraformRatingThisGeneration)) {
      player.stock.add(Resource.MEGACREDITS, 6, {log: true, from: this});
      player.addResourceTo(this, 1);
    }
    return undefined;
  }
}
