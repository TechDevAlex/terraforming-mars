import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class TrollWorkers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.TROLL_WORKERS, tags: [Tag.BUILDING], cost: 8,
      cardDiscount: {tag: Tag.BUILDING, amount: 2},
      behavior: {production: {steel: 1}},
      metadata: {cardNumber: 'HP208', renderData: CardRenderer.builder((b) => {
        b.production((pb) => pb.steel(1)).br;
        b.effect('When you play a Building tag, you pay 2 M€ less for it.', (eb) => {eb.tag(Tag.BUILDING).startEffect.megacredits(-2);});
      }), description: 'Increase steel production 1 step. When you play a Building tag, you pay 2 M€ less for it. (Trolls are strong. They are also cheap—if you can direct them.)'}
    });
  }
}
