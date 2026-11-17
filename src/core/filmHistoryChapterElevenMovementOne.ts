import type { FilmHistoryBookSection } from "./filmHistoryBook.js";

/** Chapter 11, movement I: conversion was a system, not a premiere date. */
export const filmHistoryChapterElevenMovementOne: readonly FilmHistoryBookSection[] = [
  {
    id: "ch11_not_a_single_invention",
    title: "1. Sound did not arrive in one evening: rival recording systems reorganized the cinema",
    paragraphs: [
      "The familiar story begins with the audience hearing Al Jolson in The Jazz Singer in 1927. That is a powerful publicity image but a poor description of an industrial transition. The moving picture had long coexisted with live musicians, lecturers, sound effects and attempts at synchronized reproduction. Vitaphone features and shorts preceded The Jazz Singer, and the film itself mixed extended silent-style passages with recorded songs and selected speech. MoMA and BFI therefore treat it as a hybrid whose reception accelerated an existing technological and commercial struggle, not as the first moment in which pictures could be accompanied by sound. A history of film sound must distinguish what happened in a cinema auditorium from what was recorded and carried by a release print.",
      "Warner Bros.' Vitaphone coupled projected film to separately recorded discs. Sound-on-film competitors used photographic information on the print itself: Fox Movietone, RCA Photophone and European optical systems required different patent, laboratory and theatre arrangements. Disc and optical systems could both synchronize, yet they imposed distinct risks in duplication, cueing, repair and projection. The choice was not merely whether an artist preferred recorded voices. It determined which cameras, recording rooms, projection equipment and distribution networks an enterprise could afford. Standardized running speeds, more reliable motors and new studio practices emerged gradually from these requirements.",
      "The contrast also clarifies how we should study a surviving film. A later video restoration may combine picture and soundtrack in one digital file even when the historical theatrical release used separate discs; a modern score might accompany a silent print without being a soundtrack recorded in its original production. When comparing sources, the useful questions are which recorded elements existed at the time, which release version is being presented, and whether subsequent preservation has changed the audible object. A synchronized modern screening is not evidence of one uniform historical recording process.",
    ],
    sourceIds: ["ch11_moma_sound", "ch11_moma_jazz", "ch11_bfi_sound", "ch11_loc_silent_music"],
  },
  {
    id: "ch11_theatre_conversion",
    title: "2. Sound changed who could produce, distribute, exhibit and hear a film",
    paragraphs: [
      "A studio's ability to record dialogue did not mean that every theatre could play it. Exhibitors needed capital for amplification, loudspeakers and compatible synchronization machinery, along with staff able to maintain the new equipment. Producers and distributors faced a fragmented marketplace in which silent, part-talking and all-talking releases overlapped. Conversion could happen quickly in wealthy metropolitan venues and much more slowly elsewhere. The BFI's account of late silent cinema shows why prestigious silent work continued after 1927 and why a film's sound status must be attached to a particular version and place of exhibition rather than to its year alone.",
      "The changes were also audible in the economics of labour. Recorded accompaniment could displace live theatre musicians while simultaneously creating work for sound engineers, recordists, mixers, dialogue coaches, orchestra contractors and new forms of post-production labour. Camera noise was newly troublesome; recording rooms and camera enclosures could shape the distance between actor and microphone. A studio might narrow movement to secure an intelligible take, or invent a mobile recording arrangement to escape that limit. Both were production choices, not inherent properties of every early talkie.",
      "Language made the transformation global rather than merely technical. A silent print could be retitled for another market; synchronized spoken dialogue placed accent, performance, translation and voice in the distribution chain. Producers tested multilingual versions with repeated scenes or different casts, while subtitling and dubbing developed as other answers. The transition therefore redistributed power among studios, stars, translators, theatre operators and audiences. It also made existing racial and class boundaries more visible in decisions about whose language and voice counted as commercially acceptable.",
    ],
    sourceIds: ["ch11_bfi_silent", "ch11_moma_sound", "ch11_loc_silent_music", "ch11_tcm_blueangel", "ch11_cambridge_japan"],
  },
  {
    id: "ch11_sound_not_static",
    title: "3. Early recording restrictions did not create one universal static-camera style",
    paragraphs: [
      "Some early dialogue scenes are theatrically staged, but the popular claim that sound simply immobilized cinema turns a real constraint into a false law. The equipment available to a specific production, the placement of a microphone, location noise, performer experience and the willingness to combine tracks were more important than the date on the release poster. Sound demanded coordination between image and performance, yet filmmakers could reframe the problem: the camera might move while the recording apparatus was protected, a voice could be heard from beyond the frame, or rhythmic editing might connect sounds and spaces that the image kept separate.",
      "Rouben Mamoulian's Applause and Alfred Hitchcock's Blackmail are especially valuable because they turn early sound's apparent limitations into contrasting formal experiments. Later musical productions similarly discovered that choreography, recording, set design and editorial assembly could be coordinated instead of simply placing a microphone before a stage. The question for a FilmWork producer is not which film used the most technology. It is what the production wished to communicate, what its recording system permitted, and which compromises or inventions shaped the result.",
      "The methodological safeguard is to examine audible and visible evidence separately from unverified claims about equipment. A mobile shot does not itself prove portable synchronized recording; a complex soundtrack may result from recording, mixing or later presentation layers. Good film history explains the production method where evidence exists and labels the remaining inference. This allows a modern learner to compare meaningful alternatives rather than reward a mythical technological 'first'.",
    ],
    sourceIds: ["ch11_bfi_early", "ch11_bfi_musical", "ch11_cambridge_applause", "ch11_moma_sound"],
  },
];
