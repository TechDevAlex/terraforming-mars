import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class FiendfyreInferno extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.FIENDFYRE_INFERNO, tags: [Tag.POWER], cost: 22, behavior: {global: {temperature: 2}}, metadata: {cardNumber: 'HP93', renderData: CardRenderer.builder((b) => {b.temperature(2);}), description: 'Raise temperature 2 steps. (Cursed fire that thinks, hunts, and devours—once released, even the caster cannot control it.)'}});}
}
