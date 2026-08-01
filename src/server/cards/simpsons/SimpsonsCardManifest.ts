import {CardName} from '../../../common/cards/CardName';
import {ModuleManifest} from '../ModuleManifest';
import {SpringfieldNuclearPlant} from './SpringfieldNuclearPlant';
import {KrustyBurgerFranchise} from './KrustyBurgerFranchise';
import {ProfessorFrinksLab} from './ProfessorFrinksLab';
import {ItchyAndScratchyStudios} from './ItchyAndScratchyStudios';
import {MoesTavern} from './MoesTavern';
import {MonorailSystem} from './MonorailSystem';
import {MrBurnsFortune} from './MrBurnsFortune';
import {SpringfieldGorge} from './SpringfieldGorge';
import {RadioactiveMan} from './RadioactiveMan';
import {DuffBrewery} from './DuffBrewery';
import {BartsSlingshot} from './BartsSlingshot';
import {LisasSaxophone} from './LisasSaxophone';
import {HomersOdyssey} from './HomersOdyssey';
import {ShelbyvilleRivalry} from './ShelbyvilleRivalry';
import {StonecuttersLodge} from './StonecuttersLodge';
import {ApusKwikEMart} from './ApusKwikEMart';
import {TreehouseOfHorror} from './TreehouseOfHorror';
import {LardLadDonuts} from './LardLadDonuts';
import {MaggiesPacifier} from './MaggiesPacifier';
import {SpaceCoyoteVision} from './SpaceCoyoteVision';

export const SIMPSONS_CARD_MANIFEST = new ModuleManifest({
  module: 'simpsons',
  projectCards: {
    [CardName.SPRINGFIELD_NUCLEAR_PLANT]: {Factory: SpringfieldNuclearPlant},
    [CardName.KRUSTY_BURGER_FRANCHISE]: {Factory: KrustyBurgerFranchise},
    [CardName.PROFESSOR_FRINKS_LAB]: {Factory: ProfessorFrinksLab},
    [CardName.ITCHY_AND_SCRATCHY_STUDIOS]: {Factory: ItchyAndScratchyStudios},
    [CardName.MOES_TAVERN]: {Factory: MoesTavern},
    [CardName.MONORAIL_SYSTEM]: {Factory: MonorailSystem},
    [CardName.MR_BURNS_FORTUNE]: {Factory: MrBurnsFortune},
    [CardName.SPRINGFIELD_GORGE]: {Factory: SpringfieldGorge},
    [CardName.RADIOACTIVE_MAN]: {Factory: RadioactiveMan},
    [CardName.DUFF_BREWERY]: {Factory: DuffBrewery},
    [CardName.BARTS_SLINGSHOT]: {Factory: BartsSlingshot},
    [CardName.LISAS_SAXOPHONE]: {Factory: LisasSaxophone},
    [CardName.HOMERS_ODYSSEY]: {Factory: HomersOdyssey},
    [CardName.SHELBYVILLE_RIVALRY]: {Factory: ShelbyvilleRivalry},
    [CardName.STONECUTTERS_LODGE]: {Factory: StonecuttersLodge},
    [CardName.APUS_KWIK_E_MART]: {Factory: ApusKwikEMart},
    [CardName.TREEHOUSE_OF_HORROR]: {Factory: TreehouseOfHorror},
    [CardName.LARD_LAD_DONUTS]: {Factory: LardLadDonuts},
    [CardName.MAGGIES_PACIFIER]: {Factory: MaggiesPacifier},
    [CardName.SPACE_COYOTE_VISION]: {Factory: SpaceCoyoteVision},
  },
});
