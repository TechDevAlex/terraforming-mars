import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class AccioResourceCharm extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.ACCIO_RESOURCE_CHARM, tags: [Tag.POWER], cost: 9, behavior: {stock: {steel: 2, titanium: 2, plants: 2}}, metadata: {cardNumber: 'HP173', renderData: CardRenderer.builder((b) => {b.steel(2).titanium(2).plants(2);}), description: 'Gain 2 steel, 2 titanium, 2 plants. (Accio!—and the object flies across the room, summoned by willpower alone.)'}});}
}
