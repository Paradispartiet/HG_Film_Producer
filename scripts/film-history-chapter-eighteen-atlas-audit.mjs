import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const dataDirectory = path.join(root, "src", "ui", "data");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const EXPECTED_ATLAS_COUNT = 527;

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
    "title": "The Gleaners and I",
    "originalTitle": "Les glaneurs et la glaneuse",
    "year": 2000,
    "aliases": [
      "Les Glaneurs et la Glaneuse"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Handheld DV essay filmmaking makes small-camera authorship, self-reflexive documentary practice and low-cost digital mobility visible at the start of the decade."
  },
  {
    "title": "Platform",
    "originalTitle": "Zhantai",
    "year": 2000,
    "aliases": [
      "Zhantai"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Jia Zhangke's provincial long-duration production anchors Chinese independent cinema, social transition and location-based digital-era realism."
  },
  {
    "title": "Dancer in the Dark",
    "originalTitle": "Dancer in the Dark",
    "year": 2000,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Large-scale multi-camera digital musical production makes the split between handheld realism and digitally coordinated performance capture visible."
  },
  {
    "title": "In the Mood for Love",
    "originalTitle": "Fa yeung nin wa",
    "year": 2000,
    "aliases": [
      "Huayang nianhua"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Hong Kong transnational production, iterative location work and post-production structure anchor a major regional auteur system crossing the millennium."
  },
  {
    "title": "Yi Yi",
    "originalTitle": "Yi Yi",
    "year": 2000,
    "aliases": [
      "A One and a Two"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Taiwanese urban family production and long-form ensemble staging preserve Taiwan New Cinema's industrial and formal afterlife in the new century."
  },
  {
    "title": "Crouching Tiger, Hidden Dragon",
    "originalTitle": "Wo hu cang long",
    "year": 2000,
    "aliases": [
      "Crouching Tiger Hidden Dragon"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "A Chinese-language transnational co-production and global release makes action choreography, regional labor and international financing/distribution structurally visible."
  },
  {
    "title": "Atanarjuat: The Fast Runner",
    "originalTitle": "Atanarjuat",
    "year": 2001,
    "aliases": [
      "Atanarjuat",
      "The Fast Runner"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Inuit-led digital production and Inuktitut-language feature filmmaking make Indigenous authorship, remote location production and community knowledge central."
  },
  {
    "title": "Spirited Away",
    "originalTitle": "Sen to Chihiro no kamikakushi",
    "year": 2001,
    "aliases": [
      "Sen to Chihiro no Kamikakushi"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Studio Ghibli provides a major hand-drawn animation countercurrent inside an era often reduced to CGI and digital capture."
  },
  {
    "title": "The Son's Room",
    "originalTitle": "La stanza del figlio",
    "year": 2001,
    "aliases": [
      "The Sons Room"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Italian intimate auteur production provides a low-effects, performance-centered European comparison inside the digital-convergence period."
  },
  {
    "title": "Millennium Mambo",
    "originalTitle": "Qian xi man po",
    "year": 2001,
    "aliases": [
      "Qianxi manbo"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Taiwanese urban production and electronic-night imagery make changing regional youth culture and transnational art-cinema circulation visible."
  },
  {
    "title": "Russian Ark",
    "originalTitle": "Russkiy kovcheg",
    "year": 2002,
    "aliases": [
      "Russkii kovcheg"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "A feature-length uncompressed digital take makes capture duration, data recording and museum-scale choreography a production-historical turning point."
  },
  {
    "title": "City of God",
    "originalTitle": "Cidade de Deus",
    "year": 2002,
    "aliases": [
      "Cidade de Deus"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Brazilian location production, nonprofessional/community casting and international post/distribution make regional production scale and representation central."
  },
  {
    "title": "Star Wars: Episode II - Attack of the Clones",
    "originalTitle": "Star Wars: Episode II - Attack of the Clones",
    "year": 2002,
    "aliases": [
      "Attack of the Clones",
      "Star Wars Episode II Attack of the Clones"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Big-budget digital acquisition and effects-heavy studio production make end-to-end digital ambitions visible at blockbuster scale."
  },
  {
    "title": "28 Days Later",
    "originalTitle": "28 Days Later...",
    "year": 2002,
    "aliases": [
      "28 Days Later"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "MiniDV-heavy British genre production shows how low-resolution digital capture could be used deliberately inside a studio-distributed feature."
  },
  {
    "title": "Unknown Pleasures",
    "originalTitle": "Ren xiao yao",
    "year": 2002,
    "aliases": [
      "Ren Xiao Yao"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Small-camera digital production in China makes low-cost mobility, public-space access and independent production constraints explicit."
  },
  {
    "title": "Oldboy",
    "originalTitle": "Oldeuboi",
    "year": 2003,
    "aliases": [
      "Oldboy"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "South Korean commercial-auteur production and transnational circulation anchor the industry's expanding international visibility without reducing Korean cinema to one genre."
  },
  {
    "title": "Lost in Translation",
    "originalTitle": "Lost in Translation",
    "year": 2003,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Compact international location production and specialty distribution provide a low-scale counterpoint to effects-led globalization."
  },
  {
    "title": "The Return",
    "originalTitle": "Vozvrashchenie",
    "year": 2003,
    "aliases": [
      "Vozvraschenie"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Post-Soviet Russian production and festival circulation make regional financing and landscape-centered production visible."
  },
  {
    "title": "Collateral",
    "originalTitle": "Collateral",
    "year": 2004,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Mixed HD and 35mm night production makes digital sensitivity, early camera limitations and hybrid finishing concrete rather than abstract."
  },
  {
    "title": "Tropical Malady",
    "originalTitle": "Sud pralad",
    "year": 2004,
    "aliases": [
      "Sud Pralad"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Thai independent production and bifurcated narrative make regional low-budget art cinema and festival circulation visible outside Euro-American digital histories."
  },
  {
    "title": "Head-On",
    "originalTitle": "Gegen die Wand",
    "year": 2004,
    "aliases": [
      "Gegen Die Wand"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "German-Turkish transnational production makes migration, music and cross-border production infrastructure visible."
  },
  {
    "title": "Vera Drake",
    "originalTitle": "Vera Drake",
    "year": 2004,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "British performance-developed historical production provides a craft-centered comparison where digital convergence is not the determining production fact."
  },
  {
    "title": "Brokeback Mountain",
    "originalTitle": "Brokeback Mountain",
    "year": 2005,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "American location production, independent-origin financing and specialty-studio distribution make prestige transnational circulation visible."
  },
  {
    "title": "Caché",
    "originalTitle": "Caché",
    "year": 2005,
    "aliases": [
      "Cache",
      "Hidden"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "European co-production and digital-video ambiguity make surveillance aesthetics, authorship and transnational financing a useful comparison."
  },
  {
    "title": "The New World",
    "originalTitle": "The New World",
    "year": 2005,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Large-scale photochemical location production provides a deliberate counterexample to claims of a universal digital-capture transition."
  },
  {
    "title": "Inland Empire",
    "originalTitle": "Inland Empire",
    "year": 2006,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Consumer/professional DV used as a primary expressive medium makes digital texture, small crews and iterative production central."
  },
  {
    "title": "Still Life",
    "originalTitle": "Sanxia haoren",
    "year": 2006,
    "aliases": [
      "Sanxia Haoren"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Chinese digital location filmmaking records disappearing built environments and labor through a flexible small-camera production model."
  },
  {
    "title": "Children of Men",
    "originalTitle": "Children of Men",
    "year": 2006,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Complex moving-shot staging, practical environments and VFX integration show how digital post can support rather than replace physical production."
  },
  {
    "title": "Pan's Labyrinth",
    "originalTitle": "El laberinto del fauno",
    "year": 2006,
    "aliases": [
      "Pans Labyrinth"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Spanish-Mexican transnational production combines creature work, practical design and digital effects inside a cross-border financing model."
  },
  {
    "title": "Apocalypto",
    "originalTitle": "Apocalypto",
    "year": 2006,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Early Genesis digital capture in demanding location production makes mainstream digital-camera adoption visible without implying a universal switch."
  },
  {
    "title": "Zodiac",
    "originalTitle": "Zodiac",
    "year": 2007,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Uncompressed Viper-to-drive acquisition and tapeless workflow make digital negative, on-set monitoring and data post-production concrete."
  },
  {
    "title": "Secret Sunshine",
    "originalTitle": "Miryang",
    "year": 2007,
    "aliases": [
      "Miryang"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "South Korean performance-centered production provides an auteur/social-realist countercurrent to technology-led narratives of the decade."
  },
  {
    "title": "No Country for Old Men",
    "originalTitle": "No Country for Old Men",
    "year": 2007,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Photochemical location production and restrained digital post provide a mature studio-independent boundary case."
  },
  {
    "title": "There Will Be Blood",
    "originalTitle": "There Will Be Blood",
    "year": 2007,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Large-format and 35mm-origin period production makes photochemical persistence and complex location craft explicit inside the digital era."
  },
  {
    "title": "4 Months, 3 Weeks and 2 Days",
    "originalTitle": "4 luni, 3 saptamâni si 2 zile",
    "year": 2007,
    "aliases": [
      "4 Months 3 Weeks and 2 Days",
      "4 luni, 3 saptamani si 2 zile"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Romanian New Wave production makes low-budget regional realism, constrained locations and post-socialist film infrastructure visible."
  },
  {
    "title": "Slumdog Millionaire",
    "originalTitle": "Slumdog Millionaire",
    "year": 2008,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Mixed digital acquisition, mobile camera systems and transnational India-UK production make digital capture and global co-production intersect visibly."
  },
  {
    "title": "Waltz with Bashir",
    "originalTitle": "Vals im Bashir",
    "year": 2008,
    "aliases": [
      "Waltz with Bashir"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Animated documentary production makes testimony, recorded interviews, design and animation pipelines interact as separate evidentiary and craft systems."
  },
  {
    "title": "Wendy and Lucy",
    "originalTitle": "Wendy and Lucy",
    "year": 2008,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "American regional microbudget realism anchors a low-scale independent production ecology that coexists with digital blockbuster expansion."
  },
  {
    "title": "The Wrestler",
    "originalTitle": "The Wrestler",
    "year": 2008,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Handheld Super 16 performance-centered production preserves photochemical low-budget practice inside the digital transition."
  },
  {
    "title": "Hunger",
    "originalTitle": "Hunger",
    "year": 2008,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "British-Irish art-cinema production and durational staging make formal rigor and public funding/co-production visible."
  },
  {
    "title": "Avatar",
    "originalTitle": "Avatar",
    "year": 2009,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Performance capture, virtual camera work, SimulCam, extensive CG and live-action production make virtual production a distinct system rather than generic VFX."
  },
  {
    "title": "A Prophet",
    "originalTitle": "Un prophète",
    "year": 2009,
    "aliases": [
      "Un prophete"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "French prison production and European co-production finance provide a regional industry counterpoint to Hollywood technology narratives."
  },
  {
    "title": "The White Ribbon",
    "originalTitle": "Das weiße Band",
    "year": 2009,
    "aliases": [
      "Das weisse Band"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "European photochemical-origin monochrome design and digital finishing make capture and final image treatment distinct production layers."
  },
  {
    "title": "The Milk of Sorrow",
    "originalTitle": "La teta asustada",
    "year": 2009,
    "aliases": [
      "La Teta Asustada"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Peruvian-European co-production and regional performance/ritual practice extend the chapter beyond high-capital digital infrastructures."
  },
  {
    "title": "The Social Network",
    "originalTitle": "The Social Network",
    "year": 2010,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "RED digital acquisition and data-centered post make high-end digital capture normalizing within major American production visible."
  },
  {
    "title": "Poetry",
    "originalTitle": "Shi",
    "year": 2010,
    "aliases": [
      "Shi"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "South Korean location realism and performance-centered authorship provide a low-effects production counterpoint."
  },
  {
    "title": "Somewhere",
    "originalTitle": "Somewhere",
    "year": 2010,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Minimalist American location production provides a deliberately low-tech comparison within a highly digitized industrial period."
  },
  {
    "title": "Uncle Boonmee Who Can Recall His Past Lives",
    "originalTitle": "Lung Bunmi Raluek Chat",
    "year": 2010,
    "aliases": [
      "Uncle Boonmee Who Can Recall His Past Lives"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Thai-European co-production, regional locations and practical/spiritual effects make festival circulation and transnational finance visible without becoming production proof."
  },
  {
    "title": "A Separation",
    "originalTitle": "Jodaeiye Nader az Simin",
    "year": 2011,
    "aliases": [
      "Jodaeiye Nader az Simin",
      "A Separation"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Iranian production under national regulation and global festival/distribution circulation makes local institutions and international reception distinct."
  },
  {
    "title": "The Tree of Life",
    "originalTitle": "The Tree of Life",
    "year": 2011,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Photochemical capture, large-format elements and effects-heavy cosmological sequences make hybrid production pipelines explicit."
  },
  {
    "title": "Pina",
    "originalTitle": "Pina",
    "year": 2011,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Native stereoscopic dance documentary production makes 3D capture and embodied performance a distinct exhibition/camera system."
  },
  {
    "title": "Amour",
    "originalTitle": "Amour",
    "year": 2012,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "European co-production and chamber staging provide a mature public-funding/transnational model not reducible to technology change."
  },
  {
    "title": "Pietà",
    "originalTitle": "Pieta",
    "year": 2012,
    "aliases": [
      "Pieta"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "South Korean low-scale auteur production anchors industrial diversity within the 2010s."
  },
  {
    "title": "Holy Motors",
    "originalTitle": "Holy Motors",
    "year": 2012,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Digital production and protean performance make camera mobility, changing image regimes and cinephilic production memory visible."
  },
  {
    "title": "Gravity",
    "originalTitle": "Gravity",
    "year": 2013,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Previsualization, LED light-box systems, virtual cinematography and extensive CG environments make post-led production design and performance integration central."
  },
  {
    "title": "Ida",
    "originalTitle": "Ida",
    "year": 2013,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Digital monochrome and 1.37:1 composition show how digital capture can be shaped toward historically inflected formal restraint."
  },
  {
    "title": "Blue Is the Warmest Colour",
    "originalTitle": "La Vie d'Adèle – Chapitres 1 & 2",
    "year": 2013,
    "aliases": [
      "Blue Is the Warmest Color",
      "La Vie d'Adele - Chapitres 1 & 2"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Performance-intensive French production and long-form editing provide an authorship/labor comparison beyond technology-led history."
  },
  {
    "title": "Birdman",
    "originalTitle": "Birdman or (The Unexpected Virtue of Ignorance)",
    "year": 2014,
    "aliases": [
      "Birdman"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Digital acquisition, rehearsed camera choreography and hidden transitions make the long-take illusion a post-and-production coordination problem."
  },
  {
    "title": "Boyhood",
    "originalTitle": "Boyhood",
    "year": 2014,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Twelve-year recurring production makes continuity of cast, format and production planning across industrial change a unique historical case."
  },
  {
    "title": "Winter Sleep",
    "originalTitle": "Kis Uykusu",
    "year": 2014,
    "aliases": [
      "Kış Uykusu",
      "Kis Uykusu"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Turkish-European co-production and chamber/landscape staging keep festival art cinema's production ecology visible."
  },
  {
    "title": "Black Coal, Thin Ice",
    "originalTitle": "Bai ri yan huo",
    "year": 2014,
    "aliases": [
      "Black Coal Thin Ice"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Chinese commercial-auteur production and international festival circulation keep Mainland production distinct from other East Asian systems."
  },
  {
    "title": "Tangerine",
    "originalTitle": "Tangerine",
    "year": 2015,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Smartphone acquisition with cinema-oriented accessories makes ultra-light digital production and post finishing a major boundary case."
  },
  {
    "title": "Mad Max: Fury Road",
    "originalTitle": "Mad Max: Fury Road",
    "year": 2015,
    "aliases": [
      "Mad Max Fury Road"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Large-scale location stunts, practical vehicles and extensive digital post show physical production and VFX as complementary systems."
  },
  {
    "title": "Son of Saul",
    "originalTitle": "Saul fia",
    "year": 2015,
    "aliases": [
      "Saul Fia"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "35mm close-subjective historical production provides an explicit photochemical countercurrent and ethics-of-representation case."
  },
  {
    "title": "The Revenant",
    "originalTitle": "The Revenant",
    "year": 2015,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Large-format digital capture, natural-light strategy and extreme location logistics make high-end digital acquisition inseparable from physical production constraints."
  },
  {
    "title": "From Afar",
    "originalTitle": "Desde allá",
    "year": 2015,
    "aliases": [
      "Desde alla"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Venezuelan-Mexican production and festival circulation make Latin American transnational art cinema visible without treating festival success as production evidence."
  },
  {
    "title": "Moonlight",
    "originalTitle": "Moonlight",
    "year": 2016,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "American independent financing, digital capture and expressive color finishing connect low-budget production with specialty distribution and awards-era circulation."
  },
  {
    "title": "Toni Erdmann",
    "originalTitle": "Toni Erdmann",
    "year": 2016,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "German-Austrian-Romanian co-production demonstrates European cross-border production without technology being the defining axis."
  },
  {
    "title": "I Am Not Your Negro",
    "originalTitle": "I Am Not Your Negro",
    "year": 2016,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Archive-driven documentary production makes rights, archival provenance, narration and montage distinct production systems."
  },
  {
    "title": "Dunkirk",
    "originalTitle": "Dunkirk",
    "year": 2017,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "65mm and IMAX photochemical production at blockbuster scale makes large-format film persistence a direct counterexample to digital inevitability."
  },
  {
    "title": "Get Out",
    "originalTitle": "Get Out",
    "year": 2017,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Low-budget studio-genre production and culturally specific authorship show how specialty/genre pipelines could scale without blockbuster resources."
  },
  {
    "title": "Roma",
    "originalTitle": "Roma",
    "year": 2018,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Large-format digital monochrome capture, complex sound post and streaming-backed distribution make production, post and platform circulation separable layers."
  },
  {
    "title": "Burning",
    "originalTitle": "Beoning",
    "year": 2018,
    "aliases": [
      "Beoning"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "South Korean literary adaptation and international co-production/circulation continue regional auteur production inside platform-era globalization."
  },
  {
    "title": "Spider-Man: Into the Spider-Verse",
    "originalTitle": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "aliases": [
      "Spider Man Into the Spider Verse"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Stylized computer animation makes rendering, linework, frame cadence and comic-derived design part of a deliberately non-photoreal feature pipeline."
  },
  {
    "title": "An Elephant Sitting Still",
    "originalTitle": "Da xiang xi di er zuo",
    "year": 2018,
    "aliases": [
      "Da xiang xi di er zuo"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Chinese independent durational production makes long-take digital realism and constrained production scale visible."
  },
  {
    "title": "Cold War",
    "originalTitle": "Zimna wojna",
    "year": 2018,
    "aliases": [
      "Zimna Wojna"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "European digital monochrome and Academy-ratio period production provide a formal co-production counterpoint."
  },
  {
    "title": "Parasite",
    "originalTitle": "Gisaengchung",
    "year": 2019,
    "aliases": [
      "Gisaengchung"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "South Korean studio-auteur production, purpose-built sets and globally coordinated distribution make industrial expansion and transnational circulation concrete."
  },
  {
    "title": "The Irishman",
    "originalTitle": "The Irishman",
    "year": 2019,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Digital de-aging, camera/data capture and streaming-backed financing/distribution make performance-preserving VFX and platform production intersect."
  },
  {
    "title": "1917",
    "originalTitle": "1917",
    "year": 2019,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Digital large-format capture, extensive rehearsal and hidden transitions make apparent continuity a coordinated production/post system."
  },
  {
    "title": "Atlantics",
    "originalTitle": "Atlantique",
    "year": 2019,
    "aliases": [
      "Atlantique"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Senegalese-French production and supernatural social realism make African authorship and European co-production infrastructure visible together."
  },
  {
    "title": "Synonyms",
    "originalTitle": "Synonymes",
    "year": 2019,
    "aliases": [
      "Synonymes"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Israeli-French transnational production makes language, migration and European co-production a late-decade art-cinema comparison."
  },
  {
    "title": "Portrait of a Lady on Fire",
    "originalTitle": "Portrait de la jeune fille en feu",
    "year": 2019,
    "aliases": [
      "Portrait de la jeune fille en feu"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "French historical production and digital cinematography make performance, naturalistic lighting design and contemporary production ethics central."
  }
];

const historicalObjects = [
  {
    "label": "Digital intermediate, color grading and data-centric post-production",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Scanning, conforming, grading, visual-effects integration and film-out moved increasingly into digital pipelines, but a digital intermediate does not imply digital acquisition and adoption remained uneven."
  },
  {
    "label": "Digital acquisition from DV and CineAlta to Viper, Genesis, RED and Alexa",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Small DV cameras, early HD systems, uncompressed data cameras and later large-sensor cinema cameras enabled different production practices; they are separate technical generations rather than one device-neutral digital format."
  },
  {
    "label": "DCI standardization and digital theatrical exhibition",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Digital Cinema Initiatives standardized interoperable mastering, distribution and projection requirements during the 2000s, changing exhibition infrastructure independently from how a film was photographed."
  },
  {
    "label": "Performance capture, previs, virtual cameras and post-led production design",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Effects-heavy productions increasingly used performance capture, previs, virtual sets, virtual cameras and simulation as production-planning systems, but these practices remained distinct from ordinary compositing and from live-action cinematography."
  },
  {
    "label": "Digital feature animation and deliberately non-photoreal pipelines",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Computer animation expanded through specialized modeling, rigging, lighting, rendering and compositing labor while hand-drawn and hybrid animation persisted; animation history is not a linear replacement story."
  },
  {
    "label": "Lightweight DV, HD, DSLR and smartphone production",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Cheaper and smaller cameras reduced some barriers to location access and crew scale, enabling documentary, independent and regional production models that differed materially from high-end digital cinema."
  },
  {
    "label": "Transnational co-production, public funds, sales agents and festival circulation",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Cross-border co-production and public funding remained structural to many films, especially in Europe and international art cinema; finance, production ownership, sales and festival recognition must remain separate evidence layers."
  },
  {
    "label": "Distinct East Asian industrial expansions and export systems",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Mainland Chinese, Hong Kong, Taiwanese, Japanese and South Korean industries followed distinct combinations of state regulation, commercial scale, independent production, animation, festivals and global distribution."
  },
  {
    "label": "African, Latin American, Middle Eastern and diasporic production networks",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Regional and diasporic filmmakers used national institutions, public funds, private finance, digital tools and transnational partners under unequal conditions; location and subject matter never substitute for production ownership evidence."
  },
  {
    "label": "Hybrid documentary, archive, animation and staged nonfiction",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Documentary production increasingly combined digital observation, archival material, animation, reenactment and essay structures, requiring careful separation of source evidence from formal reconstruction."
  },
  {
    "label": "Platform and streaming distribution emerging beside theatrical systems",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Online and streaming distribution became increasingly important in the 2010s, but platform financing, original production ownership, festival premieres and theatrical release windows are separate institutional facts."
  },
  {
    "label": "Photochemical persistence, 65mm and IMAX countercurrents",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "35mm, Super 16, 65mm and IMAX production continued throughout the period for aesthetic, archival and technical reasons; digital dominance never means film disappeared."
  },
  {
    "label": "Stereoscopic 3D and premium-format exhibition",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Native or converted stereoscopic 3D and premium formats changed selected capture, post and exhibition workflows, but 3D is neither synonymous with digital cinema nor a universal production norm."
  }
];

const researchSources = [
  {
    "title": "Attack of the zeros and ones: the early years of digital cinema, as told by David Lynch, Miranda July, Michael Mann and more",
    "publisher": "BFI / Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/attack-zeros-ones-early-years-digital-cinema-told-david-lynch-miranda-july-michael-mann-more",
    "supports": [
      "early_digital_capture",
      "dv",
      "cinealta",
      "russian_ark",
      "inland_empire",
      "industry_transition"
    ]
  },
  {
    "title": "10 great early digital films",
    "publisher": "BFI",
    "url": "https://www.bfi.org.uk/lists/10-great-early-digital-films",
    "supports": [
      "early_digital_features",
      "russian_ark",
      "dv",
      "slumdog_millionaire"
    ]
  },
  {
    "title": "Digital Cinema Initiatives announces final overall system requirements and specifications for digital cinema",
    "publisher": "Digital Cinema Initiatives",
    "url": "https://www.dcimovies.com/press/",
    "supports": [
      "dci",
      "digital_exhibition",
      "interoperability",
      "distribution"
    ]
  },
  {
    "title": "Digital Cinema System Specification",
    "publisher": "Digital Cinema Initiatives",
    "url": "https://www.dcimovies.com/dci-specification/",
    "supports": [
      "digital_cinema_mastering",
      "distribution",
      "theatrical_playback",
      "standardization"
    ]
  },
  {
    "title": "Scientific & Technical Awards 2016 | 2017",
    "publisher": "Academy of Motion Picture Arts and Sciences",
    "url": "https://www.oscars.org/sci-tech/ceremonies/2017",
    "supports": [
      "viper",
      "genesis",
      "arri_alexa",
      "red_epic",
      "sony_f65",
      "digital_camera_adoption"
    ]
  },
  {
    "title": "Escaping From Chains: O Brother, Where Art Thou?",
    "publisher": "American Society of Cinematographers",
    "url": "https://theasc.com/article/o-brother-cinematography-deakins/",
    "supports": [
      "digital_intermediate",
      "digital_color_grading",
      "film_origin",
      "film_out"
    ]
  },
  {
    "title": "Hell on Wheels: Collateral",
    "publisher": "American Society of Cinematographers",
    "url": "https://theasc.com/articles/hell-on-wheels-collateral",
    "supports": [
      "collateral",
      "hybrid_hd_35mm",
      "viper",
      "f900",
      "digital_intermediate"
    ]
  },
  {
    "title": "Zodiac: Cold Case File",
    "publisher": "American Society of Cinematographers",
    "url": "https://theasc.com/article/flashback-zodiac/",
    "supports": [
      "zodiac",
      "viper",
      "uncompressed_hd",
      "tapeless_workflow",
      "digital_negative"
    ]
  },
  {
    "title": "Conquering New Worlds: Avatar",
    "publisher": "American Society of Cinematographers",
    "url": "https://theasc.com/article/avatar/",
    "supports": [
      "avatar",
      "performance_capture",
      "virtual_camera",
      "simulcam",
      "virtual_scouting"
    ]
  },
  {
    "title": "Co-production funding history",
    "publisher": "Council of Europe / Eurimages",
    "url": "https://www.coe.int/en/web/eurimages/co-production-funding-history",
    "supports": [
      "international_coproduction",
      "public_funding",
      "european_cinema",
      "2000s_2010s"
    ]
  },
  {
    "title": "About Eurimages - European Cinema Support Fund",
    "publisher": "Council of Europe / Eurimages",
    "url": "https://www.coe.int/en/web/eurimages/about",
    "supports": [
      "public_funding",
      "international_coproduction",
      "features_documentary_animation"
    ]
  },
  {
    "title": "Syndromes of a new century: introducing the best films of the 2000s",
    "publisher": "BFI / Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/syndromes-new-century-introducing-best-films-2000s",
    "supports": [
      "2000s_digital_cinema",
      "russian_ark",
      "kiarostami",
      "jia_zhangke",
      "regional_digital_practice"
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
if (atlas.scenarios.length !== EXPECTED_ATLAS_COUNT) throw new Error(`Chapter 18 audit expected ${EXPECTED_ATLAS_COUNT} Atlas scenarios, found ${atlas.scenarios.length}`);
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
  "Chapter 18 begins in 2000 after Chapter 17's late-1990s convergence of consumer video, software animation, digital compositing and global specialty circulation; none of those systems begin from zero at the millennium.",
  "Digital capture is only one part of the period. Digital intermediate, color grading, VFX, sound, animation and nonlinear editing were already changing production before high-end digital cameras became dominant.",
  "DCI's 2000s standardization changed theatrical mastering, distribution and projection separately from original camera capture, while streaming later added another distribution layer rather than replacing theatrical cinema in one step.",
  "The chapter ends in 2019 with high-end digital capture widespread, platform financing/distribution increasingly consequential, virtual-production techniques expanding and photochemical/large-format production still deliberately active; 2020s pandemic and mature streaming-era production belong to the next chapter."
];
const safeguards = [
  "Digital is never treated as one switch: capture, digital intermediate, editing, sound, VFX, animation, mastering, distribution and exhibition changed on different schedules.",
  "A digital intermediate or digitally graded release never proves that principal photography was digital.",
  "DCI standardization concerns digital cinema mastering, distribution and exhibition; it does not prove any title's camera, lens, recording or on-set workflow.",
  "Performance capture, motion capture, previs, virtual cameras, SimulCam, CGI, compositing and ordinary live-action cinematography remain distinct systems unless title-specific sources connect them.",
  "Small-camera access is not romanticized as automatically safer, cheaper, more ethical or more democratic; permissions, labor, safeguarding, privacy and public safety remain independent requirements.",
  "Festival selection, prizes and sales-agent activity are circulation evidence, not substitutes for financing, production-company, ownership or labor evidence.",
  "Mainland China, Hong Kong, Taiwan, Japan and South Korea are never collapsed into one East Asian digital wave.",
  "African, Latin American, Middle Eastern and diasporic films retain title-specific national, regional and transnational production structures; subject matter and location do not determine production ownership.",
  "Streaming or platform distribution does not by itself establish who financed, produced or controlled a film, and a festival premiere does not make a film platform-produced.",
  "Photochemical capture, Super 16, 35mm, 65mm and IMAX remain valid period practices; digital dominance does not license a claim that film disappeared.",
  "Claims of a technical first, industry first, invention or decisive influence require direct high-authority evidence and are never inferred from popularity or awards.",
  "Camera bodies, lenses, codecs, data rates, recording media, LUTs, color spaces, VFX software, render architecture, storage topology and finishing paths require film-specific evidence.",
  "Documentary footage, archive, animation, reenactment and staged material retain different evidentiary status; formal hybridity never turns reconstruction into historical proof.",
  "Stunts, weapons, pyrotechnics, water work, extreme locations, child performance, intimacy and physical transformation remain historical production evidence, not present-day procedural instruction."
];

const report = {
  schemaVersion: "1.0",
  auditDate: "2026-08-23",
  chapter: {
    number: 18,
    id: "digital-convergence-transnational-production",
    title: "Digital convergence, transnational production and platform-era cinema",
    period: "2000–2019",
    scope: "Cinema across 2000–2019 as digital post, digital acquisition, DCI exhibition, VFX and virtual-production systems, lightweight cameras, transnational co-production, regional industries, hybrid nonfiction and emerging platform distribution reshape production without eliminating photochemical film or local institutional differences.",
    thesis: "The period is not one digital revolution. Capture, post-production, animation, VFX, distribution, exhibition, financing and platform circulation changed asynchronously, while 35mm, Super 16, 65mm and IMAX persisted and regionally distinct production systems continued to matter."
  },
  atlas: { expectedCount: EXPECTED_ATLAS_COUNT, actualCount: atlas.scenarios.length, expansionOrder: atlas.expansionStats },
  verificationIndex: { literalVerifiedScenarioIds: verifiedIds.size },
  candidates: resolvedCandidates,
  byDecision,
  recommendedNewProductionCases: resolvedCandidates.filter((item) => item.decision === "P0" || item.decision === "P1").map((item) => item.title),
  historicalObjects,
  researchSources,
  boundaryNotes,
  safeguards
};

const outputPath = process.argv.find((arg) => arg.startsWith("--write="))?.slice("--write=".length);
if (outputPath) {
  const absolute = path.resolve(root, outputPath);
  mkdirSync(path.dirname(absolute), { recursive: true });
  writeFileSync(absolute, `${JSON.stringify(report, null, 2)}\n`);
}
console.log(JSON.stringify(report, null, 2));
