import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ScrapyardSalvage extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.SCRAPYARD_SALVAGE, tags: [], cost: 9,
      victoryPoints: -2,
      behavior: {production: {megacredits: 2}},
      metadata: {cardNumber: 'MY155', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Knowledge is the ultimate currency.)'},
    });
  }
}
