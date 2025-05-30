import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {CardResource} from '../../../common/CardResource';
import {all} from '../Options';
import {Resource} from '../../../common/Resource';
import {Board} from '../../boards/Board';
import {Space} from '../../boards/Space';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {SelectPayment} from '../../inputs/SelectPayment';
import {Size} from '../../../common/cards/render/Size';
import {Priority} from '../../deferredActions/Priority';

export class NeptunianPowerConsultants extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.NEPTUNIAN_POWER_CONSULTANTS,
      tags: [Tag.POWER],
      cost: 4,
      resourceType: CardResource.HYDROELECTRIC_RESOURCE,
      victoryPoints: {resourcesHere: {}},

      metadata: {
        cardNumber: 'X61',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1, {all, size: Size.SMALL}).asterix()
            .colon()
            .minus().megacredits(7).super((b) => b.steel(1));
          b.br;
          b.nbsp.nbsp.plus().production((pb) => pb.energy(1)).plus().resource(CardResource.HYDROELECTRIC_RESOURCE);
          b.br;
          b.plainText('(Effect: When any ocean is placed, you MAY pay 7 M€ (steel may be used), to ' +
            'raise energy production 1 step and add 1 hydroelectric resource to this card.)');
        }),
        description: '1 VP per hydroelectric resource on this card',
      },
    });
  }

  public onTilePlaced(cardOwner: IPlayer, _activePlayer: IPlayer, space: Space) {
    const game = cardOwner.game;
    if (Board.isUncoveredOceanSpace(space)) {
      if (cardOwner.canAfford({cost: 7, steel: true})) {
        const orOptions = new OrOptions();
        orOptions.options.push(new SelectPayment(
          'Spend 7 M€ for one energy production and hydroelectric resource',
          7, {steel: true})
          .andThen((payment) => {
            cardOwner.pay(payment);
            cardOwner.production.add(Resource.ENERGY, 1, {log: true});
            cardOwner.addResourceTo(this, {qty: 1, log: true});
            return undefined;
          }));
        orOptions.options.push(new SelectOption('Do not use card effect').andThen(() => {
          game.log('${0} declined to use the ${1} effect', (b) => b.player(cardOwner).card(this));
          return undefined;
        }));
        cardOwner.defer(orOptions, Priority.OPPONENT_TRIGGER);
      } else {
        game.log('${0} cannot afford to use the ${1} effect', (b) => b.player(cardOwner).card(this));
      }
    }
  }
}
