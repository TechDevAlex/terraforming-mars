import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';import {IPlayer} from '../../IPlayer';
export class GilderoyLockhartPublicity extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.GILDEROY_LOCKHART_PUBLICITY, tags: [Tag.EARTH], cost: 2, behavior: {drawCard: 1}, metadata: {cardNumber: 'HP180', renderData: CardRenderer.builder((b) => {b.cards(1).cards(1).asterix();}), description: 'Draw 1 card. Each opponent draws 1 card. (Magical Me—five time winner of Witch Weekly\'s Most Charming Smile Award.)'}});}
  public override bespokePlay(player: IPlayer) {for (const opp of player.opponents) opp.drawCard(); return undefined;}
}
