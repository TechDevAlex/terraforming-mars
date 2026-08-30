import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CombatDrill extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.COMBAT_DRILL, tags: [Tag.SCIENCE, Tag.SPACE], cost: 5,
      victoryPoints: 1,
      behavior: {production: {energy: 2, heat: 1, titanium: 1}},
      metadata: {cardNumber: 'MY349', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(2); pb.heat(1); pb.titanium(1);});}),
        description: '1 VP. (Every clue matters.)'},
    });
  }
}
