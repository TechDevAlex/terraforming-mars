import {CorporationCard} from './CorporationCard';
import {IPlayer} from '../../IPlayer';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IStandardProjectCard} from '../IStandardProjectCard';
import {Resource} from '../../../common/Resource';

export class CrediCor extends CorporationCard {
  constructor() {
    super({
      name: CardName.CREDICOR,
      startingMegaCredits: 50,

      metadata: {
        cardNumber: 'R08',
        description: 'You start with 50 M€.',
        renderData: CardRenderer.builder((b) => {
          b.br.br.br;
          b.megacredits(50);
          b.corpBox('effect', (ce) => {
            ce.effect('After you pay for a card or standard project with a basic cost of 20M€ or more, you gain 6 M€.', (eb) => {
              eb.minus().megacredits(20).startEffect.megacredits(6);
            });
          });
        }),
      },
    });
  }
  private effect(player: IPlayer, card: IProjectCard | IStandardProjectCard): void {
    if (player.isCorporation(this.name) && card.cost >= 20) {
      player.stock.add(Resource.MEGACREDITS, 6, {log: true});
    }
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard) {
    this.effect(player, card);
  }
  public onStandardProject(player: IPlayer, project: IStandardProjectCard) {
    this.effect(player, project);
  }
}
