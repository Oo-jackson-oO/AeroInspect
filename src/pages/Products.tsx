import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'motion/react';
import { Package, CalendarCheck, Code2, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* 数字递增（进入视野时触发） */
function CountUpInView({ value, prefix = '', duration = 1200 }: { value: string | number; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    const target = typeof value === 'string' ? parseFloat(value) : value;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(start); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  const display = Number.isInteger(typeof value === 'string' ? parseFloat(value) : value)
    ? Math.floor(count)
    : count.toFixed(1);

  return (
    <span ref={ref} className="tabular-nums font-bold">
      {prefix}{display}
    </span>
  );
}

const models = [
  {
    id: 'equipment',
    title: '设备销售·一站式交付',
    desc: '硬件+平台+现场部署全链路交付，一次采购长期自主使用',
    icon: Package,
    cta: '查看配置清单',
    features: [
      { title: '硬件套装', desc: '包含大疆M3TD双光无人机1台、大疆机场2自动机巢1套、天途云盒边缘计算节点1台、NVIDIA Jetson AGX Orin算力板1块，支持-20℃~50℃极端环境作业，IP55防尘防水' },
      { title: '软件平台', desc: '交付全套"机-巢-云"一体化运维管理系统，包含风机资产管理、巡检任务调度、缺陷数据可视化、巡检报告自动生成4大核心功能模块' },
      { title: '现场服务', desc: '包含7天现场部署调试、3天运维人员操作培训、1年免费硬件质保+软件迭代服务' },
    ],
    stats: [
      { label: '叶尖定位精度(<m)', prefix: '<', value: 0.8 },
      { label: '缺陷检测准确率(%)', value: 94.5 },
      { label: '单台巡检耗时(分钟)', value: 17 },
      { label: '支持缺陷类型(类)', value: 8 },
    ],
    image: './images/service-equipment-full.jpg',
  },
  {
    id: 'inspection',
    title: '巡检服务·全托管代运维',
    desc: '无需采购硬件，按年付费享受专业巡检团队全流程服务',
    icon: CalendarCheck,
    cta: '查看服务明细',
    features: [
      { title: '基础服务', desc: '按季度完成所有签约风机的全量巡检，每台风机全年覆盖4次完整巡检，每次巡检后3个工作日内交付标准化缺陷检测报告' },
      { title: '增值服务', desc: '提供缺陷演化趋势预警、运维方案建议、年度风机健康状态评估报告，7*24小时应急巡检响应' },
      { title: '配套权益', desc: '专属运维对接人、巡检数据永久云端存储、免费享受算法模型迭代升级' },
    ],
    stats: [
      { label: '缺陷检出率(%)', value: 98 },
      { label: '运维成本降低(%)', value: 30 },
      { label: '非计划停机减少(%)', value: 20 },
    ],
    image: './images/service-inspection-full.jpg',
  },
  {
    id: 'licensing',
    title: '技术授权·能力开放赋能',
    desc: '开放核心算法API接口，快速集成至自有巡检/运维系统',
    icon: Code2,
    cta: '查看接口文档',
    features: [
      { title: '授权接口清单', desc: '叶尖定位接口（误差<0.8m）、缺陷检测接口（支持8类，准确率94.5%）、路径规划接口（平行式/圆周式）、变化检测接口（提前3-6个月预警）' },
      { title: '授权模式说明', desc: '按调用量付费（适合中小规模运维企业），年度买断授权（适合大型设备厂商/风场运营商，无限量调用，支持定制化开发）' },
    ],
    stats: [],
    image: './images/service-licensing-full.jpg',
  },
];

export function Products() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const [expandedId, setExpandedId] = useState<string | null>('equipment');

  return (
    <div className="bg-surface min-h-screen pb-32 font-sans text-text-primary">
      {/* Banner */}
      <section className="relative min-h-[250px] md:min-h-[450px] overflow-hidden flex items-center justify-center">
        <motion.div className="absolute inset-0 z-0 h-[130%] -top-[15%]" style={{ y: y1 }}>
          <img src="./images/products-banner-bg.jpg" alt="风机实拍" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-500 opacity-40" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl pt-8">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            全场景风机巡检商业化合作方案
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-medium"
          >
            覆盖硬件采购、代运维服务、技术授权三类合作模式，匹配不同风场/企业需求
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 space-y-6">
        {models.map((mod, index) => {
          const isExpanded = expandedId === mod.id;

          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'bg-surface-white rounded-xl overflow-hidden cursor-pointer border border-transparent',
                isExpanded
                  ? 'shadow-[8px_8px_24px_rgba(0,0,0,0.15)] border-gray-100'
                  : 'shadow-[1px_1px_6px_rgba(0,0,0,0.06)] hover:shadow-[4px_4px_14px_rgba(0,0,0,0.1)] hover:border-gray-100',
              )}
              onClick={() => setExpandedId(isExpanded ? null : mod.id)}
              layout
            >
              {/* Header */}
              <div className="h-[120px] px-6 md:px-8 flex items-center justify-between group">
                <div className="flex items-center gap-4 md:gap-6">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.08, backgroundColor: 'var(--color-brand-50)' }}
                    transition={{ duration: 0.25 }}
                  >
                    <mod.icon className="w-7 h-7 md:w-8 md:h-8 text-brand-500" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-1">{mod.title}</h3>
                    <p className="text-text-secondary text-sm md:text-base hidden sm:block">{mod.desc}</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  onClick={(e) => { e.stopPropagation(); setExpandedId(isExpanded ? null : mod.id); }}
                  className={cn(
                    'px-4 md:px-6 py-2.5 rounded-lg flex items-center gap-1 md:gap-2 font-medium shrink-0',
                    'text-white bg-brand-500',
                    !isExpanded && 'group-hover:bg-accent',
                  )}
                  style={isExpanded ? { backgroundColor: 'var(--color-accent)' } : undefined}
                >
                  <span className="hidden md:inline">{mod.cta}</span>
                  <span className="md:hidden">详情</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>

              {/* Expanded Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden border-t border-gray-100"
                  >
                    <div className="flex flex-col lg:flex-row p-6 md:p-8 gap-8 md:gap-12 cursor-default" onClick={(e) => e.stopPropagation()}>
                      {/* Left Column */}
                      <div className="flex-[6] space-y-8">
                        <div className="space-y-6">
                          {mod.features.map((feat, fi) => (
                            <motion.div
                              key={feat.title}
                              initial={{ opacity: 0, x: -16 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.08 * fi, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            >
                              <h4 className="text-base font-semibold text-text-primary mb-2 flex items-center gap-2">
                                <div className="w-1 h-3.5 bg-success rounded-full" />
                                {feat.title}
                              </h4>
                              <p className="text-text-secondary leading-relaxed ml-3 text-sm md:text-base">{feat.desc}</p>
                            </motion.div>
                          ))}
                        </div>

                        {mod.stats.length > 0 && (
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                            {mod.stats.map((stat, si) => (
                              <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + si * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-surface p-4 rounded-lg flex flex-col items-center justify-center text-center"
                              >
                                <div className="text-text-secondary text-xs md:text-sm mb-2 h-8 flex items-center">{stat.label}</div>
                                <div className="text-2xl font-bold text-brand-500">
                                  <CountUpInView value={stat.value} prefix={stat.prefix} />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <motion.div
                        className="flex-[4] flex flex-col justify-center"
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="bg-surface rounded-xl overflow-hidden aspect-video relative">
                          <motion.img
                            initial={{ filter: 'blur(12px)', opacity: 0 }}
                            animate={{ filter: 'blur(0px)', opacity: 1 }}
                            transition={{ duration: 0.35, delay: 0.12 }}
                            src={mod.image}
                            alt={mod.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <Link
                          to="/about"
                          state={{ scrollToContact: true }}
                          onClick={(e) => e.stopPropagation()}
                          className="block mt-6"
                        >
                          <motion.span
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full py-3 rounded-lg text-white font-medium bg-accent hover:bg-accent-600 shadow-sm transition-colors duration-200 text-center inline-block"
                          >
                            {mod.cta === '查看配置清单' ? '获取定制报价' : mod.cta === '查看服务明细' ? '咨询服务报价' : '申请测试密钥'}
                          </motion.span>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
