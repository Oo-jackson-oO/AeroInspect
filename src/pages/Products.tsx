import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Package, CalendarCheck, Code2, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Stats counter component
const CountUp = ({ value, prefix = "" }: { value: string | number, prefix?: string }) => {
  const [count, setCount] = useState(0);
  const target = typeof value === 'string' ? parseFloat(value) : value;

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const interval = 16;
    const steps = duration / interval;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target]);

  const display = Number.isInteger(target) ? Math.floor(count) : count.toFixed(1);

  return <span className="tabular-nums font-bold">{prefix}{display}</span>;
}

const models = [
  {
    id: 'equipment',
    title: '设备销售·一站式交付',
    desc: '硬件+平台+现场部署全链路交付，一次采购长期自主使用',
    icon: Package,
    cta: '查看配置清单',
    features: [
      {
        title: '硬件套装',
        desc: '包含大疆M3TD双光无人机1台、大疆机场2自动机巢1套、天途云盒边缘计算节点1台、NVIDIA Jetson AGX Orin算力板1块，支持-20℃~50℃极端环境作业，IP55防尘防水'
      },
      {
         title: '软件平台',
         desc: '交付全套“机-巢-云”一体化运维管理系统，包含风机资产管理、巡检任务调度、缺陷数据可视化、巡检报告自动生成4大核心功能模块'
      },
      {
         title: '现场服务',
         desc: '包含7天现场部署调试、3天运维人员操作培训、1年免费硬件质保+软件迭代服务'
      }
    ],
    stats: [
      { label: '叶尖定位精度(<m)', prefix: '<', value: 0.8 },
      { label: '缺陷检测准确率(%)', value: 94.5 },
      { label: '单台巡检耗时(分钟)', value: 17 },
      { label: '支持缺陷类型(类)', value: 8 }
    ],
    image: './images/service-equipment-full.jpg'
  },
  {
    id: 'inspection',
    title: '巡检服务·全托管代运维',
    desc: '无需采购硬件，按年付费享受专业巡检团队全流程服务',
    icon: CalendarCheck,
    cta: '查看服务明细',
    features: [
      {
         title: '基础服务',
         desc: '按季度完成所有签约风机的全量巡检，每台风机全年覆盖4次完整巡检，每次巡检后3个工作日内交付标准化缺陷检测报告'
      },
      {
         title: '增值服务',
         desc: '提供缺陷演化趋势预警、运维方案建议、年度风机健康状态评估报告，7*24小时应急巡检响应'
      },
      {
         title: '配套权益',
         desc: '专属运维对接人、巡检数据永久云端存储、免费享受算法模型迭代升级'
      }
    ],
    stats: [
      { label: '缺陷检出率(%)', value: 98 },
      { label: '运维成本降低(%)', value: 30 },
      { label: '非计划停机减少(%)', value: 20 }
    ],
    image: './images/service-inspection-full.jpg'
  },
  {
    id: 'licensing',
    title: '技术授权·能力开放赋能',
    desc: '开放核心算法API接口，快速集成至自有巡检/运维系统',
    icon: Code2,
    cta: '查看接口文档',
    features: [
      {
         title: '授权接口清单',
         desc: '叶尖定位接口（误差<0.8m）、缺陷检测接口（支持8类，准确率94.5%）、路径规划接口（平行式/圆周式）、变化检测接口（提前3-6个月预警）'
      },
      {
         title: '授权模式说明',
         desc: '按调用量付费（适合中小规模运维企业），年度买断授权（适合大型设备厂商/风场运营商，无限量调用，支持定制化开发）'
      }
    ],
    stats: [],
    image: './images/service-licensing-full.jpg'
  }
];

