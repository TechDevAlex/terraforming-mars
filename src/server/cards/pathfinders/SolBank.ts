import {CorporationCard} from '../corporation/CorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {CardResource} from '../../../common/CardResource';
import {IPlayer} from '../../IPlayer';

export class SolBank extends CorporationCard {
  constructor() {
    super({
      name: CardName.SOLBANK,
      startingMegaCredits: 36,
      resourceType: CardResource.DATA,

      metadata: {
        cardNumber: 'PfC13',
        description: 'You start with 36 M€',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(36).br;
          b.effect('Whenever you spend M€ (or steel or titanium) add 1 data to this card.', (eb) =>
            eb.minus().megacredits(1).slash().steel(1).slash().titanium(1).startEffect.resource(CardResource.DATA));
          b.br;
          b.effect('During the production phase convert each data from this card into 2M€ each.', (eb) => eb.resource(CardResource.DATA).asterix().startEffect.megacredits(1));
        }),
      },
    });
  }

  // Behavior is in Pathfinders.addToSolBank.
  public onProductionPhase(player: IPlayer): undefined {
    player.megaCredits += this.resourceCount*2;
    this.resourceCount = 0;
    return undefined;
  }
}
