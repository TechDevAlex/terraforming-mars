import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {SelectPlayer} from '../../inputs/SelectPlayer';
export class VoldemortResurrectionRitual extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.VOLDEMORT_RESURRECTION_RITUAL, tags: [Tag.POWER, Tag.MICROBE], cost: 24, victoryPoints: -3,
      behavior: {production: {megacredits: 6, energy: 2}},
      metadata: {cardNumber: 'HP100', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(6).energy(2));}),
        description: 'Increase M€ production 6 and energy production 2 steps. Select opponent: they lose 3 TR. -3 VP. (Bone of the father, flesh of the servant, blood of the enemy—the Dark Lord rises again.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    return new SelectPlayer(player.opponents, 'Select target for Voldemort\'s wrath').andThen((target) => {
      target.decreaseTerraformRating(3);
      player.game.log('${0} lost 3 TR to Voldemort', (b) => b.player(target));
      return undefined;
    });
  }
}
