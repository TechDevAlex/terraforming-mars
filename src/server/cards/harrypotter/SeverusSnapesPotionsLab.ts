import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class SeverusSnapesPotionsLab extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.SEVERUS_SNAPES_POTIONS_LAB, tags: [Tag.SCIENCE, Tag.BUILDING], cost: 15, victoryPoints: 1, metadata: {cardNumber: 'HP165', renderData: CardRenderer.builder((b) => {b.action('Spend 2 M€ and 1 energy to draw 2 cards.', (ab) => {ab.megacredits(2).energy(1).startAction.cards(2);});}), description: 'Action: Spend 2 M€ and 1 energy to draw 2 cards. (The dungeons reeked of potions fumes as Snape prowled between the cauldrons.)'}});}
  public canAct(player: Player): boolean {return player.canAfford(2) && player.energy >= 1;}
  public action(player: Player) {player.megaCredits -= 2; player.energy -= 1; player.drawCard(2); return undefined;}
}
