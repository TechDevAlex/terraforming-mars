import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class BattleOfHogwarts extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.BATTLE_OF_HOGWARTS, tags: [Tag.POWER, Tag.MARS], cost: 30, behavior: {tr: 3, global: {temperature: 1}}, metadata: {cardNumber: 'HP198', renderData: CardRenderer.builder((b) => {b.tr(3).temperature(1);}), description: 'Raise TR 3 steps. Raise temperature 1 step. (The castle shook as spells flew and giants crashed through walls—the final stand.)'}});}
}
