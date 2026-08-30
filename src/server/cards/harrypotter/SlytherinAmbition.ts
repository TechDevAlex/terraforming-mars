import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {Space} from '../../boards/Space';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';
import {Board} from '../../boards/Board';
import {all} from '../Options';

export class SlytherinAmbition extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SLYTHERIN_AMBITION,
      tags: [Tag.CITY],
      cost: 15,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'HP14',
        renderData: CardRenderer.builder((b) => {
          b.effect('When any OPPONENT places a city tile, increase your M€ production 1 step.', (eb) => {
            eb.city({size: Size.SMALL, all}).startEffect.production((pb) => pb.megacredits(1));
          });
        }),
        description: 'Effect: When any opponent places a city tile, increase your M€ production 1 step. (Slytherin House — where the cunning and ambitious thrive. Why build when you can profit from what others build?)',
      },
    });
  }

  public onTilePlaced(cardOwner: IPlayer, activePlayer: IPlayer, space: Space) {
    if (cardOwner.id !== activePlayer.id && Board.isCitySpace(space)) {
      cardOwner.production.add(Resource.MEGACREDITS, 1, {log: true});
    }
  }
}
