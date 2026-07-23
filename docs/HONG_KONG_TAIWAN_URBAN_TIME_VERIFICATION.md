# Hong Kong and Taiwan urban-time Production Case verification

Verified on 2026-07-23. This batch reviews existing playable scenarios only; it adds no films.

## Cases

- `scenario_days_of_being_wild_1990`
- `scenario_vive_l_amour_1994`
- `scenario_millennium_mambo_2001`
- `scenario_goodbye_dragon_inn_2003`

## Comparative production systems

### Days of Being Wild

A star ensemble is dispersed across clocks, corridors, humid rooms and incomplete attachments. Wong Kar-wai, Christopher Doyle and William Chang rebuild 1960s Hong Kong as a deliberately thin, nearly monochrome memory space, while ellipsis and repeated Latin music carry longing that the characters withhold.

### Vive L'Amour

Three isolated people unknowingly share a vacant Taipei apartment. Long static framings, doors, plumbing, silence and precisely staged near encounters make real-estate vacancy the architecture of queer desire; the extended park ending emerged from a discovered construction location and available sun.

### Millennium Mambo

Vicky narrates 2001 from ten years in the future. A 35mm Steadicam image, fluorescent tunnels, blue-green nightlife, long scenes, temporal ellipses and electronic music make youth culture feel remembered before it has ended; IFFR records a new cut after the Cannes premiere.

### Goodbye, Dragon Inn

Tsai Ming-liang rents the closing Fu-Ho theatre, begins from one page of poetry, secures King Hu's Dragon Inn and shoots over ten days at roughly four shots per day. Static duration, real exhibition architecture, rain, chewing and projection sound transform the venue into the film's protagonist and archive.

## Verification threshold

Each case now has:

- four inspectable HTTPS sources from at least two publishers;
- a complete 17-area history and craft audit;
- at least nine `source_verified` areas;
- explicit `mapped` or `not_central` status where department-level evidence is incomplete;
- one playable history match, one partial match and one mismatch;
- a verification record linked to the existing scenario ID.

## Sources

The batch uses records, restoration pages, programme notes and filmmaker interviews from the Criterion Collection, British Film Institute, La Biennale di Venezia, Festival de Cannes, International Film Festival Rotterdam and Film at Lincoln Center.

Sources support only the registry's permitted areas: `overall`, `screenplay`, `cinematography`, `editing` and `sound`.

## Integration

The profiles are exposed through the already integrated film-history resolver rather than another branch in the large React panel. They use a dedicated four-film donor pool, so alternatives compare fragmented Hong Kong memory, vacant Taipei architecture, nocturnal future memory and exhibition-space elegy rather than unrelated systems.

## Files

- `src/ui/data/scenarioFilmStudyEastAsianDaysOfBeingWild.ts`
- `src/ui/data/scenarioFilmStudyEastAsianViveLAmour.ts`
- `src/ui/data/scenarioFilmStudyEastAsianMillenniumMambo.ts`
- `src/ui/data/scenarioFilmStudyEastAsianGoodbyeDragonInn.ts`
- `src/ui/data/scenarioFilmStudyHongKongTaiwanUrbanTime.test.ts`
- `src/ui/data/scenarioProductionVerificationHongKongTaiwanUrbanTimeBatch.ts`

The unified verification registry rises from 188 to 192 cases. Catalogue size and scenario data remain unchanged.
