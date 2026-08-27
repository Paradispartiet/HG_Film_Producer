import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const dataDirectory = path.join(root, "src", "ui", "data");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 536;

const expansionFiles = [
  "earlyCinemaExpansion.ts",
  "chapterOneEarlyCinemaExpansion.ts",
  "chapterOneRescuedByRoverExpansion.ts",
  "chapterTwoExhibitionExpansion.ts",
  "chapterThreeNarrativeExpansion.ts",
  "chapterFourIndustryExpansion.ts",
  "chapterFiveInternationalExpansion.ts",
  "chapterSixHollywoodExpansion.ts",
  "chapterSevenWeimarExpansion.ts",
  "chapterEightFrenchAvantGardeExpansion.ts",
  "chapterNineSovietMontageExpansion.ts",
  "chapterTenSilentCinemasExpansion.ts",
  "chapterTenLaborersLoveExpansion.ts",
  "chapterTenAThrowOfDiceExpansion.ts",
  "chapterTenGrowthOfTheSoilExpansion.ts",
  "chapterTenOrochiExpansion.ts",
  "chapterTenRedHeroineExpansion.ts",
  "chapterTenHaxanExpansion.ts",
  "chapterElevenJazzSingerExpansion.ts",
  "chapterElevenBlackmailExpansion.ts",
  "chapterElevenApplauseExpansion.ts",
  "chapterElevenNeighborsWifeExpansion.ts",
  "chapterElevenBroadwayMelodyExpansion.ts",
  "chapterElevenSousLesToitsExpansion.ts",
  "chapterElevenEnthusiasmExpansion.ts",
  "chapterElevenBlueAngelExpansion.ts",
  "chapterTwelvePublicEnemyExpansion.ts",
  "chapterTwelveDraculaExpansion.ts",
  "chapterTwelve42ndStreetExpansion.ts",
  "chapterTwelveScarfaceExpansion.ts",
  "chapterTwelveItHappenedOneNightExpansion.ts",
  "chapterTwelveTopHatExpansion.ts",
  "chapterTwelveGoneWithTheWindExpansion.ts",
  "chapterThirteenPaisanExpansion.ts",
  "chapterThirteenRedShoesExpansion.ts",
  "chapterThirteenSunsetBoulevardExpansion.ts",
  "chapterThirteenLosOlvidadosExpansion.ts",
  "chapterThirteenUgetsuExpansion.ts",
  "chapterThirteenAManEscapedExpansion.ts",
  "chapterFourteenBlackGirlExpansion.ts",
  "chapterFourteenMemoriesUnderdevelopmentExpansion.ts",
  "chapterFifteenToukiBoukiExpansion.ts",
  "chapterFifteenManilaClawsLightExpansion.ts",
  "chapterFifteenBattleChilePartOneExpansion.ts",
  "chapterSixteenRaidersLostArkExpansion.ts",
  "chapterSixteenYellowEarthExpansion.ts",
  "chapterSixteenMyBeautifulLaundretteExpansion.ts",
  "chapterSixteenPoliceStoryExpansion.ts",
  "chapterSixteenOfficialStoryExpansion.ts",
  "chapterSixteenYeelenExpansion.ts",
  "chapterSixteenDoTheRightThingExpansion.ts",
  "chapterSixteenMephistoExpansion.ts",
  "chapterSixteenMissingExpansion.ts",
  "chapterSixteenBladeRunnerExpansion.ts",
  "chapterSixteenETExtraTerrestrialExpansion.ts",
  "chapterSixteenSugarCaneAlleyExpansion.ts",
  "chapterSixteenTerminatorExpansion.ts",
  "chapterSixteenComeAndSeeExpansion.ts",
  "chapterSixteenBackToTheFutureExpansion.ts",
  "chapterSixteenAliensExpansion.ts",
  "chapterSixteenShesGottaHaveItExpansion.ts",
  "chapterSixteenABetterTomorrowExpansion.ts",
  "chapterSixteenRoboCopExpansion.ts",
  "chapterSixteenSalaamBombayExpansion.ts",
  "chapterSixteenRagingBullExpansion.ts",
  "chapterSeventeenHyenasExpansion.ts",
  "chapterSeventeenSankofaExpansion.ts",
  "chapterSeventeenChungkingExpressExpansion.ts",
  "chapterSeventeenBanditQueenExpansion.ts",
  "chapterSeventeenToyStoryExpansion.ts",
  "chapterSeventeenTheMatrixExpansion.ts",
  "chapterSeventeenShiriExpansion.ts",
  "chapterSeventeenMyOwnPrivateIdahoExpansion.ts",
  "chapterSeventeenBoyzNTheHoodExpansion.ts",
  "chapterSeventeenTheLivingEndExpansion.ts",
  "chapterSeventeenThePianoExpansion.ts",
  "chapterSeventeenThreeColoursRedExpansion.ts",
  "chapterSeventeenPulpFictionExpansion.ts",
  "chapterSeventeenHoopDreamsExpansion.ts",
  "chapterSeventeenTheWhiteBalloonExpansion.ts",
  "chapterSeventeenFireExpansion.ts",
  "chapterSeventeenTitanicExpansion.ts",
  "chapterSeventeenPrincessMononokeExpansion.ts",
  "chapterSeventeenEvesBayouExpansion.ts",
  "chapterSeventeenTheIdiotsExpansion.ts",
  "chapterSeventeenRinguExpansion.ts",
  "chapterSeventeenBlairWitchProjectExpansion.ts",
  "chapterSeventeenBoysDontCryExpansion.ts",
  "chapterSeventeenGoodfellasExpansion.ts",
  "chapterEighteenGleanersExpansion.ts",
  "chapterEighteenInTheMoodForLoveExpansion.ts",
  "chapterEighteenAtanarjuatExpansion.ts",
  "chapterEighteenSpiritedAwayExpansion.ts",
  "chapterEighteenRussianArkExpansion.ts",
  "chapterEighteenCityOfGodExpansion.ts",
  "chapterEighteenAttackOfTheClonesExpansion.ts",
  "chapterEighteenCollateralExpansion.ts",
  "chapterEighteenInlandEmpireExpansion.ts",
  "chapterEighteenZodiacExpansion.ts",
  "chapterEighteenSlumdogMillionaireExpansion.ts",
  "chapterEighteenAvatarExpansion.ts",
  "chapterEighteenTheSocialNetworkExpansion.ts",
  "chapterEighteenASeparationExpansion.ts",
  "chapterEighteenGravityExpansion.ts",
  "chapterEighteenSonOfSaulExpansion.ts",
  "chapterEighteenMoonlightExpansion.ts",
  "chapterEighteenDunkirkExpansion.ts",
  "chapterEighteenRomaExpansion.ts",
  "chapterEighteenSpiderVerseExpansion.ts",
  "chapterEighteenParasiteExpansion.ts",
  "chapterEighteenTheIrishmanExpansion.ts",
  "chapterEighteenYiYiExpansion.ts",
  "chapterEighteenCrouchingTigerHiddenDragonExpansion.ts",
  "chapterEighteenTwentyEightDaysLaterExpansion.ts",
  "chapterEighteenUnknownPleasuresExpansion.ts",
  "chapterEighteenOldboyExpansion.ts",
  "chapterEighteenBrokebackMountainExpansion.ts",
  "chapterEighteenCacheExpansion.ts",
  "chapterEighteenChildrenOfMenExpansion.ts",
  "chapterEighteenPansLabyrinthExpansion.ts",
  "chapterEighteenApocalyptoExpansion.ts",
  "chapterEighteenThereWillBeBloodExpansion.ts",
  "chapterEighteenUncleBoonmeeExpansion.ts",
  "chapterEighteenTreeOfLifeExpansion.ts",
  "chapterEighteenPinaExpansion.ts",
  "chapterEighteenAmourExpansion.ts",
  "chapterEighteenHolyMotorsExpansion.ts",
  "chapterEighteenIdaExpansion.ts",
  "chapterEighteenTheRevenantExpansion.ts",
  "chapterEighteenIAmNotYourNegroExpansion.ts",
  "chapterEighteenGetOutExpansion.ts",
  "chapterEighteenColdWarExpansion.ts",
  "modernCanonExpansion.ts",
  "priorityIndieExpansion.ts",
  "eastAsianAuteurExpansion.ts",
  "japaneseAuteurExpansion.ts",
  "southKoreanCinemaExpansion.ts",
  "southSoutheastAsianExpansion.ts",
  "festivalWinners1981To2009Expansion.ts",
  "festivalWinners2010To2024Expansion.ts",
  "scandinavianEuropeanExpansion.ts",
  "easternIberianBritishExpansion.ts",
  "italyFranceGermanyBeneluxExpansion.ts"
];

