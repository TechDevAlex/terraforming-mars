import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AlienArtifact extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ALIEN_ARTIFACT, tags: [Tag.MICROBE, Tag.SCIENCE], cost: 19,
      victoryPoints: 1,
      behavior: {city: {}, production: {megacredits: 3}},
      metadata: {cardNumber: 'MY053', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(3);}); b.br; b.city();}),
        description: '1 VP. (Knowledge is the ultimate currency.)'},
    });
  }
}
