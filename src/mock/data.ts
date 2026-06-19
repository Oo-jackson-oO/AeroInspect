export const navLinks = [
  { name: '首页', path: '/' },
  { name: '核心产品', path: '/products' },
  { name: '成功案例', path: '/cases' },
  { name: '关于我们', path: '/about' },
];

export const advantages = [
  {
    id: 1,
    title: '亚米级叶尖定位',
    desc: '定位误差<0.8m，适配大中小各类风机，可抵御8级阵风干扰。'
  },
  {
    id: 2,
    title: '双模态缺陷检测',
    desc: '支持8类可见光缺陷+红外热斑缺陷识别，综合准确率达94.5%。'
  },
  {
    id: 3,
    title: '全流程无人化',
    desc: '巡检效率较人工提升75%，单台风机巡检仅需0.5小时。'
  },
  {
    id: 4,
    title: '缺陷演化预警',
    desc: '多时相图像跨周期对比，可提前3-6个月预警缺陷扩展风险。'
  }
];

export const products = [
  {
    id: 'hardware',
    title: '风机叶片智能巡检硬件套装',
    bannerTitle: '适配多场景的无人化巡检硬件体系',
    desc: '包含大疆M3TD双光无人机、大疆机场2自动机巢、天途云盒边缘计算节点、NVIDIA Jetson AGX Orin算力板4个核心组件，支持-20℃~50℃极端环境作业，防尘防水等级IP55，可实现7*24小时无人值守巡检。',
    params: [
      { label: '无人机续航', value: '40分钟' },
      { label: '机巢', value: '支持自动充换电' },
      { label: '边缘算力', value: '20TOPS' },
      { label: 'RTK定位精度', value: '厘米级' }
    ],
    scenarios: ['平原/山地/沿海风场', '极端低温环境风场', '无人值守偏远风场'],
    image: '/images/product-hardware.jpg'
  },
  {
    id: 'algorithm',
    title: '多模态风机缺陷检测算法平台',
    bannerTitle: '精准识别8类叶片缺陷的智能算法体系',
    desc: '基于改进YOLOv8系列算法构建，支持可见光+红外双模态图像检测，可识别裂纹、腐蚀、涂层脱落、油漏等8类常见叶片缺陷，支持缺陷自动分级、历史数据对比、预警信息推送。',
    params: [
      { label: '可见光缺陷准确率', value: '87.7%' },
      { label: '红外热斑准确率', value: '94.5%' },
      { label: '检测速度', value: '30FPS' },
      { label: '漏检率', value: '<1%' }
    ],
    scenarios: ['风机叶片定期巡检', '缺陷演化跟踪', '事故回溯分析'],
    image: '/images/product-algorithm.jpg'
  },
  {
    id: 'system',
    title: '「机-巢-云」一体化运维管理系统',
    bannerTitle: '全流程线上化的风机运维管理中枢',
    desc: '包含风机资产管理、巡检任务调度、缺陷数据可视化、巡检报告自动生成4大核心模块，支持多账号权限管理、多端适配，可对接风场现有运维系统，实现巡检数据打通。',
    params: [
      { label: '管理规模', value: '支持1000+台风机同时管理' },
      { label: '任务调度延迟', value: '<1s' },
      { label: '报告生成时间', value: '<5分钟' },
      { label: '访问支持', value: '支持PC/移动端访问' }
    ],
    scenarios: ['风场集中化运维', '跨区域风场统一管理', '运维数据沉淀分析'],
    image: '/images/product-system.jpg'
  }
];

export const caseData = {
  title: '乾安风电场落地案例：无人化巡检助力风场运维效率提升75%',
  background: '乾安风电场位于吉林省松原市乾安县，装机容量49.5MW，共安装33台1.5MW风电机组，此前采用人工巡检模式，存在巡检效率低、缺陷发现滞后、作业安全风险高等问题，2025年引入本套风机叶片智能巡检系统。',
  implementation: '2025年7月完成现场部署调试，针对风场10台三期风机开展巡检测试，完成无人机航线校准、算法模型适配、系统对接等工作，实现无人化巡检全流程落地。',
  results: [
    '巡检效率提升75%，单台风机巡检时间从2小时缩短至0.5小时',
    '缺陷检出率达98%，较人工巡检提升40%，发现早期缺陷12处，避免潜在经济损失超200万元',
    '降低运维人员作业风险，无需人员登高作业，实现风机运行区域外安全巡检'
  ]
};

export const qualifications = [
  '2项发明专利受理',
  '2篇EI检索论文发表',
  '深圳市京立安检测有限公司系统合格检测报告',
  '国网吉林新能源集团用户使用报告',
  '天津市科学技术信息研究所查新报告'
];
