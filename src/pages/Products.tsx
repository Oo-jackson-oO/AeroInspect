import { products } from '../mock/data';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Products() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-sg-blue mb-4">核心产品</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            从智能终端到边缘算力，从算法引擎到云端平台，提供端到端的风场智能检测闭环。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
          >
            {/* Component Banner */}
            <div className="bg-sg-blue px-8 py-6 text-white">
              <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                {product.title}
                <span className="text-sg-green-light font-normal text-sm md:text-base border border-sg-green-light/30 bg-white/10 px-3 py-1 rounded">
                  {product.bannerTitle}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between">
                <div>
                  <p className="text-slate-600 leading-relaxed text-lg mb-10">
                    {product.desc}
                  </p>
                  
                  <div className="mb-10">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">核心参数</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {product.params.map((param, i) => (
                        <div key={i} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                          <div className="text-xs text-slate-500 mb-1">{param.label}</div>
                          <div className="font-bold text-slate-900">{param.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">适用场景</h3>
                  <ul className="space-y-3">
                    {product.scenarios.map((scenario, i) => (
                      <li key={i} className="flex items-center gap-2 text-sg-blue font-medium">
                        <CheckCircle2 className="w-5 h-5 text-sg-green" />
                        {scenario}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Image */}
              <div className="bg-slate-100 relative min-h-[400px] flex items-center justify-center">
                 <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-medium text-slate-500 bg-white/80 px-4 py-2 rounded shadow-sm">{product.title} 产品图</span>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
