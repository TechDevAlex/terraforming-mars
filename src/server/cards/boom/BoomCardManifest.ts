import {CardName} from '../../../common/cards/CardName';
import {ModuleManifest} from '../ModuleManifest';
import {Coinflip} from './Coinflip';
import {Overslept} from './Overslept';
import {WhaleHunting} from './WhaleHunting';
import {FinancialGoody} from './FinancialGoody';
import {FitnessStudioSubscription} from './FitnessStudioSubscription';
import {Redirect} from './Redirect';
import {DoubleProductionEvent} from './DoubleProductionEvent';
import {GoldenGateBridge} from './GoldenGateBridge';
import {Wasteland} from './Wasteland';
import {VerbotenerWald} from './VerbotenerWald';
import {BuildACathedral} from './BuildACathedral';
import {NaturalDisaster} from './NaturalDisaster';
import {LightsOut} from './LightsOut';
import {OceanTheEarth} from './OceanTheEarth';
import {CardCollector} from './CardCollector';

export const BOOM_CARD_MANIFEST = new ModuleManifest({
  module: 'boom',
  projectCards: {
    [CardName.COINFLIP]: {Factory: Coinflip},
    [CardName.OVERSLEPT]: {Factory: Overslept},
    [CardName.WHALE_HUNTING]: {Factory: WhaleHunting},
    [CardName.FINANCIAL_GOODY]: {Factory: FinancialGoody},
    [CardName.FITNESS_STUDIO_SUBSCRIPTION]: {Factory: FitnessStudioSubscription},
    [CardName.REDIRECT]: {Factory: Redirect},
    [CardName.DOUBLE_PRODUCTION]: {Factory: DoubleProductionEvent},
    [CardName.GOLDEN_GATE_BRIDGE]: {Factory: GoldenGateBridge},
    [CardName.WASTELAND]: {Factory: Wasteland},
    [CardName.VERBOTENER_WALD]: {Factory: VerbotenerWald},
    [CardName.BUILD_A_CATHEDRAL]: {Factory: BuildACathedral},
    [CardName.NATURAL_DISASTER]: {Factory: NaturalDisaster},
    [CardName.LIGHTS_OUT]: {Factory: LightsOut},
    [CardName.OCEAN_THE_EARTH]: {Factory: OceanTheEarth},
  },
  corporationCards: {
    [CardName.CARD_COLLECTOR]: {Factory: CardCollector},
  },
});
