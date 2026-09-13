import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {CardResource} from '../../../common/CardResource';
export class FenrirGreybackAssault extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.FENRIR_GREYBACK_ASSAULT, tags: [Tag.MICROBE], cost: 10,
      behavior: {addResourcesToAnyCard: [{type: CardResource.MICROBE, count: 2}]},
      metadata: {cardNumber: 'HP129', renderData: CardRenderer.builder((b) => {b.minus().production((pb) => pb.plants(1)).asterix().resource(CardResource.MICROBE, {amount: 2});}),
        description: 'Each opponent loses 1 plant production. Add 2 microbes to ANY card. (The werewolf positioned himself near children—he liked to bite them young.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      opp.production.add(Resource.PLANTS, -1, {log: true, from: {player}});
    }
    return undefined;
  }
}
