import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';import {IPlayer} from '../../IPlayer';import {Resource} from '../../../common/Resource';import {SelectPlayer} from '../../inputs/SelectPlayer';import {CardResource} from '../../../common/CardResource';
export class FenrirGreybackAssault extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.FENRIR_GREYBACK_ASSAULT, tags: [Tag.MICROBE], cost: 11, behavior: {addResourcesToAnyCard: [{type: CardResource.MICROBE, count: 2}]}, metadata: {cardNumber: 'HP129', renderData: CardRenderer.builder((b) => {b.minus().production((pb) => pb.plants(3)).asterix().resource(CardResource.MICROBE, {amount: 2});}), description: 'Select opponent: they lose 3 plant production. Add 2 microbes to any card. (The werewolf positioned himself near children—he liked to bite them young.)'}});}
  public override bespokePlay(player: IPlayer) {
    return new SelectPlayer(player.opponents, 'Select target for Fenrir').andThen((target) => {
      target.production.add(Resource.PLANTS, -3, {log: true}); return undefined;});
  }
}
