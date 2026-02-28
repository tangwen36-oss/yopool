// ============================================================
// YoPool Mock Data
// 集中管理所有演示数据，将来接入后端时只需修改 services/api.ts
// ============================================================

// ---------- 类型定义 ----------

export interface Course {
  id: string;
  title: string;
  level: string;
  age: string;
  price: string;
  originalPrice?: string;
  lessons: string;
  img: string;
  subtitle?: string;
  badge?: string;
}

export interface Venue {
  name: string;
  dist: string;
  img: string;
}

export interface CoursePackage {
  id: string;
  title: string;
  validity: string;
  price: string;
  originalPrice: string;
  badge?: string;
  note?: string;
}

export interface Order {
  id: string;
  date: string;
  course: string;
  package: string;
  price: string;
  status: 'completed' | 'pending';
  statusText: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  unlocked: boolean;
  date: string | null;
}

export interface Student {
  name: string;
  initial: string;
  time: string;
  course: string;
  status: 'completed' | 'active' | 'upcoming';
  statusText: string;
  avatarColor: string;
}

export interface ScheduleSlot {
  time: string;
  available: boolean;
}

// ---------- 首页课程卡片 ----------

export const homeCards: Course[] = [
  {
    id: 'home-1',
    title: '蛙泳 L1',
    subtitle: '适合 4-6 岁 | 零基础',
    level: '零基础',
    age: '4-6岁',
    price: '¥1,899',
    lessons: '10课时',
    img: '/images/child-swimming.jpg',
  },
  {
    id: 'home-2',
    title: '自由泳大师',
    subtitle: '进阶 | 速度提升',
    level: '进阶',
    age: '7-12岁',
    price: '¥2,299',
    lessons: '12课时',
    img: '/images/freestyle-swimming.jpg',
  },
];

// ---------- 泳馆列表 ----------

export const venues: Venue[] = [
  {
    name: '上海游泳馆',
    dist: '1.2km',
    img: '/images/venue-shanghai.jpg',
  },
  {
    name: '浦东水上中心',
    dist: '3.5km',
    img: '/images/venue-pudong.jpg',
  },
  {
    name: '徐汇俱乐部',
    dist: '5.8km',
    img: '/images/venue-xuhui.jpg',
  },
];

// ---------- 课程列表（选课页） ----------

export const courses: Course[] = [
  {
    id: 'course-1',
    title: '蛙泳 L1',
    level: '零基础',
    age: '4-6岁',
    price: '¥1,899',
    lessons: '10课时',
    img: '/images/freestyle-swimming.jpg',
  },
  {
    id: 'course-2',
    title: '自由泳 L2',
    level: '进阶',
    age: '7-12岁',
    price: '¥2,299',
    lessons: '12课时',
    img: '/images/venue-shanghai.jpg',
  },
  {
    id: 'course-3',
    title: '成人速成班',
    level: '不限',
    age: '18+',
    price: '¥3,599',
    lessons: '20课时',
    img: '/images/venue-pudong.jpg',
  },
];

// ---------- 课时包 ----------

export const packages: CoursePackage[] = [
  {
    id: '10',
    title: '10 课时包',
    validity: '有效期 3 个月',
    price: '¥1,899',
    originalPrice: '¥2,200',
  },
  {
    id: '20',
    title: '20 课时包',
    validity: '有效期 6 个月',
    price: '¥3,599',
    originalPrice: '¥4,400',
    badge: '超值推荐',
  },
  {
    id: 'trial',
    title: '单次体验课',
    validity: '仅限首次购买',
    price: '¥99',
    originalPrice: '¥299',
  },
];

// ---------- 订单 ----------

export const orders: Order[] = [
  {
    id: 'ORD-20231024-001',
    date: '2023-10-24 14:30',
    course: '蛙泳 L1 (4-6岁)',
    package: '10 课时包',
    price: '¥1,899',
    status: 'completed',
    statusText: '已完成',
  },
  {
    id: 'ORD-20230915-002',
    date: '2023-09-15 09:15',
    course: '单次体验课',
    package: '1 课时',
    price: '¥99',
    status: 'completed',
    statusText: '已完成',
  },
  {
    id: 'ORD-20231105-003',
    date: '2023-11-05 10:00',
    course: '自由泳 L2 (7-12岁)',
    package: '20 课时包',
    price: '¥3,599',
    status: 'pending',
    statusText: '待支付',
  },
];

// ---------- 成就 ----------

export const achievements: Achievement[] = [
  {
    id: 1,
    title: '初次下水',
    description: '完成第一次游泳课程',
    icon: 'water_drop',
    color: 'bg-sky-100 text-sky-500',
    unlocked: true,
    date: '2023-09-15',
  },
  {
    id: 2,
    title: '全勤宝宝',
    description: '连续一个月全勤出席',
    icon: 'calendar_month',
    color: 'bg-amber-100 text-amber-500',
    unlocked: true,
    date: '2023-10-20',
  },
  {
    id: 3,
    title: '蛙泳入门',
    description: '掌握蛙泳基本动作',
    icon: 'pool',
    color: 'bg-emerald-100 text-emerald-500',
    unlocked: true,
    date: '2023-11-01',
  },
  {
    id: 4,
    title: '深水勇士',
    description: '在深水区独立游完25米',
    icon: 'scuba_diving',
    color: 'bg-slate-100 text-slate-400',
    unlocked: false,
    date: null,
  },
  {
    id: 5,
    title: '速度之星',
    description: '50米蛙泳进入1分钟',
    icon: 'timer',
    color: 'bg-slate-100 text-slate-400',
    unlocked: false,
    date: null,
  },
];

// ---------- 教练端 - 学员列表 ----------

export const students: Student[] = [
  {
    name: 'Andy',
    initial: 'A',
    time: '14:00 - 15:00',
    course: '蛙泳 L2',
    status: 'completed',
    statusText: '已完成',
    avatarColor: 'bg-slate-100 text-slate-400',
  },
  {
    name: 'Nemo',
    initial: 'N',
    time: '16:00 - 17:00',
    course: '蛙泳 L1',
    status: 'active',
    statusText: '进行中',
    avatarColor: 'bg-sky-100 text-primary',
  },
  {
    name: 'Lucy',
    initial: 'L',
    time: '18:00 - 19:00',
    course: '自由泳 L1',
    status: 'upcoming',
    statusText: '待开始',
    avatarColor: 'bg-pink-100 text-pink-500',
  },
];

// ---------- 排课时段 ----------

export const defaultScheduleSlots: ScheduleSlot[] = [
  { time: '09:00', available: true },
  { time: '10:00', available: true },
  { time: '11:00', available: false },
  { time: '13:00', available: true },
  { time: '14:00', available: true },
  { time: '15:00', available: false },
  { time: '16:00', available: true },
  { time: '17:00', available: true },
  { time: '18:00', available: true },
  { time: '19:00', available: false },
];

// ---------- 技能标签（课后总结） ----------

export const skillTags: string[] = [
  '呼吸节奏好',
  '手臂未伸直',
  '蹬腿有力',
  '换气顺畅',
  '漂浮稳定',
  '核心收紧',
];

// ---------- 首页筛选标签 ----------

export const homeFilters: string[] = ['热门课', '体验课', '儿童课', '成人课'];

// ---------- 体验课（选课页大卡片） ----------

export const trialClass = {
  title: '单次体验课',
  description: '1对1 私教评估 • 45分钟',
  price: '¥99',
  originalPrice: '¥299',
  badge: '新人首选',
  img: '/images/child-swimming.jpg',
};
