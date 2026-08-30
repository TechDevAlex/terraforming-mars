import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class WingedKeySwarm extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.WINGED_KEY_SWARM, tags: [Tag.SPACE], cost: 6, behavior: {stock: {titanium: 3}}, metadata: {cardNumber: 'HP110', renderData: CardRenderer.builder((b) => {b.titanium(3);}), description: 'Gain 3 titanium. (A thousand jewel-bright wings fluttered near the ceiling—only one key fit the lock.)'}});}
}
