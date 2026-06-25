import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { navLinks } from '../mock/data';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
               <img src="./images/logo.jpg" alt="AeroInspect Tech" className="h-8 w-auto rounded object-cover" loading="lazy" />
               <span className="font-bold text-xl tracking-tight text-brand-500">保定航鉴电力科技有限公司</span>
            </Link>
            <p className="text-sm mt-4 text-slate-600">
              机-巢-云一体化风机叶片智能巡检解决方案提供商，致力于通过视觉AI与无人机技术，实现风场自动化、智能化运维。
            </p>
          </div>

          <div>
            <h3 className="text-slate-900 font-medium mb-4">快速链接</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-brand-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-medium mb-4">联系我们</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>河北省保定市竞秀区</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <span>400-xxx-xxxx</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-medium mb-4">关注我们</h3>
            <div className="w-24 h-24 bg-surface-white rounded-lg flex items-center justify-center border border-slate-200 overflow-hidden relative">
              <div className="w-20 h-20 bg-slate-200 rounded flex items-center justify-center text-text-disabled text-xs">
                微信公众号
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} 保定航鉴电力科技有限公司 (AeroInspect Tech). All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-500 transition-colors">冀ICP备XXXXXXX号</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
