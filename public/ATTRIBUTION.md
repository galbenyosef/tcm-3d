# Anatomy data attribution

BodyParts3D, © The Database Center for Life Science licensed under CC Attribution 4.0 International.

- License: https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html (updated 2025-02-27)
- Dataset: https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html
- License terms: https://creativecommons.org/licenses/by/4.0/
- Source geometry: `isa_BP3D_4.0_obj_99.zip`, BodyParts3D 4.0.
- English names and relationships: IS-A and PART-OF concept, element, and inclusion tables from the same archive.
- Publication: Mitsuhashi et al. (2009), BodyParts3D: 3D structure database for anatomical concepts. https://doi.org/10.1093/nar/gkn613

Adaptations: axes and units converted from millimeters/Z-up to meters/Y-up; translated to rest at the stage; geometry simplified using meshoptimizer with 0.2% relative error limit per structure; normals quantized to signed 16-bit; packed into binary chunks; curated display system groupings and colors. The source contains 2,234 individual OBJ meshes; all remain represented. The combined hierarchy contains 3,432 named FMA concepts, which may reference multiple meshes. Original source identity is preserved in the manifest.

Source OBJ comments mention an older CC BY-SA 2.1 Japan license. The official current database license linked above supersedes that legacy text and explicitly permits redistribution and adaptation under CC BY 4.0.

BodyParts3D represents an adult male reference anatomy based on TARO MRI and anatomical illustration refinements. It is not a complete model of every possible human anatomical structure or variation. This interface is educational and is not a clinical tool.

## Historical assets (not included in the current release)

Earlier repository revisions included female reference anatomy: Kristen Browne and Heidi Schlehlein, Human Reference Atlas / HuBMAP, *3D Reference Organ Set for Female v1.5* (2023). CC BY 4.0. Geometry adapted for this viewer.

- Source DOI: https://doi.org/10.48539/HBM352.BTSQ.586
- Dataset: https://lod.humanatlas.io/ref-organ/united-female/v1.5
- Original GLB: https://cdn.humanatlas.io/digital-objects/ref-organ/united-female/v1.5/assets/3d-vh-f-united.glb
- License: https://creativecommons.org/licenses/by/4.0/

Adaptations: translated native meter/Y-up coordinates onto the stage, coincident vertices welded and source normals averaged, geometry simplified with a 0.2% per-structure relative error bound, and normals quantized. Colors and display systems are curated for this interface. All 888 source meshes are represented, with 1,073 source nodes available as selectable individual or compound concepts.

This is a reference assembly with whole-body surface and selected organs, including female reproductive anatomy. Its skeleton and muscle coverage is partial. It is not a complete model of every human structure or a single-person scan. Eight placenta/umbilical structures are classified under Pregnancy reference and hidden by default.

## 中医教学台的代码适配

头皮取穴展示隐藏独立头发网格（FJ2813），露出原有头皮及其穴位标记；原始模型资产不变。

本地中医教学界面基于 ashemag / Human Atlas（MIT）改编。原始代码版权声明和许可全文见 [CODE-LICENSE.txt](CODE-LICENSE.txt)，代码来源：https://github.com/ashemag/human-atlas 。

本项目新增中文界面、穴位工程覆盖层、六种工具几何、肤色/程序纹理、皮肤接触反应示意及教学控制。上述视觉适配没有完成医学逐穴定位校核，也没有改变人体数据的独立 CC BY 4.0 许可。

2026-09-07：增加十四经穴目录与分段体表经脉示意。种子坐标来自本项目旧 PressPoints 铜人，经区域参考适配及几何吸附；未经医学逐穴审核。课堂体表移除男性外生殖器区域的原表面及独立阴毛网格，以与边界连接的平滑皮肤曲面替换，并重新计算浮点法线，原始模型资产保持不变；简化区域不用于精细解剖或取穴。龈交仅收录目录，不放置外皮肤标记。