const candidates = [
  {
    "title": "Paris Is Burning",
    "originalTitle": "Paris Is Burning",
    "year": 1990,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Queer documentary, community authorship, ball culture and festival/independent circulation make documentary access and representation central to the decade."
  },
  {
    "title": "Slacker",
    "originalTitle": "Slacker",
    "year": 1990,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P1",
    "chapterFunction": "Austin microbudget production and episodic city structure anchor the regional American independent ecology expanding after 1989."
  },
  {
    "title": "Metropolitan",
    "originalTitle": "Metropolitan",
    "year": 1990,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "A contained dialogue-driven independent feature shows how modest production scale, recurring interiors and specialty circulation could sustain a distinct authorial model."
  },
  {
    "title": "Days of Being Wild",
    "originalTitle": "A Fei zheng chuan",
    "year": 1990,
    "aliases": [
      "A Fei zheng zhuan"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P1",
    "chapterFunction": "Wong Kar-wai's Hong Kong production makes urban New Wave labor, star systems, location production and regional commercial authorship visible."
  },
  {
    "title": "Goodfellas",
    "originalTitle": "Goodfellas",
    "year": 1990,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "A large American studio auteur production offers a useful boundary case for prestige genre production before digital-effects-driven blockbuster workflows dominate the decade's technology story."
  },
  {
    "title": "Daughters of the Dust",
    "originalTitle": "Daughters of the Dust",
    "year": 1991,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Julie Dash's Black independent historical feature makes regional production, cultural specificity and independent distribution structurally necessary."
  },
  {
    "title": "Poison",
    "originalTitle": "Poison",
    "year": 1991,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Todd Haynes's anthology and grant-supported independent production is indispensable to New Queer Cinema and the political economy around arts funding and controversy."
  },
  {
    "title": "Raise the Red Lantern",
    "originalTitle": "Da hong deng long gao gao gua",
    "year": 1991,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Fifth Generation production and international circulation keep Mainland Chinese cinema distinct from Hong Kong and Taiwan systems."
  },
  {
    "title": "My Own Private Idaho",
    "originalTitle": "My Own Private Idaho",
    "year": 1991,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Independent queer road production and literary adaptation broaden New Queer Cinema beyond one aesthetic or budget model."
  },
  {
    "title": "Boyz n the Hood",
    "originalTitle": "Boyz n the Hood",
    "year": 1991,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P1",
    "chapterFunction": "John Singleton's debut links Black authorship, South Central Los Angeles location production and Columbia distribution at the studio/independent boundary."
  },
  {
    "title": "Reservoir Dogs",
    "originalTitle": "Reservoir Dogs",
    "year": 1992,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P1",
    "chapterFunction": "Contained independent production, festival circulation and specialty distribution make the early-1990s American indie pipeline concrete."
  },
  {
    "title": "El Mariachi",
    "originalTitle": "El Mariachi",
    "year": 1992,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Ultra-low-budget regional action production makes resource constraints, acquisition and later studio scaling legible."
  },
  {
    "title": "Hyenas",
    "originalTitle": "Hyènes",
    "year": 1992,
    "aliases": [
      "Hyenes"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Djibril Diop Mambéty's Senegalese-European co-production keeps African authorship, local production and unequal transnational finance inside the decade's causal history."
  },
  {
    "title": "The Living End",
    "originalTitle": "The Living End",
    "year": 1992,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Gregg Araki's microbudget queer road film anchors the politicized HIV-era independent circuit described as New Queer Cinema."
  },
  {
    "title": "Sankofa",
    "originalTitle": "Sankofa",
    "year": 1993,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Haile Gerima's independently financed transatlantic historical production links Black diasporic authorship, Ghana location work and alternative exhibition."
  },
  {
    "title": "Farewell My Concubine",
    "originalTitle": "Ba wang bie ji",
    "year": 1993,
    "aliases": [
      "Bawang bieji"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Mainland Chinese historical production, Hong Kong participation and Cannes circulation make transregional finance and Fifth Generation visibility concrete."
  },
  {
    "title": "The Piano",
    "originalTitle": "The Piano",
    "year": 1993,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Australia/New Zealand/France co-production, period craft and Miramax-era international specialty distribution make prestige transnational art cinema visible."
  },
  {
    "title": "Naked",
    "originalTitle": "Naked",
    "year": 1993,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Mike Leigh's performance-developed British production provides a distinct alternative to American script-first independent models."
  },
  {
    "title": "Three Colours: Red",
    "originalTitle": "Trois couleurs: Rouge",
    "year": 1994,
    "aliases": [
      "Three Colors: Red",
      "Trois couleurs Rouge"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "European co-production and cross-border financing/distribution make continental art-cinema infrastructure concrete."
  },
  {
    "title": "Chungking Express",
    "originalTitle": "Chung Hing sam lam",
    "year": 1994,
    "aliases": [
      "Chungking Express"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Hong Kong independent-speed production, urban location work and international specialty circulation anchor a distinct regional commercial-auteur system."
  },
  {
    "title": "Pulp Fiction",
    "originalTitle": "Pulp Fiction",
    "year": 1994,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P1",
    "chapterFunction": "Independent financing, Miramax distribution and nonlinear genre packaging show specialty cinema becoming a major commercial force."
  },
  {
    "title": "Vive L'Amour",
    "originalTitle": "Ai qing wan sui",
    "year": 1994,
    "aliases": [
      "Vive L’Amour"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Taiwan New Cinema's urban minimalism, low-key production and festival circulation remain institutionally distinct from Hong Kong and Mainland China."
  },
  {
    "title": "Bandit Queen",
    "originalTitle": "Bandit Queen",
    "year": 1994,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Indian-British co-production, location shooting and censorship controversy make South Asian production, rights and international circulation structurally visible."
  },
  {
    "title": "Hoop Dreams",
    "originalTitle": "Hoop Dreams",
    "year": 1994,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Long-form independent documentary production and festival/theatrical breakout reveal new nonfiction production and distribution pathways."
  },
  {
    "title": "Toy Story",
    "originalTitle": "Toy Story",
    "year": 1995,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Pixar/Disney's first fully computer-animated feature makes software, rendering labor and a new feature-animation pipeline indispensable."
  },
  {
    "title": "Safe",
    "originalTitle": "Safe",
    "year": 1995,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "American independent modernism and New Queer Cinema demonstrate specialty production without reducing the movement to overtly identity-centered narrative."
  },
  {
    "title": "La Haine",
    "originalTitle": "La Haine",
    "year": 1995,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "French banlieue location production, black-and-white image strategy and youth politics anchor a major European urban production model."
  },
  {
    "title": "Underground",
    "originalTitle": "Underground",
    "year": 1995,
    "aliases": [
      "Podzemlje"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P1",
    "chapterFunction": "Post-Yugoslav co-production and political allegory make post-socialist European production and contested national frameworks part of the decade."
  },
  {
    "title": "The White Balloon",
    "originalTitle": "Badkonake sefid",
    "year": 1995,
    "aliases": [
      "Badkonake Sefid"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Iranian child-centered location production and international festival circulation broaden the decade beyond Kiarostami alone."
  },
  {
    "title": "Secrets & Lies",
    "originalTitle": "Secrets & Lies",
    "year": 1996,
    "aliases": [
      "Secrets and Lies"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Performance-developed British social realism and international financing/distribution offer a distinct production method inside 1990s prestige cinema."
  },
  {
    "title": "The Watermelon Woman",
    "originalTitle": "The Watermelon Woman",
    "year": 1996,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Black lesbian independent authorship, fabricated archive and low-budget production make counter-archive practice and New Queer Cinema inseparable."
  },
  {
    "title": "Fargo",
    "originalTitle": "Fargo",
    "year": 1996,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Regional American production and specialty-studio distribution provide a useful mature-indie comparison without standing in for the whole sector."
  },
  {
    "title": "Trainspotting",
    "originalTitle": "Trainspotting",
    "year": 1996,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "British public/private finance, music-rights strategy and youth-market distribution show a different route from microbudget American independence."
  },
  {
    "title": "Fire",
    "originalTitle": "Fire",
    "year": 1996,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Deepa Mehta's Indo-Canadian transnational production and censorship controversy make diasporic finance and South Asian queer representation materially visible."
  },
  {
    "title": "Taste of Cherry",
    "originalTitle": "Ta'm e guilass",
    "year": 1997,
    "aliases": [
      "Taste of Cherry"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Kiarostami's Iranian production and Palme d'Or recognition anchor the decade's globally influential Iranian cinema without treating festivals as production evidence."
  },
  {
    "title": "Happy Together",
    "originalTitle": "Chun gwong cha sit",
    "year": 1997,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Hong Kong-Argentina location production and queer diasporic authorship make transnational mobility and regional industry practices visible."
  },
  {
    "title": "Cure",
    "originalTitle": "Kyua",
    "year": 1997,
    "aliases": [
      "Kyua"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Japanese genre production shows national commercial/auteur practice outside animation and festival prestige."
  },
  {
    "title": "Titanic",
    "originalTitle": "Titanic",
    "year": 1997,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Large-scale studio co-finance, practical builds, digital effects and global distribution provide the blockbuster-scale counterpoint to the decade's independent expansion."
  },
  {
    "title": "Princess Mononoke",
    "originalTitle": "Mononoke-hime",
    "year": 1997,
    "aliases": [
      "Mononoke Hime"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Studio Ghibli's hand-drawn feature production and Japanese distribution scale keep animation history plural beside CGI."
  },
  {
    "title": "Eve's Bayou",
    "originalTitle": "Eve's Bayou",
    "year": 1997,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Black woman-led American independent production and regional Louisiana setting broaden the decade's Black cinema beyond urban male-centered narratives."
  },
  {
    "title": "Festen",
    "originalTitle": "Festen",
    "year": 1998,
    "aliases": [
      "The Celebration"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Dogme 95's first feature and consumer-digital-video capture make low-cost digital production a decisive late-1990s rupture."
  },
  {
    "title": "Central Station",
    "originalTitle": "Central do Brasil",
    "year": 1998,
    "aliases": [
      "Central do Brasil"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Brazilian-French road production and international circulation anchor Latin American co-production and renewed regional art-cinema visibility."
  },
  {
    "title": "The Idiots",
    "originalTitle": "Idioterne",
    "year": 1998,
    "aliases": [
      "The Idiots"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "A second Dogme title tests the manifesto as a production system rather than treating Festen as a one-film anomaly."
  },
  {
    "title": "Ringu",
    "originalTitle": "Ringu",
    "year": 1998,
    "aliases": [
      "Ring"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Japanese horror production and later transnational remake circulation show genre-industrial influence distinct from festival art cinema."
  },
  {
    "title": "The Matrix",
    "originalTitle": "The Matrix",
    "year": 1999,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Australia-based studio production, Hong Kong action choreography, digital compositing and bullet-time workflows crystallize late-1990s transnational VFX labor."
  },
  {
    "title": "Beau Travail",
    "originalTitle": "Beau Travail",
    "year": 1999,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "French-Djibouti location production and choreography-centered authorship provide a transnational African-location case without collapsing it into African national cinema."
  },
  {
    "title": "Rosetta",
    "originalTitle": "Rosetta",
    "year": 1999,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Belgian social-realist production and handheld performance-centered method anchor continental low-budget realism at the decade's end."
  },
  {
    "title": "All About My Mother",
    "originalTitle": "Todo sobre mi madre",
    "year": 1999,
    "aliases": [
      "Todo sobre mi madre"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Spanish-French production and international specialty circulation show mature European auteur co-production and global arthouse distribution."
  },
  {
    "title": "The Blair Witch Project",
    "originalTitle": "The Blair Witch Project",
    "year": 1999,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Microbudget mixed-format production and internet-era marketing show how production method and distribution publicity could be tightly coupled without equating virality with authorship."
  },
  {
    "title": "Boys Don't Cry",
    "originalTitle": "Boys Don't Cry",
    "year": 1999,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Late-decade queer independent production and specialty distribution show New Queer Cinema's transition into a broader niche-market ecology."
  },
  {
    "title": "Shiri",
    "originalTitle": "Swiri",
    "year": 1999,
    "aliases": [
      "Shiri"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "South Korea's large domestic action production and box-office breakthrough make the emerging Korean commercial industry visible before the 2000s festival boom."
  }
];

const historicalObjects = [
  {
    "label": "Specialty distributors, mini-majors and the indie acquisition economy",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Miramax, Fine Line, Sony Pictures Classics and related structures turned festivals and acquisitions into increasingly important routes from independent production to wider theatrical audiences without making every specialty release independent in finance or ownership."
  },
  {
    "label": "New Queer Cinema and identity-driven independent circuits",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Queer filmmakers used grants, microbudgets, video, festivals and specialty distribution to challenge representation and form; the label names a heterogeneous historical formation, not one visual style."
  },
  {
    "label": "New Black cinema and diasporic independent production",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Black filmmakers across the US and transnational circuits expanded feature production, regional location practice, historical memory and alternative distribution while negotiating unequal access to studio and independent finance."
  },
  {
    "label": "CGI, digital compositing and software-based animation",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "The decade moved computer graphics from selected shots and hybrid workflows toward entire feature pipelines, while compositing, scanning, rendering and digital-effects labor became increasingly specialized and vendor-based."
  },
  {
    "label": "Digital sound, post-production and the software turn",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Digital audio workstations, nonlinear editing, digital intermediates' precursors and networked post workflows changed labor and iteration unevenly; no single date or tool marks a universal switch from analogue to digital."
  },
  {
    "label": "Dogme 95, consumer video and lightweight digital production",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Dogme's manifesto and films such as Festen made low-cost digital capture culturally visible, but the movement's rules, actual production practices and later DV aesthetics must remain distinct."
  },
  {
    "label": "Global co-production, public funding and festival circulation",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "European funds, television partners, national institutes, sales agents and festivals increasingly connected productions across borders, but festival recognition is downstream from the title-specific financing and labor that made each film."
  },
  {
    "label": "Post-socialist and post-authoritarian production transitions",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Eastern European, Balkan, Latin American and other industries reorganized after political and economic change; old state institutions, new private finance and international co-production overlapped rather than switching cleanly."
  },
  {
    "label": "East Asian industry divergence and transnational circulation",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Mainland Chinese, Hong Kong, Taiwanese, Japanese and South Korean cinemas followed distinct industrial trajectories involving censorship, commercial studios, independents, festivals, animation and export; they are never one regional movement."
  },
  {
    "label": "Iranian cinema and constrained-production innovation",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Iranian filmmakers worked through state institutions, censorship, child performance, location realism and festival circulation in ways that require title-specific production evidence rather than a generic minimalist national style."
  },
  {
    "label": "African and diasporic production networks",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "African filmmakers and diasporic collaborators used national institutions, independent finance, European co-production and festival networks under unequal conditions; African locations or subjects do not by themselves make a film African production."
  },
  {
    "label": "Global blockbuster scale, franchising and effects infrastructure",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Large studio productions expanded global release coordination, effects-vendor networks, licensed music, ancillary markets and franchise planning, forming one axis of 1990s cinema rather than the decade's default model."
  }
];

const researchSources = [
  {
    "title": "New Queer Cinema",
    "publisher": "BFI / Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/new-queer-cinema",
    "supports": [
      "new_queer_cinema",
      "1992_watershed",
      "festival_independent_circuit"
    ]
  },
  {
    "title": "Queer and present danger: after New Queer Cinema",
    "publisher": "BFI / Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/queer-present-danger-after-new-queer-cinema",
    "supports": [
      "specialty_distribution",
      "new_queer_cinema",
      "late_1990s_niche_market"
    ]
  },
  {
    "title": "10 great early digital films",
    "publisher": "BFI",
    "url": "https://www.bfi.org.uk/lists/10-great-early-digital-films",
    "supports": [
      "dogme95",
      "festen",
      "consumer_digital_video"
    ]
  },
  {
    "title": "Where to begin with Pixar",
    "publisher": "BFI",
    "url": "https://www.bfi.org.uk/features/where-begin-pixar",
    "supports": [
      "toy_story",
      "fully_computer_animated_feature",
      "pixar_pipeline"
    ]
  },
  {
    "title": "The Matrix: how the Wachowskis changed sci-fi",
    "publisher": "BFI",
    "url": "https://www.bfi.org.uk/features/matrix-wachowskis-keanu-reeves",
    "supports": [
      "matrix",
      "bullet_time",
      "hong_kong_action_influence",
      "digital_effects"
    ]
  },
  {
    "title": "Taste of Cherry",
    "publisher": "BFI",
    "url": "https://www.bfi.org.uk/film/bee435cd-f132-54a7-8180-8118f64536f2/taste-of-cherry",
    "supports": [
      "iranian_cinema",
      "kiarostami",
      "festival_circulation"
    ]
  },
  {
    "title": "Where to begin with New Queer Cinema",
    "publisher": "BFI",
    "url": "https://www.bfi.org.uk/features/where-begin-with-new-queer-cinema",
    "supports": [
      "movement_plurality",
      "paris_is_burning",
      "independent_production"
    ]
  },
  {
    "title": "The story of Disney in 11 films – a milestone per decade",
    "publisher": "BFI",
    "url": "https://www.bfi.org.uk/lists/story-disney-11-films-milestone-decade",
    "supports": [
      "toy_story",
      "pixar_disney",
      "computer_animation"
    ]
  }
];

function normalize(value) {
  return String(value ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();
}
function readText(filePath) { return readFileSync(filePath, "utf8"); }
function parseQuotedStrings(value) {
  const out = [];
  const pattern = /"((?:\\.|[^"\\])*)"/g;
  for (const match of value.matchAll(pattern)) out.push(JSON.parse(`"${match[1]}"`));
  return out;
}
function findMatchingBracket(source, startIndex, openCharacter, closeCharacter) {
  let depth = 0, quote = null, escaped = false;
  for (let i = startIndex; i < source.length; i += 1) {
    const c = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (c === "\\") escaped = true;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") { quote = c; continue; }
    if (c === openCharacter) depth += 1;
    if (c === closeCharacter && --depth === 0) return i;
  }
  throw new Error(`Unclosed ${openCharacter} beginning at ${startIndex}`);
}
function extractTopLevelObjects(arraySource) {
  const objects = [];
  let i = 0;
  while (i < arraySource.length) {
    if (arraySource[i] !== "{") { i += 1; continue; }
    const end = findMatchingBracket(arraySource, i, "{", "}");
    objects.push(arraySource.slice(i, end + 1));
    i = end + 1;
  }
  return objects;
}
function stringField(source, field, required = true) {
  const match = source.match(new RegExp(`\\b${field}\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`));
  if (!match) {
    if (!required) return undefined;
    throw new Error(`Missing ${field}: ${source.slice(0, 160)}`);
  }
  return JSON.parse(`"${match[1]}"`);
}
function numberField(source, field) {
  const match = source.match(new RegExp(`\\b${field}\\s*:\\s*(\\d+)`));
  if (!match) throw new Error(`Missing ${field}: ${source.slice(0, 160)}`);
  return Number(match[1]);
}
function stringArrayField(source, field) {
  const match = source.match(new RegExp(`\\b${field}\\s*:\\s*\\[([^\\]]*)\\]`));
  return match ? parseQuotedStrings(match[1]) : [];
}
function parseExpansion(fileName) {
  const source = readText(path.join(coreDirectory, fileName));
  const declaration = source.match(/export const\s+\w+Definitions\s*=\s*\[/);
  if (!declaration || declaration.index === undefined) throw new Error(`Could not locate definitions array in ${fileName}`);
  const start = source.indexOf("[", declaration.index);
  const end = findMatchingBracket(source, start, "[", "]");
  return extractTopLevelObjects(source.slice(start + 1, end)).map((objectSource) => ({
    id: stringField(objectSource, "id"),
    title: stringField(objectSource, "title"),
    originalTitle: stringField(objectSource, "originalTitle", false) ?? stringField(objectSource, "title"),
    aliases: stringArrayField(objectSource, "aliases"),
    year: numberField(objectSource, "year"),
    origin: fileName,
  }));
}
function scenarioTitles(item) { return [item.title, item.originalTitle].filter(Boolean).map(normalize); }
function matchesDefinition(scenario, definition) {
  if (scenario.id === definition.id) return true;
  if (scenario.year !== definition.year) return false;
  const accepted = new Set([definition.title, definition.originalTitle, ...definition.aliases].filter(Boolean).map(normalize));
  return scenarioTitles(scenario).some((title) => accepted.has(title));
}
function buildAtlas() {
  const seed = JSON.parse(readText(seedPath));
  const scenarios = seed.scenarios.map((s) => ({
    id: s.id,
    title: s.film.title,
    originalTitle: s.film.original_title,
    year: s.film.year,
    origin: "film_scenarios_seed.json",
  }));
  const expansionStats = [];
  for (const fileName of expansionFiles) {
    let appended = 0, matchedExisting = 0;
    const definitions = parseExpansion(fileName);
    for (const definition of definitions) {
      if (scenarios.some((scenario) => matchesDefinition(scenario, definition))) { matchedExisting += 1; continue; }
      scenarios.push(definition);
      appended += 1;
    }
    expansionStats.push({ fileName, definitions: definitions.length, appended, matchedExisting });
  }
  return { scenarios, expansionStats };
}
function buildVerifiedScenarioIds() {
  const ids = new Set();
  for (const fileName of readdirSync(dataDirectory)) {
    if (!fileName.startsWith("scenarioProductionVerification") || !fileName.endsWith(".ts")) continue;
    const source = readText(path.join(dataDirectory, fileName));
    for (const match of source.matchAll(/scenarioId\s*:\s*"([^"]+)"/g)) ids.add(match[1]);
  }
  return ids;
}
function matchesCandidate(scenario, candidate) {
  if (scenario.year !== candidate.year) return false;
  const accepted = [candidate.title, candidate.originalTitle, ...(candidate.aliases ?? [])].map(normalize);
  return scenarioTitles(scenario).some((title) => title && accepted.includes(title));
}

const atlas = buildAtlas();
if (atlas.scenarios.length !== EXPECTED_ATLAS_COUNT) throw new Error(`Chapter 17 audit expected ${EXPECTED_ATLAS_COUNT} Atlas scenarios, found ${atlas.scenarios.length}`);
const verifiedIds = buildVerifiedScenarioIds();
const resolvedCandidates = candidates.map((candidate) => {
  const matches = atlas.scenarios.filter((scenario) => matchesCandidate(scenario, candidate));
  if (matches.length > 1) throw new Error(`${candidate.title}: expected at most one Atlas match, found ${matches.length}`);
  const match = matches[0] ?? null;
  const productionVerified = Boolean(match && verifiedIds.has(match.id));
  return {
    ...candidate,
    decision: match && productionVerified ? "USE_EXISTING" : candidate.decisionIfMissing,
    scenarioId: match?.id ?? null,
    matches: matches.length,
    productionVerified,
    origin: match?.origin ?? null,
  };
});
const byDecision = { USE_EXISTING: [], P0: [], P1: [], P2: [], EXISTING_REQUIRED: [] };
for (const candidate of resolvedCandidates) byDecision[candidate.decision].push(candidate.title);

const boundaryNotes = [
  "Chapter 17 is organized as 1990–1999 and begins where Chapter 16 closes: specialty distribution, New Black and queer independent cinemas, geopolitical transition and new East Asian visibility are already underway rather than appearing from nowhere in 1990.",
  "Digital is not one switch. CGI, compositing, nonlinear editing, digital sound, computer animation, consumer video and later digital cinema developed at different speeds in different production sectors.",
  "Festival circulation and specialty acquisition are distribution/reception layers. They can reshape finance and access, but a prize or acquisition never substitutes for original production evidence.",
  "The chapter ends in 1999 with digital-effects action, consumer-video production, South Korean commercial expansion and mature global specialty circuits handing into the 2000s convergence of digital capture, global franchises and networked post-production.",
];
const safeguards = [
  "Independent is never inferred from budget, style, festival selection or director reputation alone; financing, ownership, production entities and distribution remain title-specific.",
  "New Queer Cinema is a historically useful critical formation, not a single aesthetic, nationality, identity or production template.",
  "Black cinema is not one US movement; African American, African, Caribbean and diasporic production histories keep distinct institutions, locations and finance.",
  "Mainland China, Hong Kong, Taiwan, Japan and South Korea are never collapsed into one East Asian new wave or export story.",
  "African locations and African subjects do not automatically establish African production ownership or authorship.",
  "Digital capture, CGI, digital compositing, digital sound and software animation are separate technical systems and require title-specific vendor and labor evidence.",
  "Dogme rules are not treated as proof of what any individual production actually did; film-specific sources outrank manifesto claims.",
  "A festival prize, restoration, later home-media master or retrospective reputation never overwrites original capture, post-production, release or labor evidence.",
  "No generic 1990s visual look is allowed. Stocks, lenses, filters, transfer paths, digital cameras, frame rates, color pipelines and VFX techniques require title-specific sources.",
  "Stunts, hazardous effects, child performance, intimate performance and extreme bodily practices remain historical evidence, not contemporary production instructions.",
];

const report = {
  schemaVersion: "1.0",
  auditDate: "2026-08-21",
  chapter: {
    number: 17,
    id: "specialty-digital-global-production",
    title: "Specialty cinema, digital transition and globalized production",
    period: "1990–1999",
    scope: "Cinema across the 1990s as specialty distribution and independent circuits expand while digital image/sound/post tools, software animation, global co-production, post-socialist transitions and distinct regional industries reorganize production and circulation.",
    thesis: "The 1990s are not a simple march from film to digital or from Hollywood to indie. Specialty acquisition, queer and Black independent production, public and transnational finance, post-socialist restructuring, regionally distinct Asian industries, Iranian and African production networks, CGI and software animation, consumer video and global blockbuster infrastructure developed simultaneously and unevenly.",
  },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.scenarios.length, expansionOrder: atlas.expansionStats },
  verificationIndex: { literalVerifiedScenarioIds: verifiedIds.size },
  candidates: resolvedCandidates,
  byDecision,
  recommendedNewProductionCases: resolvedCandidates.filter((item) => item.decision === "P0" || item.decision === "P1").map((item) => item.title),
  historicalObjects,
  researchSources,
  boundaryNotes,
  safeguards,
};

const outputPath = process.argv.find((arg) => arg.startsWith("--write="))?.slice("--write=".length);
if (outputPath) {
  const absolute = path.resolve(root, outputPath);
  mkdirSync(path.dirname(absolute), { recursive: true });
  writeFileSync(absolute, `${JSON.stringify(report, null, 2)}\n`);
}
console.log(JSON.stringify(report, null, 2));
