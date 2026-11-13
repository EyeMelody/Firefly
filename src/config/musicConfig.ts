import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "青天より遠く",
				artist: "nayuta (葉月なの)",
				url: "https://r2.eyemelody.top/assets/music/01-青天より遠く-nayuta_(葉月なの).flac",
				cover: "https://r2.eyemelody.top/assets/music/cover/01.jpg",
				lrc: "",
			},
			{
				name: "LilaS",
				artist: "SawanoHiroyuki[nZk]",
				url: "https://r2.eyemelody.top/assets/music/02-LilaS-SawanoHiroyukinZk.flac",
				cover: "https://r2.eyemelody.top/assets/music/cover/lilas.jpg",
				lrc: "",
			},
			{
				name: "青と親友",
				artist: "VISUAL ARTS/Kinetic Novels/長谷川育美",
				url: "https://r2.eyemelody.top/assets/music/03-青と親友-VISUAL_ARTS-Kinetic_Novels-長谷川育美.flac",
				cover: "https://r2.eyemelody.top/assets/music/cover/03.jpg",
				lrc: "",
			},
			{
				name: "アルケミラ",
				artist: "リーガルリリー",
				url: "https://r2.eyemelody.top/assets/music/04-アルケミラ-リーガルリリー.ogg",
				cover: "https://r2.eyemelody.top/assets/music/cover/arukemira.jpg",
				lrc: "",
			},
			{
				name: "芽吹の唄",
				artist: "大原ゆい子",
				url: "https://r2.eyemelody.top/assets/music/05-芽吹の唄-大原ゆい子.ogg",
				cover: "https://r2.eyemelody.top/assets/music/cover/mebuki.jpg",
				lrc: "",
			},
			{
				name: "SLUMDOG PARADISE",
				artist: "山本康太",
				url: "https://r2.eyemelody.top/assets/music/06-SLUMDOG_PARADISE-山本康太.flac",
				cover: "https://r2.eyemelody.top/assets/music/cover/86-ost.jpg",
				lrc: "",
			},
			{
				name: "Talk to you",
				artist: "山本康太",
				url: "https://r2.eyemelody.top/assets/music/07-Talk_to_you-山本康太.ogg",
				cover: "https://r2.eyemelody.top/assets/music/cover/86-ost.jpg",
				lrc: "",
			},
			{
				name: "Underneath the Sky",
				artist: "山本康太",
				url: "https://r2.eyemelody.top/assets/music/08-Underneath_the_Sky-山本康太.ogg",
				cover: "https://r2.eyemelody.top/assets/music/cover/86-ost.jpg",
				lrc: "",
			},
			{
				name: "4N",
				artist: "澤野弘之",
				url: "https://r2.eyemelody.top/assets/music/09-4N-澤野弘之.ogg",
				cover: "https://r2.eyemelody.top/assets/music/cover/86-ost.jpg",
				lrc: "",
			},
			{
				name: "pianoVIIIVI-i",
				artist: "澤野弘之",
				url: "https://r2.eyemelody.top/assets/music/10-pianoVIIIVI-i-澤野弘之.ogg",
				cover: "https://r2.eyemelody.top/assets/music/cover/86-ost.jpg",
				lrc: "",
			},
			{
				name: "pianoVIIIVI-iv",
				artist: "澤野弘之",
				url: "https://r2.eyemelody.top/assets/music/11-pianoVIIIVI-iv-澤野弘之.ogg",
				cover: "https://r2.eyemelody.top/assets/music/cover/86-ost.jpg",
				lrc: "",
			},
			{
				name: "I Wanna",
				artist: "長谷川育美",
				url: "https://r2.eyemelody.top/assets/music/12-I_Wanna-長谷川育美.flac",
				cover: "https://r2.eyemelody.top/assets/music/cover/12.jpg",
				lrc: "",
			},
		],
	},
};
