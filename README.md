# 中医 3D · GPT‑6 遇见古老中医

**当前沿 AI 遇见古老的中医知识，会做出怎样的交互体验？**

这是一次由王斗提出需求、与基于 GPT‑6 的 Codex 协作完成的开源实验：在可追溯的人体数据上，加入穴位、六种工具、皮肤接触反馈与疼痛关联，让知识可以被旋转、观察和操作。

**[立即体验](https://tcm.jic.io/3d/) · [加入 JIC Discord](https://discord.gg/jic) · [制作过程](docs/MAKING-OF.md) · [参与贡献](CONTRIBUTING.md)**

## 能做什么

- 旋转、缩放与拆解成人男性参考人体，探索15个显示系统、2234个网格。
- 搜索30个穴位名称，显示58个左右侧或中线实例，查看已有定位摘要与出处。
- 使用针、灸、砭石、指压、刮痧、火罐；默认工具为针。
- 直接抓住器具或“移动工具”手柄，沿皮肤拖动；支持播放、暂停与按住演示。
- 观察程序化压放、回弹、刮拭轨迹、温热范围和杯口形变。
- 选择头痛、颈部痛、腰痛、膝痛课堂示例：红色痛处、金色局部穴位、蓝色远端关联。工具移动后原痛处保持，来源可展开查看。
- 查看涌泉时自动隐藏遮挡足底的展示底座，并启用足底补光。

## 人体从哪里来

本项目不是从零生成的人体，也不是从零编写的解剖查看器。

| 层次 | 来源与贡献 |
| --- | --- |
| 人体数据 | [BodyParts3D 4.0](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/desc.html)，成人男性参考解剖，CC BY 4.0 |
| 查看器 | [ashemag / Human Atlas](https://github.com/ashemag/human-atlas)，React、Three.js，MIT；保留上游Git历史 |
| 本项目改编 | 中文教学界面、穴位覆盖层、六工具、拖动与皮肤反馈、疼痛关联、教学视角修复 |
| 人机协作 | 王斗提出目标并反馈体验；基于GPT‑6的Codex参与实现、调试与验证 |

上游起点：`1c38bf35c254a891200d3cedecfd57abebe83d8d`。原始项目说明见 [README-upstream.md](README-upstream.md)，模型处理与完整署名见 [ATTRIBUTION.md](public/ATTRIBUTION.md)。代码许可与人体数据许可分别适用。

## 当前边界

**这是教学交互工程预览，尚未完成专业医学审校。**

30穴、58实例均仍标记 `reviewed: false`。射线贴附到真实皮肤三角面只验证几何接触，不证明标准穴位定位。没有收录完整穴位集合，不承诺毫米级定位。

皮肤、手部和工具反应为程序化3D示意，不是真人扫描或实测组织力学。参数不对应真实施术力度、温度、负压或时长。疼痛连线表示有出处的教学关联，不是神经/经络路径，不提供诊断或疗效预测；工具操作不会自动降低痛感标记。组合研究也不证明单穴独立疗效或所有工具的效果。

## 本地运行

需要 Node.js 22.13 或更高版本，无需AI密钥或账号。

```sh
git clone https://github.com/JICio/tcm-3d.git
cd tcm-3d
npm ci
npm run dev
```

打开 http://127.0.0.1:3016/ 。端口占用时以终端输出为准。人体资源随仓库提供，首次加载需下载模型数据。该界面运行不调用GPT‑6；GPT‑6参与的是开发过程。

```sh
npm run check
node scripts/validate-tool-drag.mjs
node scripts/validate-teaching.mjs
npm run build
```

`npm run build` 输出独立静态站点到 `dist/`。可部署到支持静态文件的主机。

`npm run build:tcm` 输出 `/3d/` 前缀资源到 `dist-tcm/`，供已有站点集成；此目录不是原JIC全站，不可用它覆盖已有网站根目录。开发服务器默认只监听本机，不用于公网生产托管。

## 一起来做

欢迎中医教师、解剖学与医学可视化研究者、前端和3D开发者、设计师及学习者参与。

优先方向：逐穴专业校核、体表标志与体位、可访问性、移动端交互、模型性能、工具外观与教学文案。提出定位修正时请给标准版本、条款与适用体位。

遇到问题可 [提交 Issue](https://github.com/JICio/tcm-3d/issues)，也欢迎到 **[discord.gg/jic](https://discord.gg/jic)** 展示你的改进、讨论教学用法、一起完成下一次迭代。

## 许可

- 应用代码：[MIT](LICENSE)，保留ashemag原版权声明；JIC改编同以MIT发布。
- BodyParts3D数据：[CC BY 4.0](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html)，© The Database Center for Life Science。
- 外部标准、论文与第三方依赖保留各自权利；代码MIT许可不覆盖它们。
