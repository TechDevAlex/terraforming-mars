import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GhostTownRevival extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.GHOST_TOWN_REVIVAL, tags: [Tag.POWER, Tag.JOVIAN], cost: 4,
      behavior: {global: {temperature: 1}},
      metadata: {cardNumber: 'MY152', renderData: CardRenderer.builder((b) => {b.text('Raise global parameter.');}),
        description: 'Raise temperature 1 step. (Nothing is as it seems.)'},
    });
  }
}
