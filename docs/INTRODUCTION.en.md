# When GPT-6 Meets Ancient Chinese Medicine

## An Open-Source 3D Acupuncture Teaching Experience

What happens when a frontier AI development tool meets a medical tradition built over centuries?

For this project, the result is an interactive human model: a place where learners can rotate the body, explore acupuncture points and meridians, move instruments across the skin, and observe visual demonstrations of different techniques.

Created through a collaboration between Wang Dou and GPT-6-based Codex, **TCM 3D** brings traditional Chinese medicine into a browser-based learning environment. It combines an existing anatomical dataset, an open-source 3D viewer, and a new layer of teaching interactions shaped by continuous user feedback.

**[Explore the live model](https://tcm.jic.io/3d/) · [View the source on GitHub](https://github.com/JICio/tcm-3d) · [Join the JIC community](https://discord.gg/jic)**

## From a Diagram to a Space You Can Explore

A printed acupuncture chart gives learners a fixed view. A 3D environment lets them change the view themselves: turn the body around, zoom into a region, compare nearby points, and examine the relationship between a selected point and the surrounding surface.

TCM 3D currently includes:

- **362 named acupuncture points across the fourteen meridians**, including Yintang under the Chinese national standard's GV24+ designation.
- **670 surface markers**, accounting for bilateral and midline locations. Yinjiao (GV28), an intraoral point, is included in the catalogue without placing a misleading marker on the external skin.
- **Colored, segmented meridian surface lines**, with filtering by meridian and sequential navigation between points.
- **Six interactive tools:** an acupuncture needle, moxibustion, a bian stone, finger pressure, gua sha, and cupping.
- **Direct tool movement** along the skin, with playback, pause, and press-and-hold demonstration controls.
- **Pain–point relationship examples** for headache, neck pain, low back pain, and knee pain.
- **A mobile layout** with a full-viewport canvas, collapsible panels, a compact tool selector, and portrait and landscape support.

The interface currently uses Chinese labels. The default instrument is the needle.

## Where the Human Model Comes From

The source chain is straightforward:

**BodyParts3D → Human Atlas → TCM 3D**

The underlying anatomy comes from **BodyParts3D 4.0**, an adult male reference dataset credited to The Database Center for Life Science. The source includes 2,234 individual anatomical meshes. The reference anatomy is based on TARO MRI data and anatomical illustration refinements; it is not a newly commissioned scan made for this project.

The browser viewer builds on **[Human Atlas by ashemag](https://github.com/ashemag/human-atlas)**. That upstream project supplies the React and Three.js foundation and browser-ready anatomical geometry. Its processing work includes coordinate and unit conversion, mesh simplification, normal quantization, and binary chunk packaging.

Those upstream contributions remain credited. The repository preserves the original Git history and MIT copyright notice. BodyParts3D data has its own **CC BY 4.0** attribution requirements, separate from the application's code license.

The work added here includes the Chinese teaching interface, acupuncture overlays, meridian visualization, six tool interactions, skin-contact effects, pain relationships, and classroom-oriented camera and display adjustments.

For classroom presentation, the external genital surface has been replaced at runtime with a continuous, smooth skin surface, and the separate pubic-hair mesh is hidden. The original model assets remain unchanged. This simplified region is unsuitable for precise anatomical or acupuncture localization.

The skin appearance and tool effects are procedural 3D visuals. They should not be described as a photorealistic scan or a validated simulation of living tissue.

## What GPT-6 Contributed

The unusual combination in this project is the meeting of an evolving AI development workflow and a long-established body of traditional knowledge.

Wang Dou set the direction, tried the model, and gave concrete feedback. GPT-6-based Codex helped implement features, inspect code, investigate rendering problems, and validate changes. The application itself does not call GPT-6 during normal use and does not require an AI API key.

The development story is best understood through observable decisions and results:

### Start with traceable anatomy

An existing anatomical dataset provided a documented foundation. Building on Human Atlas also made it possible to focus development on acupuncture teaching interactions while preserving the work and attribution of upstream contributors.

### Separate surface attachment from anatomical accuracy

Acupuncture markers need a position and an orientation. Seed positions are adapted to the model, projected onto the skin, and associated with a surface triangle and normal. This helps prevent markers from floating above the body or sitting inside it.

However, successful geometric attachment does not establish correct clinical localization. This distinction remains explicit in the interface and documentation.

### Let feedback change the interaction

One question—“Can these tools move?”—led to direct manipulation. Instruments can now be grabbed and moved along the skin while dragging elsewhere rotates the body.

When a tool leaves a selected point, the interface identifies the new contact as a freely selected surface location instead of continuing to label it as the original acupuncture point. This keeps the displayed name consistent with what the user is actually doing.

### Investigate what is really blocking the view

When Yongquan on the sole appeared behind a dark circle, the problem was the display pedestal obstructing a camera positioned below the feet. The correction hides the obstructing base in the relevant view and adds lighting for the sole.

### Treat appearance as something to inspect

The finger-pressure tool went through several iterations after the hand looked unnatural. The current version uses an extended-index-finger gesture with the other fingers folded. It remains a procedural teaching representation, with room for further visual improvement.

These examples describe the documented development process and its engineering rationale. They are not a transcript of private model reasoning or evidence of a model-performance ranking.

## Six Tools, Six Visual Demonstrations

Each instrument has a distinct visual role:

| Tool | What the demonstration shows |
| --- | --- |
| Acupuncture needle | Instrument orientation, contact position, and an insertion-style animation |
| Moxibustion | A visual indication of a warming region |
| Bian stone | Surface contact and rubbing or pressing movement |
| Finger pressure | Local pressing, release, and rebound |
| Gua sha | Scraping motion and traces left along the demonstrated path |
| Cupping | Cup-rim contact and a suction-style skin deformation |

These effects help an instructor explain differences in movement and contact. Animation controls do not correspond to measured force, temperature, suction pressure, treatment duration, or safe needling depth.

## Making Pain–Point Relationships Visible

Pain and tool location are displayed separately. In a low-back-pain example involving Weizhong, the tool can move to the back of the knee while the original pain marker remains on the lower back. A wider view makes the distant relationship visible.

The teaching examples distinguish the pain region, local points, and distant associated points through color and connecting graphics. Sources are available in the interface and in the project's pain-relationship data.

These connections illustrate selected teaching relationships. They do not depict nerve pathways, establish a diagnosis, or predict an individual treatment outcome. Moving or applying a tool does not automatically reduce the pain marker, and regions without a curated example do not receive an automatically generated point prescription.

## Built for Phones as Well as Desktops

On mobile screens, the 3D canvas fills the browser's available viewport. The point library and selection details collapse into compact controls, while the six-tool palette opens when needed.

The layout adapts to portrait and landscape orientation and includes safe-area spacing around phone screen insets. Browser layout checks covered a 390 × 844 portrait viewport, an 844 × 390 landscape viewport, and a 320 × 568 small-screen viewport.

This makes more space available for the human model while keeping teaching controls within reach. The browser's own address bar remains under browser control.

## Current Scope and Review Status

**TCM 3D is an educational engineering preview awaiting professional medical review.**

All 362 point entries are currently marked `reviewed: false`. The catalogue covers the fourteen-meridian system; it does not include every extra point, auricular point, or scalp-acupuncture system. Its 362-point count follows GB/T 12346—2021, including the additional Yintang designation; the WHO catalogue lists 361 points.

The displayed meridian lines connect points in segmented surface sequences. They do not represent the complete traditional course, deep pathways, or a modern anatomical structure, and they must not be used as needling routes.

The current reference body cannot represent all body proportions, postures, ages, or anatomical variations. Professional point-by-point review, clearer surface landmarks, and additional reference bodies are important areas for future work.

## Open Source, Open to Contribution

The project is published on GitHub so that teachers, clinicians, researchers, developers, designers, and learners can inspect the implementation and help improve it.

Useful contributions include:

- Point-by-point localization review with the relevant standard, section, and body position.
- Better surface landmarks and explanations for teaching.
- Mobile interaction, accessibility, and performance improvements.
- More natural instrument and hand geometry.
- Translation and clearer educational writing.
- Reproducible bug reports with screenshots and device details.

Application code is available under the **MIT License**. BodyParts3D data remains subject to **CC BY 4.0**, and external standards, papers, and dependencies retain their respective rights.

Try the model, report what looks wrong, and share what would make it more useful in a classroom.

**[Launch TCM 3D](https://tcm.jic.io/3d/)**  
**[Contribute on GitHub](https://github.com/JICio/tcm-3d)**  
**[Join us at discord.gg/jic](https://discord.gg/jic)**

## Sources and Project Documentation

- [BodyParts3D dataset description](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/desc.html)
- [BodyParts3D license](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html)
- [Human Atlas upstream repository](https://github.com/ashemag/human-atlas)
- [Project README](https://github.com/JICio/tcm-3d/blob/main/README.md)
- [Model attribution and adaptations](https://github.com/JICio/tcm-3d/blob/main/public/ATTRIBUTION.md)
- [Development notes](https://github.com/JICio/tcm-3d/blob/main/docs/MAKING-OF.md)

*Project introduction updated September 7, 2026. English adaptation of the project's Chinese introduction and development notes, incorporating the mobile-layout update.*
