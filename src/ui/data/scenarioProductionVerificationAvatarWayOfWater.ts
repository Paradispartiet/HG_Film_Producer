import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const avatarWayOfWaterProductionCaseVerification = {
  scenarioId: "scenario_avatar_the_way_of_water_2022",
  status: "verified",
  verifiedAt: "2026-08-30",
  summary: "Avatar: The Way of Water is verified as the sixth Chapter 19 Production Case through the studio record and title-specific cinematography, VFX, virtual-production, editorial and sound reporting. 20th Century Studios anchors James Cameron as director, Cameron and Jon Landau as producers and a 192-minute runtime. American Cinematographer documents Russell Carpenter ASC, the custom underwater performance-capture volume at Manhattan Beach Studios, near-ultraviolet capture-marker R&D, reflection control with floating beads, a 12-to-16-camera reference-video array, Cameron's deliberate separation of actor performance capture from later virtual-camera decisions, the rebuilt Simulcam workflow, Sony VENICE/Rialto components in the redesigned Fusion stereoscopic rig and selected 48fps photography. Weta FX records 3,240 VFX shots in the 3,289-shot final film, including 2,225 water shots, alongside a new water-simulation toolset, a strain-based facial-performance system, a performance-driven cable-cam eyeline system and real-time depth compositing for practical/CG occlusion. The Third Floor documents previs and environment assembly, virtual-camera work in Weta FX's Gazebo engine, techvis built from digital scans of physical sets and on-set Simulcam supervision linking virtual and practical production geometry. Sony's production record independently confirms VENICE as the title's live-action camera platform. Frame.io's title-specific workflow account, drawing on editor Stephen Rivkin's explanation, supports the editorial order from selected performance capture to digital character/environment population, virtual-camera construction, final VFX turnover and live-action templates. Sound-team reporting identifies Christopher Boyes, Gwendolyn Yates Whittle, Dick Bernstein, Michael Hedges and Julian Howarth among the principal sound collaborators and documents the clarity-first strategy used to keep the dense soundtrack narratively legible. Exact budget allocation, full capture-marker specifications, complete camera counts for every session, actor training logs, whole-film software/version inventories, vendor labor shares, per-shot render costs, editorial storage topology, complete color transforms, detailed recording chains, plug-in inventories and final mix routing remain outside the verified layer.",
  sources: [
    {
      title: "Avatar: The Way of Water",
      publisher: "20th Century Studios",
      url: "https://www.20thcenturystudios.com/movies/avatar-the-way-of-water",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Studio record supporting the 192-minute runtime, December 2022 release, James Cameron as director and James Cameron/Jon Landau as producers."
    },
    {
      title: "Total Immersion for Avatar: The Way of Water",
      publisher: "American Cinematographer",
      url: "https://theasc.com/articles/avatar-the-way-of-water",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Title-specific reporting with James Cameron, Russell Carpenter ASC and virtual-production personnel documenting underwater performance capture, near-UV capture R&D, floating-bead reflection control, multi-angle reference video, VCAM separation, Simulcam, VENICE/Fusion stereo engineering and HFR use."
    },
    {
      title: "Our Work on Avatar: The Way of Water",
      publisher: "Weta FX",
      url: "https://www-ext.wetafx.co.nz/articles/our-work-on-avatar-the-way-of-water",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Weta FX's own project account documents 3,240 VFX shots, 2,225 water shots, water simulation, strain-based facial performance, cable-cam eyelines and real-time depth compositing."
    },
    {
      title: "Avatar: The Way of Water",
      publisher: "THE THIRD FLOOR",
      url: "https://thethirdfloorinc.com/5836/avatar-the-way-of-water/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Vendor case study documenting previs, virtual-camera work with Weta FX's Gazebo engine, techvis from physical-set scans and Simulcam supervision linking real and virtual production geometry."
    },
    {
      title: "Avatar: The Way of Water",
      publisher: "Sony Cine",
      url: "https://sony-cinematography.com/shot-on-sony/avatar-the-way-of-water/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Sony Professional Cinema production record independently identifies VENICE as the camera platform and Russell Carpenter as DP."
    },
    {
      title: "Behind the Scenes Workflows of Every 2023 Oscars Best Picture Nominee",
      publisher: "Frame.io",
      url: "https://blog.frame.io/2023/03/12/2023-oscar-best-picture-workflow-breakdown-every-nominee/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Title-specific workflow reporting, including Stephen Rivkin's explanation of performance-selection editorial, digital character/environment population, virtual-camera construction, live-action templates, VFX handoff and delivery versioning."
    },
    {
      title: "Behind the fantastic sound of Avatar: The Way of Water",
      publisher: "A Sound Effect",
      url: "https://www.asoundeffect.com/avatar-the-way-of-water-sound/",
      sourceKind: "trade_feature",
      supports: ["overall", "editing", "sound"],
      note: "Title-specific sound-team interview aggregation identifying Christopher Boyes, Dick Bernstein, Michael Hedges, Julian Howarth and Gwendolyn Yates Whittle and documenting the production's clarity-first sound strategy."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;