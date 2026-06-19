import { caseData } from '../mock/data';
import { motion } from 'motion/react';
import { MapPin, Calendar, TrendingUp, ShieldCheck } from 'lucide-react';

export function Cases() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen pb-24">
      {/* Banner */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-sg-blue/80 mix-blend-multiply z-10"></div>
        <img src="/images/case-banner.jpg" alt="乾安风电场" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            {caseData.title}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12">
          
          <div className="space-y-16">
            {/* Background */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-sg-blue mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-sg-green" />
                项目背景
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed bg-slate-50 p-6 rounded-lg border border-slate-100">
                {caseData.background}
              </p>
            </motion.section>

            {/* Implementation */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-sg-blue mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-sg-green" />
                项目实施内容
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed bg-slate-50 p-6 rounded-lg border border-slate-100">
                {caseData.implementation}
              </p>
            </motion.section>

            {/* Results */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-sg-blue mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-sg-green" />
                项目成效
              </h2>
              <div className="space-y-4">
                {caseData.results.map((result, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white border border-slate-200 shadow-sm rounded-xl">
                    <div className="w-10 h-10 bg-sg-blue/5 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-sg-blue font-bold text-lg">{i + 1}</span>
                    </div>
                    <p className="text-slate-700 text-lg flex-1 pt-1.5">{result}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Photos */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-sg-blue mb-6 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-sg-green" />
                现场展示
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "硬件安装图", img: "/images/case-photo-1.jpg" },
                  { title: "无人机巡检作业图", img: "/images/case-photo-2.jpg" },
                  { title: "缺陷检测结果图", img: "/images/case-photo-3.jpg" },
                  { title: "系统后台操作图", img: "/images/case-photo-4.jpg" }
                ].map((photo, i) => (
                  <div key={i} className="group relative rounded-xl overflow-hidden shadow-sm border border-slate-200 aspect-[3/4]">
                    <img src={photo.img} alt={photo.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-sg-blue/90 via-transparent to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 p-4 text-center transition-transform transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-white font-medium text-sm">{photo.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>
        </div>
      </div>
    </div>
  );
}
