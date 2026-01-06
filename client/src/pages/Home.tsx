/**
 * Home Page - Egypt Trip Itinerary
 * Design Philosophy: Nile River flowing narrative
 * - Flowing S-curve layout with alternating content
 * - Warm sandy to deep teal color gradient
 * - Organic rounded shapes and wave dividers
 * - Playfair Display for headings, Raleway/Noto Sans SC for body
 */

import DayCard from "@/components/DayCard";
import WaveDivider from "@/components/WaveDivider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Plane, MapPin, Calendar } from "lucide-react";

export default function Home() {
  const itinerary = [
    {
      day: 1,
      date: "2月11日",
      title: "启程与中转奇遇",
      description: "凌晨12:50从香港出发,搭乘阿联酋航空EK381经杜拜转机。在杜拜有9小时转机时间,我们将快速游览哈利法塔、帆船酒店和黄金市场,感受这座未来之城的魅力。傍晚搭乘EK923抵达开罗。",
      transport: "航班: EK381 (香港-杜拜) + EK923 (杜拜-开罗)",
      images: [
        "/images/lJUDjuRtQ0lH.jpg",
        "/images/Csh1XSpKbTiK.jpg",
        "/images/Eqk9lK7IzunI.webp"
      ],
      hotel: {
        name: "Hilton Cairo Nile Maadi",
        description: "坐落于尼罗河畔,现代化设施配合河景,是舒适的休憩港湾",
        image: "/images/VfGLhY0aGgRw.jpg"
      }
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
      description: "在开罗的最后半天,我们将深入探索这座千年古城的宗教与市井文化。傍晚18:20搭乘Air Cairo SM 135飞往阿斯旺。",
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
      transport: "航班: Air Cairo SM 135 (开罗-阿斯旺) 18:20起飞",
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
      transport: "乘车前往赫尔嘎达,途经丹达拉神庙,穿越东部沙漠,欣赏从河谷到沙漠再到海岸的景观变化",
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
      description: "凌晨搭乘阿联酋航空EK926和EK380航班,经杜拜转机返回香港。这段充满奇迹与感动的埃及新年之旅画上圆满句号。",
      transport: "航班: EK926 (开罗-杜拜) + EK380 (杜拜-香港)"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with flowing gradient background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3] via-[#C38D5E] to-[#1A535C]">
          <div className="absolute inset-0 opacity-30">
            <img 
              src="/images/hero-nile-sunset.png" 
              alt="Nile River Sunset" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
        </div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1E3A5F] mb-6 drop-shadow-lg">
              西九龙厦门新年埃及行
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-[#1E3A5F]/90 font-light mb-4" style={{ fontFamily: 'var(--font-script)' }}>
              诚邀您共赴一场穿越时空的奇妙旅程
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">出发日期</div>
                <div className="font-semibold text-foreground">2026年2月11日</div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3">
              <Plane className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">行程天数</div>
                <div className="font-semibold text-foreground">9天8晚</div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">目的地</div>
                <div className="font-semibold text-foreground">埃及</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              开始探索旅程
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      <WaveDivider variant="warm" />

      {/* Introduction Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#C38D5E] to-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container max-w-4xl mx-auto"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              欢迎开启这场期待已久的探索之旅
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-4">
              <p>
                亲爱的旅伴们,我们即将一同踏上一片古老而神秘的土地,亲身感受横跨七千年的璀璨文明。在这趟旅程中,我们将站在雄伟的金字塔脚下,仰望法老的智慧与永恒;漫步于宏伟的神庙廊柱之间,聆听众神与英雄的古老传说;乘坐传统风帆船,在尼罗河的金色日落下悠然漂流;最后,我们还将在红海的蔚蓝怀抱中,与海豚共舞,享受悠闲的度假时光。
              </p>
              <p>
                从开罗的千年古韵到阿斯旺的静谧风光,从卢克索的露天博物馆到赫尔嘎达的碧海金沙,每一站都经过精心安排。为了让大家对这次旅行有更清晰的认识和更充分的准备,我们特别制作了这个行程网站和PDF小册子。
              </p>
              <p className="font-semibold text-accent text-xl text-center mt-8">
                请放松心情,带上您的好奇心与探索精神。让我们共同期待,在这片充满奇迹的土地上,创造属于我们自己的美好回忆!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <WaveDivider variant="teal" flip />

      {/* Itinerary Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
          >
            详细行程安排
          </motion.h2>

          <div className="space-y-8">
            {itinerary.map((day, index) => (
              <DayCard key={day.day} {...day} index={index} />
            ))}
          </div>
        </div>
      </section>

      <WaveDivider variant="coral" />

      {/* Travel Tips Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent/20 to-background">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              出行准备清单
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-accent">📋</span> 重要证件
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>护照及复印件</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>埃及签证(电子或贴纸)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>机票及酒店确认单</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8 flex items-center gap-2">
                  <span className="text-accent">👕</span> 衣物装备
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>轻便外套(早晚温差大)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>T恤、长裤、连衣裙</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>泳衣(赫尔嘎达必备)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>舒适的步行鞋和拖鞋</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-accent">☀️</span> 防晒用品
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>高倍数防晒霜</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>太阳镜和遮阳帽</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8 flex items-center gap-2">
                  <span className="text-accent">🎒</span> 个人用品
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>常用药品(肠胃药、感冒药)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>洗漱用品</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>转换插头(欧标)和移动电源</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>少量美元现金(用于小费)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-2xl">✨</span> 特别提示
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>导游服务:</strong> 除赫尔嘎达躺平日外,全程配备中文导游讲解历史并陪同</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>交通工具:</strong> 全程Toyota HIACE商务车,舒适豪华</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>气候:</strong> 2月埃及气候宜人,白天温暖,早晚较凉,注意增减衣物</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <WaveDivider variant="blue" flip />

      {/* Download PDF Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/10 to-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 shadow-2xl text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              下载PDF行程小册子
            </h2>
            <p className="text-lg mb-8 opacity-90">
              精美的PDF版本,方便您随时查阅和打印分享
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
              onClick={() => {
                // In a real implementation, this would trigger PDF download
                alert('PDF下载功能将在实际部署时启用');
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              下载PDF小册子
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-foreground/5">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-script)' }}>
            祝大家旅途愉快,新年快乐!
          </p>
          <p className="text-muted-foreground">
            西九龙厦门新年埃及行 · 2026年2月
          </p>
        </div>
      </footer>
    </div>
  );
}
