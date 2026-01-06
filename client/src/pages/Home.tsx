/**
 * Home Page - Egypt Trip Itinerary (Luxury Mystery Edition)
 * Design Philosophy: Luxury Egyptian Mystery
 * - Deep black background with gold accents
 * - Mysterious, elegant lighting effects
 * - Sharp, refined corners and typography
 * - Complete flight information with times and durations
 */

import DayCard from "@/components/DayCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Plane, MapPin, Calendar } from "lucide-react";
import { itineraryData } from "@/data/itinerary";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Luxury dark with mysterious lighting */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background with multiple layers */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-background" />
          
          {/* Hero image with overlay */}
          <div className="absolute inset-0">
            <img 
              src="/images/hero-luxury-pyramid.png" 
              alt="Luxury Pyramid" 
              className="w-full h-full object-cover mix-blend-screen opacity-40"
            />
          </div>

          {/* Animated orbs */}
          <motion.div
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          />
        </div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block mb-6 px-6 py-2 bg-accent/20 border border-accent/50 rounded-full">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">奢华之旅</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 drop-shadow-2xl leading-tight">
              西九龙厦门新年埃及行
            </h1>
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-foreground/80 font-light mb-4">
              穿越时空,探寻法老的永恒秘密
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-wrap sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            <div className="bg-card/80 backdrop-blur-md rounded-lg px-4 sm:px-6 py-3 sm:py-4 shadow-xl border border-primary/30 flex items-center gap-3 w-full sm:w-auto">
              <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="text-left min-w-0">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">出发日期</div>
                <div className="font-semibold text-foreground text-sm sm:text-base">2026年2月11日</div>
              </div>
            </div>
            <div className="bg-card/80 backdrop-blur-md rounded-lg px-4 sm:px-6 py-3 sm:py-4 shadow-xl border border-primary/30 flex items-center gap-3 w-full sm:w-auto">
              <Plane className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="text-left min-w-0">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">行程天数</div>
                <div className="font-semibold text-foreground text-sm sm:text-base">9天8晚</div>
              </div>
            </div>
            <div className="bg-card/80 backdrop-blur-md rounded-lg px-4 sm:px-6 py-3 sm:py-4 shadow-xl border border-primary/30 flex items-center gap-3 w-full sm:w-auto">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="text-left min-w-0">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">目的地</div>
                <div className="font-semibold text-foreground text-sm sm:text-base">埃及</div>
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
              className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 rounded-lg shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all bg-accent text-accent-foreground w-full sm:w-auto"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              开始探索奇妙之旅
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
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-accent rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/10 to-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container max-w-4xl mx-auto"
        >
          <div className="bg-card/60 backdrop-blur-md rounded-lg p-8 md:p-12 shadow-2xl border border-primary/30">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
            欢迎踏上这场奢华的埃及之旅
          </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                亲爱的旅伴们,我们即将一同踏上一片古老而神秘的土地,亲身感受横跨七千年的璀璨文明。在这趟精心策划的旅程中,我们将站在雄伟的金字塔脚下,仰望法老的智慧与永恒;漫步于宏伟的神庙廊柱之间,聆听众神与英雄的古老传说;乘坐传统风帆船,在尼罗河的金色日落下悠然漂流;最后,我们还将在红海的蔚蓝怀抱中,与海豚共舞,享受悠闲的度假时光。
              </p>
              <p>
                从开罗的千年古韵到阿斯旺的静谧风光,从卢克索的露天博物馆到赫尔嘎达的碧海金沙,每一站都经过精心安排。除赫尔嘎达躺平日外,全程配备中文导游讲解历史并陪同,全程Toyota HIACE商务车,确保您的舒适与安全。
              </p>
              <p className="font-semibold text-accent text-lg text-center mt-8">
                请放松心情,带上您的好奇心与探索精神。让我们共同期待,在这片充满奇迹的土地上,创造属于我们自己的美好回忆!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Itinerary Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground"
          >
            详细行程安排
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-foreground/60 mb-16 text-lg"
          >
            每一天都精心设计,每一刻都值得期待
          </motion.p>

          <div className="space-y-8">
            {itineraryData.map((day, index) => (
              <DayCard key={day.day} {...day} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/10 to-background">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/60 backdrop-blur-md rounded-lg p-8 md:p-12 shadow-2xl border border-primary/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              出行准备清单
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2 uppercase tracking-wide">
                  <span>📋</span> 重要证件
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>护照及复印件</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>埃及签证(电子或贴纸)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>机票及酒店确认单</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-accent mb-4 mt-8 flex items-center gap-2 uppercase tracking-wide">
                  <span>👕</span> 衣物装备
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>轻便外套(早晚温差大)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>T恤、长裤、连衣裙</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>泳衣(赫尔嘎达必备)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>舒适的步行鞋和拖鞋</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2 uppercase tracking-wide">
                  <span>☀️</span> 防晒用品
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>高倍数防晒霜(SPF 50+)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>太阳镜和遮阳帽</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-accent mb-4 mt-8 flex items-center gap-2 uppercase tracking-wide">
                  <span>🎒</span> 个人用品
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>常用药品(肠胃药、感冒药)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>洗漱用品</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>转换插头(欧标)和移动电源</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>少量美元现金(用于小费)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-accent/20 rounded-lg border border-accent/30">
              <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2 uppercase tracking-wide">
                <span>✨</span> 特别提示
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>导游服务:</strong> 除赫尔嘎达躺平日外,全程配备中文导游讲解历史并陪同</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>交通工具:</strong> 全程Toyota HIACE商务车,舒适豪华</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>气候:</strong> 2月埃及气候宜人,白天温暖(25-28°C),早晚较凉(15-18°C),注意增减衣物</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download PDF Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-accent to-primary rounded-lg p-12 shadow-2xl text-accent-foreground border border-accent/50">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              下载PDF行程小册子
            </h2>
            <p className="text-lg mb-8 opacity-90">
              精美的PDF版本,方便您随时查阅和打印分享给旅伴
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
              onClick={() => {
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
      <footer className="py-12 px-6 bg-primary/20 border-t border-primary/30">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-2xl font-semibold text-foreground mb-4">
            祝大家旅途愉快,新年快乐!
          </p>
          <p className="text-muted-foreground">
            西九龙厦门新年埃及行 · 2026年2月 · 奢华之旅
          </p>
        </div>
      </footer>
    </div>
  );
}
