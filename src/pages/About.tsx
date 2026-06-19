import { qualifications } from '../mock/data';
import { motion } from 'motion/react';
import { MapPin, Phone, Award, Users, FileText } from 'lucide-react';
import { Form, Input, Button, message } from 'antd';

const { TextArea } = Input;

export function About() {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success({
      content: '提交成功，我们会尽快与您联系',
      duration: 3,
      className: 'custom-success-message',
    });
    form.resetFields();
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-sg-blue mb-4">关于我们</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
             我们是致力于新能源智能化运维体系建设的先锋力量。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Company Info */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <h2 className="text-3xl font-bold text-sg-blue mb-6">公司简介</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              国网吉林新能源智能巡检有限公司是国网吉林省新能源集团有限公司旗下专注于新能源场站智能运维技术研发与落地的科技企业。
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              依托国网吉林省电力有限公司技术研发资源，专注于风电机组智能巡检、缺陷检测、运维管理等领域的技术创新与产品落地，相关技术通过权威机构检测，已在吉林省内多个风场实现落地应用。
            </p>
          </div>
          <div className="h-64 lg:h-full bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200 relative overflow-hidden">
             <img src="./images/about-company.jpg" alt="公司办公大楼" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 flex items-center justify-center bg-white/20">
               <span className="bg-white/80 px-4 py-2 rounded shadow-sm text-sm font-medium text-slate-500">办公楼/团队照片</span>
             </div>
          </div>
        </section>

        {/* Core Team */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-sg-blue mb-4 flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-sg-green" />
              核心团队
            </h2>
            <div className="w-16 h-1 bg-sg-green mx-auto"></div>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-center max-w-4xl mx-auto">
            <p className="text-slate-600 text-lg leading-relaxed">
              公司拥有54人专业研发团队，专业覆盖电气工程、通信工程、计算机视觉、无人机控制等领域。成员平均拥有10年以上新能源运维或技术研发经验，先后承担多项国网公司级科技项目，获得省部级科技奖项多项。
            </p>
          </div>
        </section>

        {/* Qualifications */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-sg-blue mb-4 flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-sg-green" />
              资质荣誉
            </h2>
            <div className="w-16 h-1 bg-sg-green mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualifications.map((q, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4 hover:border-sg-green transition-colors"
              >
                <div className="p-3 bg-sg-blue/5 rounded-lg shrink-0">
                  <FileText className="w-6 h-6 text-sg-blue" />
                </div>
                <div className="text-slate-700 font-medium pt-1">
                  {q}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="bg-sg-blue rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Box (Info) */}
            <div className="lg:col-span-2 p-10 md:p-16 text-white relative">
               <div className="absolute inset-0 bg-[url('./images/contact-bg.jpg')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-8">联系我们</h2>
                 <div className="space-y-8">
                   <div className="flex gap-4">
                     <MapPin className="w-6 h-6 text-sg-green-light shrink-0" />
                     <div>
                       <div className="text-slate-300 text-sm mb-1">公司地址</div>
                       <div className="text-lg">吉林省长春市朝阳区丰顺街1118号</div>
                     </div>
                   </div>
                   <div className="flex gap-4">
                     <Phone className="w-6 h-6 text-sg-green-light shrink-0" />
                     <div>
                       <div className="text-slate-300 text-sm mb-1">联系电话</div>
                       <div className="text-lg">0431-85792397</div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Right Box (Form) */}
            <div className="lg:col-span-3 bg-white p-10 md:p-16">
              <h3 className="text-2xl font-bold text-sg-blue mb-8">申请演示 / 业务咨询</h3>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
                className="custom-form"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <Form.Item 
                    label="姓名" 
                    name="name" 
                    rules={[{ required: true, message: '请输入您的姓名' }]}
                  >
                    <Input placeholder="输入您的姓名" />
                  </Form.Item>

                  <Form.Item 
                    label="联系电话" 
                    name="phone" 
                    rules={[{ required: true, message: '请输入您的联系电话' }]}
                  >
                    <Input placeholder="输入电话号码" />
                  </Form.Item>
                </div>

                <Form.Item 
                  label="所属公司" 
                  name="company" 
                  rules={[{ required: true, message: '请输入您的所属公司' }]}
                >
                  <Input placeholder="输入公司名称" />
                </Form.Item>

                <Form.Item 
                  label="需求描述" 
                  name="desc"
                >
                  <TextArea rows={4} placeholder="请简要描述您的业务需求..." maxLength={500} showCount />
                </Form.Item>

                <Form.Item className="mb-0 pt-4">
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    style={{ backgroundColor: '#003B71', width: '100%', height: '50px', fontSize: '16px', borderRadius: '8px' }}
                  >
                    提交信息
                  </Button>
                </Form.Item>
              </Form>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
