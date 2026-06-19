import { Link } from 'react-router-dom';
import { advantages, caseData } from '../mock/data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-screen min-h-[600px] max-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-sg-blue/70 z-10 mix-blend-multiply"></div>
          <img src="/images/hero-bg.jpg" alt="Drone Inspection" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
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
            className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto mb-10"
          >
            亚米级定位精度、94.5%缺陷识别准确率，大幅降低风场运维成本
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/products" className="w-full sm:w-auto px-8 py-3 bg-sg-green hover:bg-sg-green-light text-white font-medium rounded text-lg transition-colors shadow-lg">
              了解产品
            </Link>
            <Link to="/about" className="w-full sm:w-auto px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium border border-white/30 rounded text-lg transition-colors backdrop-blur-sm">
              申请演示
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Advantages & Case Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Advantages */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">项目优势</h2>
                <div className="w-12 h-1 bg-sg-green mb-6"></div>
              </div>
              <div className="space-y-6">
                {advantages.map((adv, index) => (
                  <motion.div 
                    key={adv.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-slate-100"
                  >
                    <CheckCircle2 className="w-6 h-6 text-sg-green shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{adv.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{adv.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Case */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">乾安风电场落地</h2>
                <div className="w-12 h-1 bg-sg-blue mb-6"></div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-64 relative bg-slate-200">
                  <img src="/images/home-case.jpg" alt="乾安风电场" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-sm font-medium text-slate-500 bg-white/80 px-3 py-1 rounded">乾安风电场实拍图</span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed mb-8">
                    本方案已落地吉林乾安风电场，针对10台三期风机完成部署测试，累计采集双光巡检图像1000余张，缺陷识别准确率达98%，帮助风场降低运维成本30%，减少非计划停机时长20%。
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="text-3xl font-bold text-sg-blue mb-1">10<span className="text-sm font-normal text-slate-500 ml-1">台</span></div>
                      <div className="text-xs text-slate-500">覆盖风机数</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="text-3xl font-bold text-sg-blue mb-1">120<span className="text-sm font-normal text-slate-500 ml-1">km</span></div>
                      <div className="text-xs text-slate-500">累计巡检里程</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="text-3xl font-bold text-sg-blue mb-1">98<span className="text-sm font-normal text-slate-500 ml-1">%</span></div>
                      <div className="text-xs text-slate-500">缺陷检出率</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="text-3xl font-bold text-sg-blue mb-1">30<span className="text-sm font-normal text-slate-500 ml-1">%</span></div>
                      <div className="text-xs text-slate-500">降低运维成本</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-8">合作伙伴</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="/images/partner-1.png" alt="国网" className="h-10 object-contain" />
            <img src="/images/partner-2.png" alt="大疆" className="h-8 object-contain" />
            <img src="/images/partner-3.png" alt="英伟达" className="h-10 object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
