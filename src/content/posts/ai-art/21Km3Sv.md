---
title: "Qwen image2.1体验"
published: 2026-09-21
updated: 2026-11-07
description: "Qwen image2.1体验"
image: "https://r2.eyemelody.top/ai-art/21Km3Sv/01.png"
coverInPost: false
tags: ["风格参考","Image2","Qwen-Image","Flux"]
category: "AI绘图"
lang: "zh-CN"
author: "九九"
sourceLink: "https://pd.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&attaContentID=cdc7e662e9cc4563b2000cdd0313e601&businessType=2&contentID=21Km3Sv&inviteCode=2imJlNaClFb&openSource=2&jumpInfo=ClBWpqZNmBzakbCu8HWycxcKSMlorkYcNj%2BE64GRJ4pGSKGree9M01ugGf4SlIt1GgPMTPZk3LFGpXf4AsV6Rew9PvRu3dDmcJPm1NTmmiunURIDdnAx"
---
前言总而言之，开源过大年了。是非常厉害的本地开源编辑模型。优点在于：一致性强（连续循环出图，让每次的错误叠加，进行5-6次的出图后依旧保持较好的一致性）；支持中文输入；速度较快；使用设备门槛较低；支持10张图片输入；支持各种编辑，且能够进行文字的生成（即为制作文字海报）。但是，不可否认的是，作为本地体量较小的开源模型，还是会出现问题的。不过可以通过抽卡和让这个模型再次对瑕疵部分进行编辑来解决。 ps：当然，可能因为本人使用比较激动导致的（也即为我含有一定的情绪导致的夸大），其实你实际上手可能会觉得没有那么夸张也说不定？ 细则1.本人电脑配置显卡：Intel A770 16G（适配度较差，但不妨碍能跑；使用N卡的话，除非显存太小，不然都可以跑得更舒服）CPU：9700x内存：24G DDR5单条 2.使用说明请先将comfyui的系统内核更新到最新的37.0版本，不然部分节点会无法使用。官方的工作流有两个，对应网址位于 ：（这个工作流不输入图片就可以当文生图用了） 该模型下载部分，可以到这个地方下载。其中，text encoder的话，建议选择int8 convrot版本的。同时 ，需要注意的是，bf16版本的显存占用为17G，可实际上，本人的16G显存的显卡也可以运行（会自动和内存进行交换，一定程度上会降低速度，但是可以运行） 以及，进行图像编辑的时候，注意输入的图像的尺寸，建议使用缩放像素的节点先将你的图片缩小，避免在text encoder的阶段就爆显存了（我昨晚经常这么爆显存）。 3.使用情况 文生图-1：文字能力测验可以看到，第一张图片出现了部分文字错误（右侧的准点率的百分数模糊了等等），第二张又没问题了。事实上，除了抽卡，还可以用这个模型再次进行图片编辑。速度上：纯文生图，1.5百万分辨率，20步，50s左右（后续就不对运行的参数进行说明了，反正分辨率和步数都是差不多这样的） 文生图-2：综合汇总测验 可以看到，非常完美。字体和图片都结合在一起了，很适合作为直播的海报背景（但是美学方面另外说，因为我自己没有细琢磨提示词的美感（听社区使用体验为，该模型的文生图的情况和美感不太好）。不过，既然都开源了，那么，就算有再多的问题，也都是一款我的问题（ 图像编辑-1：三视图生成 （值得注意的是，这类图像编辑的任务，除了文字外，flux2 kilen 9B 也可以生成，但是一致性会差很多。flux对于3D风格的一致性还行，但一旦涉及到二次元方面的图片，编辑的结果就会出现问题，个人使用过来感觉最明显的就是图片普遍泛黄，变成暖色调，还有就是画风不一致——而这个qwen image2.1在二次元方面就优秀很多） 原图： 编辑出图结果： 原图：编辑结果：可以看到，在进行更改的衣，服，生成设定图和文字的三重挑战下，依旧通关。不过“麾”和“魔”有些分不清，但问题不大，在接受范围内，且该问题是可以较为轻易解决的。 图像编辑-2：更换画面内容原图：编辑结果：可乐的更换较为成功。图像编辑-3：失败案例我使用较为简略的提示词进行生成的时候，会出现问题。比如 ：可以看到，文字几乎没有写正确。 对应的提示词为：基于画面的内容，制作其人设图，带有文字说明。 而综合上述的写文字的案例不难看出，qwen image2.1对于这种模糊的文字生成任务是失效的。你必须在提示词里面写清楚，生成什么文字（要写得详细），而不是告诉它生成个文字就行。这点是和gpt image 不同的，因为gpt image会自动联想进而想出合理的文字内容，而这个本地的，只有7B的模型做不到。  总结非常之强悍，我很喜欢。终于能写字了。再者，模型发布不久，很多问题和优化方案都还不清晰，建议懒得折腾的人等个几天，等社区用户给出好的结果后再上手会更轻松。（我昨晚兴冲地折腾，就碰壁了……）

[grid]
![图片1](https://r2.eyemelody.top/ai-art/21Km3Sv/01.png)
![图片2](https://r2.eyemelody.top/ai-art/21Km3Sv/02.png)
![图片3](https://r2.eyemelody.top/ai-art/21Km3Sv/03.png)
![图片4](https://r2.eyemelody.top/ai-art/21Km3Sv/04.png)
![图片5](https://r2.eyemelody.top/ai-art/21Km3Sv/05.png)
![图片6](https://r2.eyemelody.top/ai-art/21Km3Sv/06.png)
![图片7](https://r2.eyemelody.top/ai-art/21Km3Sv/07.png)
![图片8](https://r2.eyemelody.top/ai-art/21Km3Sv/08.png)
![图片9](https://r2.eyemelody.top/ai-art/21Km3Sv/09.png)
![图片10](https://r2.eyemelody.top/ai-art/21Km3Sv/10.png)
[/grid]
