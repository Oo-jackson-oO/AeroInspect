import { Link } from 'react-router-dom';
import { advantages, caseData } from '../mock/data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 500]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#F5F7FA] text-[#1D2129]">
      {/* Hero Banner */}
      <section className="relative h-[600px] md:h-[700px] max-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 h-[150%] -top-1/4"
          style={{ y: y1 }}
        >
          <img src="./images/hero-bg.jpg" alt="Drone Inspection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0B3D91] opacity-70 mix-blend-multiply"></div>
        </motion.div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center pt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            机-巢-云一体化风机叶片智能巡检解决方案
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-medium"
          >
            亚米级定位精度、94.5%缺陷识别准确率，大幅降低风场运维成本
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/products" className="w-full sm:w-auto px-8 py-3 bg-[#FF7D00] hover:bg-[#e67000] text-white font-medium rounded-lg text-lg transition-colors shadow-md">
              了解产品
            </Link>
            <Link to="/about" className="w-full sm:w-auto px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium border border-white/30 rounded-lg text-lg transition-colors backdrop-blur-sm">
              申请演示
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Advantages & Case Section */}
      <section className="py-24 relative z-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Advantages */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#0B3D91] mb-4">项目优势</h2>
                <div className="w-12 h-1 bg-[#36B37E] mb-6"></div>
              </div>
              <div className="space-y-6">
                {advantages.map((adv, index) => (
                  <motion.div 
                    key={adv.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-4 p-6 bg-[#F5F7FA] rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-[4px_4px_12px_rgba(0,0,0,0.1)]"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#36B37E] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-[#1D2129] mb-2">{adv.title}</h3>
                      <p className="text-[#86909C] leading-relaxed text-sm">{adv.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Case */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#0B3D91] mb-4">乾安风电场落地</h2>
                <div className="w-12 h-1 bg-[#0B3D91] mb-6"></div>
              </div>
              <div className="bg-[#F5F7FA] rounded-xl shadow-[8px_8px_24px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden">
                <div className="h-64 relative bg-slate-200">
                  <img src="./images/home-case.jpg" alt="乾安风电场" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <span className="text-sm font-medium text-[#86909C] bg-white/90 px-3 py-1 rounded shadow-sm">乾安风电场实拍图</span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[#86909C] leading-relaxed mb-8">
                    本方案已落地吉林乾安风电场，针对10台三期风机完成部署测试，累计采集双光巡检图像1000余张，缺陷识别准确率达98%，帮助风场降低运维成本30%，减少非计划停机时长20%，覆盖风机127台。
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm text-center">
                      <div className="text-3xl font-bold text-[#0B3D91] mb-1">10<span className="text-sm font-normal text-[#86909C] ml-1">台</span></div>
                      <div className="text-xs text-[#86909C]">覆盖风机数</div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm text-center">
                      <div className="text-3xl font-bold text-[#0B3D91] mb-1">120<span className="text-sm font-normal text-[#86909C] ml-1">km</span></div>
                      <div className="text-xs text-[#86909C]">累计巡检里程</div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm text-center">
                      <div className="text-3xl font-bold text-[#36B37E] mb-1">98<span className="text-sm font-normal text-[#86909C] ml-1">%</span></div>
                      <div className="text-xs text-[#86909C]">缺陷检出率</div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm text-center">
                      <div className="text-3xl font-bold text-[#36B37E] mb-1">30<span className="text-sm font-normal text-[#86909C] ml-1">%</span></div>
                      <div className="text-xs text-[#86909C]">降低运维成本</div>
                    </div>
                  </div>

                  <Link to="/cases" className="mt-8 flex items-center justify-center gap-2 text-[#0B3D91] font-medium hover:text-[#093072] transition-colors group">
                    查看完整案例分析 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0B3D91] mb-16">全球合作伙伴</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-40">
            <img src="./images/partner-1.png" alt="国网" className="h-32 md:h-48 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
            <img src="./images/partner-2.png" alt="大疆" className="h-24 md:h-36 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
            <img src="./images/partner-3.png" alt="英伟达" className="h-32 md:h-48 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
          </div>
        </div>
      </section>
    </div>
  );
}
