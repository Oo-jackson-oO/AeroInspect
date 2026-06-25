import { caseData } from '../mock/data';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Calendar, TrendingUp, ShieldCheck } from 'lucide-react';

export function Cases() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div className="bg-surface min-h-screen pb-32 font-sans text-text-primary">
      {/* Banner */}
      <section className="relative min-h-[250px] md:min-h-[450px] overflow-hidden flex items-center justify-center">
        <motion.div className="absolute inset-0 z-0 h-[130%] -top-[15%]" style={{ y: y1 }}>
          <img src="./images/case-banner.webp" alt="乾安风电场" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-500 opacity-40" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-8">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            {caseData.title}
          </motion.h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="bg-surface-white rounded-xl shadow-[8px_8px_24px_rgba(0,0,0,0.15)] border border-gray-100 p-8 md:p-12"
        >
          <div className="space-y-16">
            {/* Background */}
            <motion.section
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-2xl font-bold text-brand-500 mb-6 flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  <MapPin className="w-5 h-5 text-brand-500" />
                </motion.div>
                项目背景
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed bg-surface p-6 rounded-lg">
                {caseData.background}
              </p>
            </motion.section>

            {/* Implementation */}
            <motion.section
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-brand-500 mb-6 flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  <Calendar className="w-5 h-5 text-brand-500" />
                </motion.div>
                项目实施内容
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed bg-surface p-6 rounded-lg">
                {caseData.implementation}
              </p>
            </motion.section>

            {/* Results */}
            <motion.section
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-brand-500 mb-6 flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  <TrendingUp className="w-5 h-5 text-brand-500" />
                </motion.div>
                项目成效
              </h2>
              <div className="space-y-4">
                {caseData.results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex gap-4 p-5 bg-surface-white border border-gray-100 shadow-[2px_2px_8px_rgba(0,0,0,0.05)] rounded-xl"
                  >
                    <motion.div
                      className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center shrink-0"
                      whileInView={{ scale: [0.5, 1.15, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
                    >
                      <span className="text-brand-500 font-bold text-lg">{i + 1}</span>
                    </motion.div>
                    <p className="text-text-primary font-medium text-base md:text-lg flex-1 pt-1.5">{result}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Photos */}
            <motion.section
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-brand-500 mb-6 flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  <ShieldCheck className="w-5 h-5 text-brand-500" />
                </motion.div>
                现场展示
              </h2>
              <div className="grid grid-cols-1 gap-6 w-full">
                {[
                  { title: '硬件安装图', img: './images/case-photo-1.webp' },
                  { title: '无人机巡检作业图', img: './images/case-photo-2.webp' },
                  { title: '缺陷检测结果图', img: './images/case-photo-3.webp' },
                  { title: '系统后台操作图', img: './images/case-photo-4.webp' },
                ].map((photo, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: i * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative rounded-xl overflow-hidden shadow-sm border border-gray-100 aspect-video"
                  >
                    <motion.img
                      src={photo.img}
                      alt={photo.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-500/80 via-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-center transition-all duration-300 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="text-white font-medium text-sm">{photo.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
