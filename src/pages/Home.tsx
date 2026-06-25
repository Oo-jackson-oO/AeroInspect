import { Link } from 'react-router-dom';
import { advantages } from '../mock/data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

/* 数字递增动画组件 */
function AnimatedCounter({ end, suffix = '', duration = 1500 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-3xl font-bold text-brand-500 mb-1">
      {count}
      <span className="text-sm font-normal text-text-secondary ml-1">{suffix}</span>
    </div>
  );
}

export function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-surface text-text-primary">
      {/* Hero Banner */}
      <section className="relative h-[600px] md:h-[700px] max-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 h-[130%] -top-[15%]"
          style={{ y: y1 }}
        >
          <img
            src="./images/hero-bg.webp"
            alt="风机叶片无人机巡检"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-500 opacity-50 mix-blend-multiply" />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            机-巢-云一体化风机叶片智能巡检解决方案
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-medium"
          >
            亚米级定位精度、94.5%缺陷识别准确率，大幅降低风场运维成本
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-600 text-white font-medium rounded-lg text-lg shadow-md focus-visible:ring-2 focus-visible:ring-white/50 inline-block transition-colors duration-200"
              >
                了解产品
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium border border-white/30 rounded-lg text-lg backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-white/50 inline-block transition-colors duration-200"
              >
                申请演示
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advantages & Case Section */}
      <section className="py-24 relative z-20 bg-surface-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Advantages */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10"
              >
                <h2 className="text-3xl font-bold text-brand-500 mb-4">项目优势</h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-1 bg-success mb-6 rounded-full"
                />
              </motion.div>
              <div className="space-y-5">
                {advantages.map((adv, index) => (
                  <motion.div
                    key={adv.id}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: index * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    className="flex items-start gap-4 p-6 bg-surface rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.05)] border border-gray-100"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.45 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-success shrink-0 mt-0.5" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary mb-2">{adv.title}</h3>
                      <p className="text-text-secondary leading-relaxed text-sm">{adv.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Case */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10"
              >
                <h2 className="text-3xl font-bold text-brand-500 mb-4">乾安风电场落地</h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-1 bg-brand-500 mb-6 rounded-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface rounded-xl shadow-[8px_8px_24px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <p className="text-text-secondary leading-relaxed mb-8">
                    本方案已落地吉林乾安风电场，针对10台三期风机完成部署测试，累计采集双光巡检图像1000余张，缺陷识别准确率达98%，帮助风场降低运维成本30%，减少非计划停机时长20%，覆盖风机127台。
                  </p>

                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { end: 10, suffix: '台', label: '覆盖风机数' },
                      { end: 120, suffix: 'km', label: '累计巡检里程' },
                      { end: 98, suffix: '%', label: '缺陷检出率', color: 'text-success' },
                      { end: 30, suffix: '%', label: '降低运维成本', color: 'text-success' },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        className="p-4 bg-surface-white rounded-lg border border-gray-100 shadow-sm text-center"
                      >
                        <div className={stat.color || 'text-brand-500'}>
                          <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                        </div>
                        <div className="text-xs text-text-secondary">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.65, duration: 0.4 }}
                  >
                    <Link
                      to="/cases"
                      className="mt-8 flex items-center justify-center gap-2 text-brand-500 font-medium hover:text-brand-600 transition-colors duration-200 group"
                    >
                      查看完整案例分析{' '}
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl font-bold text-brand-500 mb-16"
          >
            全球合作伙伴
          </motion.h2>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-40">
            {[
              { src: './images/partner-1.webp', alt: '国家电网', className: 'h-32 md:h-48' },
              { src: './images/partner-2.webp', alt: '大疆创新', className: 'h-24 md:h-36' },
              { src: './images/partner-3.webp', alt: '英伟达', className: 'h-32 md:h-48' },
            ].map((partner, i) => (
              <motion.img
                key={partner.alt}
                src={partner.src}
                alt={partner.alt}
                className={`${partner.className} object-contain drop-shadow-sm`}
                loading="lazy"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
