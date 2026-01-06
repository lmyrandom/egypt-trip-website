/**
 * Egypt Trip Itinerary Data
 * Complete flight details with departure times, arrival times, and flight durations
 */

export interface Flight {
  number: string;
  airline: string;
  departure: {
    city: string;
    code: string;
    time: string;
    date: string;
  };
  arrival: {
    city: string;
    code: string;
    time: string;
    date: string;
  };
  duration: string;
  aircraft?: string;
}

export interface Activity {
  name: string;
  description: string;
  image?: string;
}

export interface Hotel {
  name: string;
  description: string;
  image?: string;
}

export interface DayItinerary {
  day: number;
  date: string;
  title: string;
  description: string;
  activities?: Activity[];
  hotel?: Hotel;
  flights?: Flight[];
  transport?: string;
  images?: string[];
}

export const itineraryData: DayItinerary[] = [
  {
    day: 1,
    date: "2月11日",
    title: "启程与中转奇遇",
    description: "凌晨从香港出发,搭乘阿联酋航空经杜拜转机。在杜拜有9小时转机时间,我们将快速游览哈利法塔、帆船酒店和黄金市场,感受这座未来之城的魅力。傍晚搭乘航班抵达开罗。",
    flights: [
      {
        number: "EK381",
        airline: "阿联酋航空",
        departure: {
          city: "香港",
          code: "HKG",
          time: "00:50",
          date: "2月11日"
        },
        arrival: {
          city: "杜拜",
          code: "DXB",
          time: "06:15",
          date: "2月11日"
        },
        duration: "8小时25分钟",
        aircraft: "Boeing 777"
      },
      {
        number: "EK923",
        airline: "阿联酋航空",
        departure: {
          city: "杜拜",
          code: "DXB",
          time: "15:20",
          date: "2月11日"
        },
        arrival: {
          city: "开罗",
          code: "CAI",
          time: "18:50",
          date: "2月11日"
        },
        duration: "5小时30分钟",
        aircraft: "Boeing 777"
      }
    ],
    activities: [
      {
        name: "哈利法塔",
        description: "世界最高建筑,登顶俯瞰杜拜全景,感受现代建筑的奇迹。"
      },
      {
        name: "帆船酒店",
        description: "标志性的七星级豪华酒店,在其海滩享用午餐。"
      },
      {
        name: "黄金市场",
        description: "传统的阿拉伯集市,体验异域风情和购物文化。"
      }
    ],
    hotel: {
      name: "Hilton Cairo Nile Maadi",
      description: "坐落于尼罗河畔,现代化设施配合河景,是舒适的休憩港湾",
      image: "/images/VfGLhY0aGgRw.jpg"
    },
    images: [
      "/images/lJUDjuRtQ0lH.jpg",
      "/images/Csh1XSpKbTiK.jpg",
      "/images/Eqk9lK7IzunI.webp"
    ]
  },
  {
    day: 2,
    date: "2月12日",
    title: "探寻法老的永恒",
    description: "今天将正式踏上古埃及文明的探索之旅,亲眼见证那些只在历史书中出现过的宏伟奇迹。",
    activities: [
      {
        name: "吉萨金字塔群",
        description: "近距离观赏胡夫金字塔、哈夫拉金字塔和门卡拉金字塔,以及守护千年的狮身人面像。这是古代世界七大奇迹中唯一留存至今的瑰宝。",
        image: "/images/mtAfsPqJuwsr.jpg"
      },
      {
        name: "大埃及博物馆",
        description: "参观世界上最大的单一文明博物馆,欣赏图坦卡蒙法老的黄金面具和完整墓葬珍宝,以及雄伟的胡夫太阳船。",
        image: "/images/YIyrvT7JKt0k.jpg"
      }
    ],
    hotel: {
      name: "Hilton Cairo Nile Maadi",
      description: "继续入住尼罗河畔酒店"
    }
  },
  {
    day: 3,
    date: "2月13日",
    title: "开罗古城掠影与飞往南方明珠",
    description: "在开罗的最后半天,我们将深入探索这座千年古城的宗教与市井文化。傍晚搭乘航班飞往阿斯旺。",
    flights: [
      {
        number: "SM 135",
        airline: "Air Cairo",
        departure: {
          city: "开罗",
          code: "CAI",
          time: "18:20",
          date: "2月13日"
        },
        arrival: {
          city: "阿斯旺",
          code: "ASW",
          time: "20:00",
          date: "2月13日"
        },
        duration: "1小时40分钟",
        aircraft: "Airbus A320"
      }
    ],
    activities: [
      {
        name: "哈里里市场",
        description: "穿梭于开罗最古老、最热闹的集市,体验浓郁的阿拉伯风情,挑选独特的纪念品。",
        image: "/images/liZCMoIVFPpj.jpg"
      },
      {
        name: "萨拉丁城堡",
        description: "登上穆卡塔姆山,参观12世纪的宏伟城堡和穆罕默德·阿里清真寺,俯瞰开罗全景。",
        image: "/images/5O00eSRjj8Rf.jpg"
      },
      {
        name: "洞穴教堂",
        description: "探访完全在山体中开凿的圣西蒙修道院,感受科普特基督徒的坚定信仰。",
        image: "/images/Vz4oh7ubLhJE.jpg"
      }
    ],
    hotel: {
      name: "Pyramisa Island Hotel Aswan",
      description: "位于尼罗河中央岛屿,被28英亩葱郁花园环绕,需乘船登岛,享受无与伦比的宁静",
      image: "/images/xOQwky5Uj23O.jpg"
    }
  },
  {
    day: 4,
    date: "2月14日",
    title: "阿斯旺的悠然时光",
    description: "在埃及最南端的城市,体验历史与现代的交融,享受尼罗河的宁静与浪漫。",
    activities: [
      {
        name: "菲莱神庙",
        description: "乘船前往阿吉勒基亚岛,参观被誉为'尼罗河上的珍珠'的神庙,欣赏供奉女神伊西斯的精美浮雕。",
        image: "/images/Xo9Zei0ag6pK.jpg"
      },
      {
        name: "阿斯旺大坝",
        description: "参观20世纪的伟大工程,站在宏伟的大坝上,一边是浩瀚的纳赛尔湖,另一边是奔流的尼罗河。",
        image: "/images/BhQz1LAEfhUH.jpg"
      },
      {
        name: "老瀑布酒店下午茶",
        description: "在阿加莎·克里斯蒂创作《尼罗河上的惨案》的传奇酒店,享用优雅的英式下午茶。",
        image: "/images/m3WM0uPpXeab.jpg"
      },
      {
        name: "尼罗河日落游船",
        description: "乘坐传统白色风帆船Felucca,在金色日落中缓缓漂流,体验埃及最浪漫的时刻。",
        image: "/images/Cq9hJQfcCDuK.jpg"
      }
    ],
    hotel: {
      name: "Pyramisa Island Hotel Aswan",
      description: "继续享受岛屿酒店的宁静"
    }
  },
  {
    day: 5,
    date: "2月15日",
    title: "驶向众神之城",
    description: "告别宁静的阿斯旺,驱车4小时向北前往'世界上最大的露天博物馆'卢克索,穿越尼罗河谷欣赏从沙漠到绿洲的壮丽风光。",
    transport: "乘车前往卢克索,约4小时车程,沿途欣赏尼罗河谷风光",
    activities: [
      {
        name: "卡纳克神庙群",
        description: "探访世界上规模最大的古代宗教建筑群,穿行于134根巨型石柱组成的大柱厅,感受众神居所的震撼。",
        image: "/images/PJwY6phPzOFe.jpg"
      },
      {
        name: "卢克索神庙",
        description: "傍晚参观市中心的卢克索神庙,在柔和灯光中欣赏拉美西斯二世的巨像和方尖碑,体验穿越时空的魔幻氛围。",
        image: "/images/lgKldNqaj1os.jpg"
      }
    ],
    hotel: {
      name: "Steigenberger Resort Achti",
      description: "五星级度假酒店,坐拥尼罗河东岸绝佳位置,可眺望河景与对岸的底比斯群山",
      image: "/images/enrGwUCwBobw.jpg"
    }
  },
  {
    day: 6,
    date: "2月16日",
    title: "探秘帝王陵寝与驶向红海",
    description: "跨越尼罗河探索西岸的'死者之城',之后驱车穿越东部沙漠前往红海之滨的赫尔嘎达。",
    transport: "乘车前往赫尔嘎达,途经丹达拉神庙,穿越东部沙漠,欣赏从河谷到沙漠再到海岸的景观变化(约5-6小时)",
    activities: [
      {
        name: "帝王谷",
        description: "深入荒芜山谷,探寻新王国时期法老们的秘密陵墓,观赏数千年前绘制的精美壁画。",
        image: "/images/51kFS9Oonkl9.jpg"
      },
      {
        name: "门农巨像",
        description: "在两尊高18米的阿蒙霍特普三世坐像前停留,它们已在沙漠中静坐超过3400年。",
        image: "/images/bBVUuc8XGhW3.jpg"
      },
      {
        name: "丹达拉神庙",
        description: "中途参观供奉爱与美之女神哈索尔的神庙,欣赏保存完好的天文天花板和独特的女神头像柱。",
        image: "/images/oCSmgNtMzPhL.jpg"
      }
    ],
    hotel: {
      name: "Hilton Hurghada Plaza",
      description: "全包式度假酒店,拥有私人海滩和完善的休闲设施,开启海滨假日",
      image: "/images/Ane5xWG1Gw2l.jpg"
    }
  },
  {
    day: 7,
    date: "2月17日",
    title: "红海假日,与海豚共舞",
    description: "彻底告别古迹的厚重,全身心投入红海的蔚蓝怀抱。全包式酒店提供一切所需,唯一的'任务'就是放松和享受。",
    activities: [
      {
        name: "出海追逐海豚与浮潜",
        description: "乘船前往'海豚之家',在自然栖息地与海洋精灵相遇,在色彩斑斓的珊瑚礁区浮潜探索海底世界。",
        image: "/images/red-sea-dolphins.png"
      },
      {
        name: "沙漠冲沙探险",
        description: "乘坐四驱越野车在沙丘间驰骋,参观贝都因村落,骑骆驼欣赏沙漠日落,在星空下享用贝都因晚餐。",
        image: "/images/JxuThLKcF1fu.jpg"
      },
      {
        name: "酒店躺平",
        description: "在私人海滩的躺椅上读书,在清澈泳池中畅游,或在海滨酒吧点一杯饮品,静静欣赏海天一色。",
        image: "/images/dPkXETI1nZqz.jpg"
      }
    ],
    hotel: {
      name: "Hilton Hurghada Plaza",
      description: "继续享受全包式海滨度假"
    }
  },
  {
    day: 8,
    date: "2月18日",
    title: "告别红海,返回开罗",
    description: "享受最后一个悠闲的上午后,驱车5小时返回开罗,再次穿越壮丽的东部沙漠。",
    transport: "乘车返回开罗,约5小时,沿途欣赏红海海岸线、沙漠山脉和笔直公路构成的壮美画卷",
    activities: [
      {
        name: "新开罗购物",
        description: "在现代化购物中心(如Cairo Festival City Mall)进行最后的购物,购买纸莎草画、香精和手工艺品作为纪念。"
      }
    ],
    images: ["/images/meDZIb95m8IN.jpg"]
  },
  {
    day: 9,
    date: "2月19日",
    title: "归途",
    description: "凌晨搭乘阿联酋航空航班,经杜拜转机返回香港。这段充满奇迹与感动的埃及新年之旅画上圆满句号。",
    flights: [
      {
        number: "EK926",
        airline: "阿联酋航空",
        departure: {
          city: "开罗",
          code: "CAI",
          time: "01:30",
          date: "2月19日"
        },
        arrival: {
          city: "杜拜",
          code: "DXB",
          time: "06:00",
          date: "2月19日"
        },
        duration: "5小时30分钟",
        aircraft: "Boeing 777"
      },
      {
        number: "EK380",
        airline: "阿联酋航空",
        departure: {
          city: "杜拜",
          code: "DXB",
          time: "09:00",
          date: "2月19日"
        },
        arrival: {
          city: "香港",
          code: "HKG",
          time: "22:30",
          date: "2月19日"
        },
        duration: "8小时30分钟",
        aircraft: "Boeing 777"
      }
    ]
  }
];
