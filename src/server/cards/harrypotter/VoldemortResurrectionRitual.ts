import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
export class VoldemortResurrectionRitual extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.VOLDEMORT_RESURRECTION_RITUAL, tags: [Tag.POWER, Tag.MICROBE, Tag.JOVIAN], cost: 25, victoryPoints: -3,
      behavior: {production: {megacredits: 4, energy: 2}},
      metadata: {cardNumber: 'HP100', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(4).energy(2)).br.minus().tr(1).asterix();}),
        description: 'Increase M€ production 4 and energy production 2 steps. Each opponent loses 1 TR. -3 VP. (Bone of the father, flesh of the servant, blood of the enemy—the Dark Lord rises again.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      opp.decreaseTerraformRating(1);
      player.game.log('${0} lost 1 TR to Voldemort', (b) => b.player(opp));
    }
    return undefined;
  }
}
