import { qualifications } from '../mock/data';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Phone, Award, Users, FileText } from 'lucide-react';
import { Form, Input, Button, message } from 'antd';

const { TextArea } = Input;

export function About() {
  const [form] = Form.useForm();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 500]);

  const onFinish = () => {
    message.success({
      content: '提交成功，我们会尽快与您联系',
      duration: 3,
      className: 'custom-success-message',
    });
    form.resetFields();
  };

  return (
    <div className="bg-[#F5F7FA] min-h-screen pb-32 font-sans text-[#1D2129]">
      {/* Banner */}
      <div className="relative h-[450px] overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0 h-[150%] -top-1/4"
          style={{ y: y1 }}
        >
          <img src="./images/about-company.jpg" alt="关于我们" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0B3D91] opacity-40"></div>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
          >
            关于我们
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl font-medium"
          >
            我们是致力于新能源智能化运维体系建设的先锋力量。
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 space-y-20">
        
        {/* Company Info */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-xl shadow-[8px_8px_24px_rgba(0,0,0,0.15)] border border-gray-100">
          <div>
            <h2 className="text-3xl font-bold text-[#0B3D91] mb-6">公司简介</h2>
            <p className="text-[#86909C] text-lg leading-relaxed mb-6">
              保定航鉴电力科技有限公司 (AeroInspect Tech) 是一家专注于新能源场站智能运维技术研发与落地的科技企业。
            </p>
            <p className="text-[#86909C] text-lg leading-relaxed">
              依托深厚的技术资源，我们专注于风电机组智能巡检、缺陷检测、多模态算法平台建设及成套智能软硬件的研发与应用。相关核心成果已通过多项专业认证，在全国多个核心风电场集群实现深度落地应用，全方位提升风电运维效率并大幅降低作业成本，为行业的高质量发展赋能。
            </p>
          </div>
          <div className="h-64 lg:h-full bg-[#F5F7FA] rounded-xl flex items-center justify-center border border-gray-100 relative overflow-hidden">
             <img src="./images/about-company.jpg" alt="公司办公大楼" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 flex items-center justify-center bg-white/20">
               <span className="bg-white/90 px-4 py-2 rounded shadow-sm text-sm font-medium text-[#86909C]">办公楼/团队照片</span>
             </div>
          </div>
        </section>

        {/* Core Team */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0B3D91] mb-4 flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-[#F5F7FA] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-[#0B3D91]" />
              </div>
              核心团队
            </h2>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 text-center max-w-4xl mx-auto">
            <p className="text-[#86909C] text-lg leading-relaxed">
              公司拥有54人专业研发团队，专业覆盖电气工程、通信工程、计算机视觉、无人机控制等领域。成员平均拥有10年以上新能源运维或技术研发经验，先后承担多项国网公司级科技项目，获得省部级科技奖项多项。
            </p>
          </div>
        </section>

        {/* Qualifications */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0B3D91] mb-4 flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-[#F5F7FA] rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-[#0B3D91]" />
              </div>
              资质荣誉
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualifications.map((q, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 flex items-start gap-4 hover:shadow-[4px_4px_12px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1"
              >
                <div className="p-3 bg-[#0B3D91]/5 rounded-lg shrink-0">
                  <FileText className="w-6 h-6 text-[#0B3D91]" />
                </div>
                <div className="text-[#1D2129] font-medium pt-1">
                  {q}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="bg-[#0B3D91] rounded-xl overflow-hidden shadow-[8px_8px_24px_rgba(0,0,0,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Box (Info) */}
            <div className="lg:col-span-2 p-10 md:p-16 text-white relative">
               <div className="absolute inset-0 bg-[url('./images/contact-bg.jpg')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-8">联系我们</h2>
                 <div className="space-y-8">
                   <div className="flex gap-4">
                     <MapPin className="w-6 h-6 text-[#36B37E] shrink-0" />
                     <div>
                       <div className="text-white/70 text-sm mb-1">公司地址</div>
                       <div className="text-lg">河北省保定市竞秀区</div>
                     </div>
                   </div>
                   <div className="flex gap-4">
                     <Phone className="w-6 h-6 text-[#36B37E] shrink-0" />
                     <div>
                       <div className="text-white/70 text-sm mb-1">联系电话</div>
                       <div className="text-lg">400-xxx-xxxx</div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Right Box (Form) */}
            <div className="lg:col-span-3 bg-white p-10 md:p-16">
              <h3 className="text-2xl font-bold text-[#0B3D91] mb-8">申请演示 / 业务咨询</h3>
              
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
                    className="bg-[#FF7D00] hover:bg-[#e67000] border-none text-white h-[50px] text-base rounded-lg w-full"
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
