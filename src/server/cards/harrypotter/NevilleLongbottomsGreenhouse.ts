import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
export class NevilleLongbottomsGreenhouse extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.NEVILLE_LONGBOTTOMS_GREENHOUSE, tags: [Tag.PLANT, Tag.BUILDING], cost: 12, victoryPoints: 1,
      metadata: {cardNumber: 'HP25', renderData: CardRenderer.builder((b) => {b.action('Gain 2 plants.', (ab) => {ab.empty().startAction.plants(2);});}),
        description: 'Action: Gain 2 plants. (Neville\'s talent for Herbology transformed the Hogwarts greenhouses into miracles of growth.)'},
    });
  }
  public canAct(): boolean {return true;}
  public action(player: Player) {player.stock.add(Resource.PLANTS, 2, {log: true}); return undefined;}
}
