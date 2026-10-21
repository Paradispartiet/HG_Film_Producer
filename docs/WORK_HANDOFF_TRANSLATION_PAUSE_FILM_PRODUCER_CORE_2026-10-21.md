# Film Producer — overlevering: oversettelsespause og kjernearbeid

**Dato:** 2026-10-21  
**Beslutning:** Lagre og stopp produksjon av nye filmoversettelser inntil brukeren ber om å gjenoppta dem. Nå er prioriteten selve Film Producer — funksjonalitet, spillerløp og forståelighet.

## Kontrollert og publisert utgangspunkt

- **Repo:** `Paradispartiet/HG_Film_Producer`.
- **Hovedgren:** `main`, etter merge av [PR #813](https://github.com/Paradispartiet/HG_Film_Producer/pull/813).
- **Sist bekreftede commit:** `7ba50816235b58cb51a619213da1b22437d4eb5e`.
- **GitHub Actions:** [produksjonskjøring #39599131785](https://github.com/Paradispartiet/HG_Film_Producer/actions/runs/39599131785) fullført med vellykket verifikasjon, Chromium og GitHub Pages.
- **Publisert app:** https://paradispartiet.github.io/HG_Film_Producer/
- **Oversettelsesinventar:** **12/614 filmer (ca. 1,95 %)** med en definert, kildelåst filmbasert presentasjonsdekning i EN/NB/FR/PT. Dette er **ikke** en påstand om at alle UI-felt, alle 614 filmer eller hele appen er oversatt.
- **Automatisert kontroll ved PR #813:** `937/937` tester, `24/24` kildeidentifiserte historiske distraktorsvar, `48/48` nettleserkontroller, 0 feil. Av disse er **44 fullstendige Producer-/Film Study-reiser** for 11 spillbare produksjonscaser, mens **4** er begrensede Atlas/Director/mobil-kontroller for `The Idiots` på fire språk.
- **Film 12:** *The Idiots / Idioterne (1998)*, `scenario_the_idiots_1998`. Kildeverifisert historikk, men aktiv produksjonsbrief har fortsatt `briefType: "seed_fallback"` og `verificationStatus: "seeded"`. Derfor har den **ingen spillbar Production Cases-oppgave i Producer-biblioteket**. Ikke omtolk oversettelsesdekning som spillbar case-komplettering.
- Originale engelske påstander, kildebelegg, film-ID-er, historiske vurderinger og spillmekanikk ble beholdt. De siste oversettelsene trenger fortsatt separat menneskelig språk-/visuell vurdering og full tilgjengelighetstesting.

## Pausekontrakt

1. **Ingen ny film nummer 13, ingen nye kildeoversettelsesbatches og ingen utvidelse av `12/614` i denne arbeidsrekken.**
2. Eksisterende oversettelser, tester, rapporter og språkfunksjoner blir liggende urørt i `main`; pausen er ikke rollback.
3. Ved senere gjenopptakelse: kontroller `main`, den siste kildelåste oversettelses-PR-en, inventaret, dynamiske donorvalg og CI før nye oversettelser legges til.
4. Ikke la rutinemessige kjerneendringer i Film Producer automatisk utløse videre oversettelsesproduksjon.

## Neste fokus: selve spillet

Arbeidsoppfølging: [issue #814 — første-til-andre-film, spillerløp og UX](https://github.com/Paradispartiet/HG_Film_Producer/issues/814).

**Produktgrense som må respekteres:**

- `docs/GAME_DIRECTION.md` og `docs/PRODUCTION_CASES_MVP_CHECKPOINT.md`: Production Cases er den stabile referansemodusen. Spesifikke, kildebaserte filmfaglige valg, forklaringer, kvalitativ progresjon, ingen poengjakt eller universell simuleringsøkonomi.
- `docs/STUDIO_CAREER_EXPERIMENTAL_STATUS.md`: Studio Career er en **eksperimentell**, spillbar produksjonsbane, med utvikling → preproduksjon → opptak → etterarbeid → lansering → karriereanvendelse → film 2.
- `README.md` og `README/IDE_BIBLE.md` beskriver den større ambisjonen om et filmstudio- og karrierespill, mens den gjeldende stabile spillretningen avgrenser Production Cases mot generisk tycoon-mekanikk. Denne spenningen er en **bevisst produktavklaring som gjenstår**, ikke en tillatelse til umerket ombygging.

**Arbeidsrekkefølge:**

1. Kontroller reell inngang fra startskjermen og de eksisterende modusene, med mobil/desktop som separate visninger.
2. Test først **Studio Career film 1 → film 2** mot `docs/STUDIO_CAREER_MANUAL_PLAYTEST.md` og `src/core/studioCareerFlow.ts`. Se etter stopp, feil i faseoverganger, karriereresultat som ikke kan anvendes, manglende Film Two-handling, uoversiktlig scrolling/fokus og lagringsfeil.
3. Rett det første dokumenterte, brukermerkbare kjerneproblemet med smalt omfang, regresjonstest og nettleserkontroll.
4. Valider at Production Cases sin stabile læringsflyt og lokale progresjon/backuper ikke påvirkes.
5. Diskuter eventuelle store valg mellom simuleringskarriere og filmfaglig caselæring eksplisitt før ny systemutvidelse.

## Hvorfor dette dokumentet finnes

Denne overleveringen er en frosset **arbeidsstatus**, ikke et bevis på at Studio Career er fullført. Den hindrer at neste arbeidsøkt ved et uhell fortsetter oversettelsesrekken eller feilaktig rapporterer 12 fullverdige, spillbare caser. Nye faktiske resultater fra kjernearbeidet dokumenteres i issue #814 og relevante QA-filer, ikke gjennom en ny oversettelsesetappe.