export function Products() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 500]);

  const [expandedId, setExpandedId] = useState<string | null>('equipment');

  return (
    <div className="bg-[#F5F7FA] min-h-screen pb-32 font-sans text-[#1D2129]">
      {/* Banner */}
      <div className="relative h-[450px] overflow-hidden flex items-center justify-center">
         <motion.div 
           className="absolute inset-0 z-0 h-[150%] -top-1/4"
           style={{ y: y1 }}
         >
           <img src="./images/products-banner-bg.jpg" alt="风机实拍" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-[#0B3D91] opacity-40"></div>
         </motion.div>
         
         <div className="relative z-10 text-center px-4 max-w-4xl pt-8">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
             全场景风机巡检商业化合作方案
           </h1>
           <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-medium">
             覆盖硬件采购、代运维服务、技术授权三类合作模式，匹配不同风场/企业需求
           </p>
         </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 space-y-6">
        {models.map((mod, index) => {
           const isExpanded = expandedId === mod.id;

           return (
             <motion.div
               key={mod.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
               className={cn(
                 "bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border border-transparent",
                 isExpanded 
                   ? "shadow-[8px_8px_24px_rgba(0,0,0,0.15)] border-gray-100" 
                   : "shadow-[2px_2px_8px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[4px_4px_12px_rgba(0,0,0,0.12)] hover:border-gray-100"
               )}
               onClick={() => setExpandedId(isExpanded ? null : mod.id)}
             >
                {/* Header (Folded state area) */}
                <div className="h-[120px] px-6 md:px-8 flex items-center justify-between group">
                   <div className="flex items-center gap-4 md:gap-6">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F5F7FA] flex items-center justify-center shrink-0">
                         <mod.icon className="w-7 h-7 md:w-8 md:h-8 text-[#0B3D91]" />
                      </div>
                      <div>
                         <h3 className="text-xl md:text-2xl font-semibold text-[#1D2129] mb-1">{mod.title}</h3>
                         <p className="text-[#86909C] text-sm md:text-base hidden sm:block">{mod.desc}</p>
                      </div>
                   </div>

                   <motion.button
                     whileTap={{ scale: 0.95 }}
                     transition={{ duration: 0.2 }}
                     onClick={(e) => {
                       e.stopPropagation();
                       setExpandedId(isExpanded ? null : mod.id);
                     }}
                     className={cn(
                       "px-4 md:px-6 py-2.5 rounded-lg flex items-center gap-1 md:gap-2 font-medium transition-colors duration-200 shrink-0",
                       "text-white bg-[#0B3D91] group-hover:bg-[#FF7D00]"
                     )}
                   >
                     <span className="hidden md:inline">{mod.cta}</span>
                     <span className="md:hidden">详情</span>
                     <ChevronRight className={cn(
                       "w-5 h-5 transition-transform duration-300", 
                       isExpanded ? "rotate-90" : "rotate-0"
                     )} />
                   </motion.button>
                </div>

                {/* Expanded Content Area */}
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out border-t",
                    isExpanded 
                      ? "grid-rows-[1fr] opacity-100 border-gray-100" 
                      : "grid-rows-[0fr] opacity-0 border-transparent"
                  )}
                >
                   <div className="overflow-hidden">
                      <div className="flex flex-col lg:flex-row p-6 md:p-8 gap-8 md:gap-12 cursor-default" onClick={(e) => e.stopPropagation()}>
                         {/* Left Column */}
                          <div className="flex-[6] space-y-8">
                             {/* Features */}
                             <div className="space-y-6">
                               {mod.features.map((feat, i) => (
                                 <div key={i}>
                                   <h4 className="text-[17px] font-semibold text-[#1D2129] mb-2 flex items-center gap-2">
                                     <div className="w-1 h-3.5 bg-[#36B37E] rounded-full"></div>
                                     {feat.title}
                                   </h4>
                                   <p className="text-[#86909C] leading-relaxed ml-3 text-sm md:text-base">
                                     {feat.desc}
                                   </p>
                                 </div>
                               ))}
                             </div>

                             {/* Stats */}
                             {mod.stats.length > 0 && (
                               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                                 {mod.stats.map((stat, i) => (
                                   <div key={i} className="bg-[#F5F7FA] p-4 rounded-lg flex flex-col items-center justify-center text-center">
                                      <div className="text-[#86909C] text-xs md:text-sm mb-2 h-8 flex items-center">{stat.label}</div>
                                      <div className="text-2xl font-bold text-[#0B3D91]">
                                         <CountUp value={stat.value} prefix={stat.prefix} />
                                      </div>
                                   </div>
                                 ))}
                               </div>
                             )}
                          </div>

                          {/* Right Column (Image Display) */}
                          <div className="flex-[4] flex flex-col justify-center">
                             <div className="bg-[#F5F7FA] rounded-xl overflow-hidden aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] relative">
                                <motion.img 
                                  initial={{ filter: "blur(10px)", opacity: 0 }}
                                  animate={{ filter: "blur(0px)", opacity: 1 }}
                                  transition={{ duration: 0.3, delay: 0.1 }}
                                  src={mod.image} 
                                  alt={mod.title}
                                  className="absolute inset-0 w-full h-full object-cover" 
                                />
                             </div>
                             
                             <motion.button
                               whileTap={{ scale: 0.95 }}
                               onClick={(e) => e.stopPropagation()}
                               className="mt-6 w-full py-3 rounded-lg text-white font-medium bg-[#FF7D00] hover:bg-[#e67000] transition-colors shadow-sm"
                             >
                               {mod.cta === "查看配置清单" ? "获取定制报价" : mod.cta === "查看服务明细" ? "咨询服务报价" : "申请测试密钥"}
                             </motion.button>
                          </div>
                      </div>
                   </div>
                </div>
             </motion.div>
           );
        })}
      </div>
    </div>
  );
}
