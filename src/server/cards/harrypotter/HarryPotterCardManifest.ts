import {CardName} from '../../../common/cards/CardName';
import {ModuleManifest} from '../ModuleManifest';
import {MinistryOfMagicPowerGrid} from './MinistryOfMagicPowerGrid';
import {DiagonAlleyShops} from './DiagonAlleyShops';
import {FilchsConfiscatedCollection} from './FilchsConfiscatedCollection';
import {DailyProphetPress} from './DailyProphetPress';
import {LeakyCauldron} from './LeakyCauldron';
import {HogwartsExpress} from './HogwartsExpress';
import {GringottsVault} from './GringottsVault';
import {NevillesHerbologyLesson} from './NevillesHerbologyLesson';
import {DumbledoresPhoenix} from './DumbledoresPhoenix';
import {HerbologyGreenhouse} from './HerbologyGreenhouse';
import {PetrificusTotalus} from './PetrificusTotalus';
import {HermionesTimeTurner} from './HermionesTimeTurner';
import {FiendfyreUnleashed} from './FiendfyreUnleashed';
import {SlytherinAmbition} from './SlytherinAmbition';
import {OrderOfThePhoenix} from './OrderOfThePhoenix';
import {WeasleysWizardWheezes} from './WeasleysWizardWheezes';
import {ChamberOfSecrets} from './ChamberOfSecrets';
import {MandrakeNursery} from './MandrakeNursery';
import {TrevorNevillesToad} from './TrevorNevillesToad';
import {ElderWand} from './ElderWand';
import {BrewPotionStandardProject} from './BrewPotionStandardProject';

export const HARRY_POTTER_CARD_MANIFEST = new ModuleManifest({
  module: 'harrypotter',
  projectCards: {
    [CardName.MINISTRY_OF_MAGIC_POWER_GRID]: {Factory: MinistryOfMagicPowerGrid},
    [CardName.DIAGON_ALLEY_SHOPS]: {Factory: DiagonAlleyShops},
    [CardName.FILCHS_CONFISCATED_COLLECTION]: {Factory: FilchsConfiscatedCollection},
    [CardName.DAILY_PROPHET_PRESS]: {Factory: DailyProphetPress},
    [CardName.LEAKY_CAULDRON]: {Factory: LeakyCauldron},
    [CardName.HOGWARTS_EXPRESS]: {Factory: HogwartsExpress},
    [CardName.GRINGOTTS_VAULT]: {Factory: GringottsVault},
    [CardName.NEVILLES_HERBOLOGY_LESSON]: {Factory: NevillesHerbologyLesson},
    [CardName.DUMBLEDORES_PHOENIX]: {Factory: DumbledoresPhoenix},
    [CardName.HERBOLOGY_GREENHOUSE]: {Factory: HerbologyGreenhouse},
    [CardName.PETRIFICUS_TOTALUS]: {Factory: PetrificusTotalus},
    [CardName.HERMIONES_TIME_TURNER]: {Factory: HermionesTimeTurner},
    [CardName.FIENDFYRE_UNLEASHED]: {Factory: FiendfyreUnleashed},
    [CardName.SLYTHERIN_AMBITION]: {Factory: SlytherinAmbition},
    [CardName.ORDER_OF_THE_PHOENIX]: {Factory: OrderOfThePhoenix},
    [CardName.WEASLEYS_WIZARD_WHEEZES]: {Factory: WeasleysWizardWheezes},
    [CardName.CHAMBER_OF_SECRETS]: {Factory: ChamberOfSecrets},
    [CardName.MANDRAKE_NURSERY]: {Factory: MandrakeNursery},
    [CardName.TREVOR_NEVILLES_TOAD]: {Factory: TrevorNevillesToad},
    [CardName.ELDER_WAND]: {Factory: ElderWand},
  },
  standardProjects: {
    [CardName.BREW_POTION_STANDARD_PROJECT]: {Factory: BrewPotionStandardProject},
  },
});
