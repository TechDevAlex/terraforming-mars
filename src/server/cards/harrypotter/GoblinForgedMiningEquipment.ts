import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class GoblinForgedMiningEquipment extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.GOBLIN_FORGED_MINING_EQUIPMENT, tags: [Tag.BUILDING], cost: 10,
      behavior: {production: {megacredits: -6, steel: 2, titanium: 2}},
      metadata: {cardNumber: 'HP218', renderData: CardRenderer.builder((b) => {
        b.production((pb) => pb.minus().megacredits(6).steel(2).titanium(2));
      }), description: 'Decrease M€ production 6 steps. Increase steel and titanium production 2 steps each. (Blades that never dull have other uses than fighting—but goblins only lease, never sell.)'}
    });
  }
}
