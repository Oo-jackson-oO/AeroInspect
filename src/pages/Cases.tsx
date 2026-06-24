import { caseData } from '../mock/data';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Calendar, TrendingUp, ShieldCheck } from 'lucide-react';

export function Cases() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 500]);

  return (
    <div className="bg-[#F5F7FA] min-h-screen pb-32 font-sans text-[#1D2129]">
      {/* Banner */}
      <div className="relative h-[450px] overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0 h-[150%] -top-1/4"
          style={{ y: y1 }}
        >
          <img src="./images/case-banner.jpg" alt="乾安风电场" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0B3D91] opacity-40"></div>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            {caseData.title}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="bg-white rounded-xl shadow-[8px_8px_24px_rgba(0,0,0,0.15)] border border-gray-100 p-8 md:p-12">
          
          <div className="space-y-16">
            {/* Background */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold text-[#0B3D91] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F5F7FA] rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#0B3D91]" />
                </div>
                项目背景
              </h2>
              <p className="text-[#86909C] text-base md:text-lg leading-relaxed bg-[#F5F7FA] p-6 rounded-lg border border-transparent">
                {caseData.background}
              </p>
            </motion.section>

            {/* Implementation */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-[#0B3D91] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F5F7FA] rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#0B3D91]" />
                </div>
                项目实施内容
              </h2>
              <p className="text-[#86909C] text-base md:text-lg leading-relaxed bg-[#F5F7FA] p-6 rounded-lg border border-transparent">
                {caseData.implementation}
              </p>
            </motion.section>

            {/* Results */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#0B3D91] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F5F7FA] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#0B3D91]" />
                </div>
                项目成效
              </h2>
              <div className="space-y-4">
                {caseData.results.map((result, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white border border-gray-100 shadow-[2px_2px_8px_rgba(0,0,0,0.05)] rounded-xl transition-shadow hover:shadow-[4px_4px_12px_rgba(0,0,0,0.1)]">
                    <div className="w-10 h-10 bg-[#0B3D91]/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-[#0B3D91] font-bold text-lg">{i + 1}</span>
                    </div>
                    <p className="text-[#1D2129] font-medium text-base md:text-lg flex-1 pt-1.5">{result}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Photos */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-[#0B3D91] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F5F7FA] rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#0B3D91]" />
                </div>
                现场展示
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "硬件安装图", img: "./images/case-photo-1.jpg" },
                  { title: "无人机巡检作业图", img: "./images/case-photo-2.jpg" },
                  { title: "缺陷检测结果图", img: "./images/case-photo-3.jpg" },
                  { title: "系统后台操作图", img: "./images/case-photo-4.jpg" }
                ].map((photo, i) => (
                  <div key={i} className="group relative rounded-xl overflow-hidden shadow-sm border border-gray-100 aspect-[3/4]">
                    <img src={photo.img} alt={photo.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/90 via-transparent to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 p-4 text-center transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
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
