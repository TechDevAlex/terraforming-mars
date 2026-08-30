import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class EnigmaBox extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ENIGMA_BOX, tags: [Tag.ANIMAL], cost: 24,
      behavior: {production: {steel: 2, plants: 2}},
      metadata: {cardNumber: 'MY242', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(2); pb.plants(2);});}),
        description: 'Adjust production. (A whisper in the void.)'},
    });
  }
}
