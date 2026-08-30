import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';import {IPlayer} from '../../IPlayer';import {Resource} from '../../../common/Resource';
export class MorsmordreTerror extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.MORSMORDRE_TERROR, tags: [Tag.POWER], cost: 7, metadata: {cardNumber: 'HP163', renderData: CardRenderer.builder((b) => {b.minus().megacredits(2).asterix();}), description: 'All opponents lose 2 M€. Gain 1 M€ per opponent. (The Dark Mark hung glittering above—a skull with a serpent tongue, the sign of murder.)'}});}
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {opp.stock.deduct(Resource.MEGACREDITS, Math.min(opp.megaCredits, 2), {log: true, from: {player}});}
    player.stock.add(Resource.MEGACREDITS, player.opponents.length, {log: true});
    return undefined;
  }
}
