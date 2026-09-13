import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class HerbologyFieldStation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.HERBOLOGY_FIELD_STATION, tags: [Tag.PLANT, Tag.SCIENCE], cost: 8, victoryPoints: 1,
      behavior: {production: {plants: 1}},
      metadata: {cardNumber: 'HP110', renderData: CardRenderer.builder((b) => {
        b.production((pb) => pb.plants(1)).br;
        b.effect('When brewing a potion, you may spend plants (each worth 2 potion points).', (eb) => {eb.plants(1).startEffect.text('2 pts');});
      }), description: 'Increase plant production 1 step. When brewing a potion, you may spend plants — each plant counts as 2 potion points. (Field-cultivated magical herbs make especially potent ingredients.)'}
    });
  }
}
