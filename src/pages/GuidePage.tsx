import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

export default function GuidePage() {
  const [activeTab, setActiveTab] = useState('小学阶段');

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50">
      <header className="px-6 pt-10 pb-4 bg-white z-10 sticky top-0">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </Link>
            <h1 className="text-xl font-extrabold text-slate-800">泳考指南</h1>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-slate-50">
          {/* Hero Section */}
          <div className="bg-primary p-6 rounded-b-[2.5rem] shadow-lg shadow-sky-200/50 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
            
            <h2 className="text-white text-2xl font-extrabold mb-3 relative z-10">学好游泳，终身受益</h2>
            <p className="text-sky-50 text-sm leading-relaxed mb-4 relative z-10 font-medium">
              世界卫生组织（WHO）将游泳列为儿童必须掌握的生存技能。
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 relative z-10">
              <p className="text-white text-xs leading-relaxed opacity-90">
                游泳是公认的全能运动。水下的浮力环境能有效减轻骨骼压力，促进青少年身高增长；同时，水压能显著提升心肺功能，改善呼吸系统健康，增强免疫力。
              </p>
            </div>
          </div>

          <div className="px-6">
            <h3 className="text-lg font-extrabold text-slate-800 mb-4 px-1">上海青少年游泳教育与升学指南 (2026版)</h3>
            
            {/* Tabs */}
            <div className="bg-white p-1 rounded-2xl flex mb-6 shadow-sm">
              <button 
                onClick={() => setActiveTab('小学阶段')}
                className={clsx(
                  "flex-1 py-2.5 rounded-xl text-sm font-bold transition-all",
                  activeTab === '小学阶段' ? "bg-slate-800 text-white shadow-md" : "text-slate-500 hover:text-slate-700"
                )}
              >
                小学阶段
              </button>
              <button 
                onClick={() => setActiveTab('初中升学')}
                className={clsx(
                  "flex-1 py-2.5 rounded-xl text-sm font-bold transition-all",
                  activeTab === '初中升学' ? "bg-slate-800 text-white shadow-md" : "text-slate-500 hover:text-slate-700"
                )}
              >
                初中升学
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              {activeTab === '小学阶段' ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-primary">policy</span>
                      <h4 className="font-bold text-slate-800">政策背景</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      根据上海市教委“小学体育兴趣化”及“人人学会游泳”的指导方针，全市通常在小学三年级（部分区为四年级）开展普及性游泳教学与达标考核。
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-primary">verified</span>
                      <h4 className="font-bold text-slate-800">考核标准 (Standard)</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></div>
                        <div>
                          <span className="text-slate-800 font-bold text-sm block">考核对象</span>
                          <span className="text-slate-500 text-xs">全市义务教育阶段三年级/四年级学生。</span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></div>
                        <div>
                          <span className="text-slate-800 font-bold text-sm block">达标要求</span>
                          <span className="text-slate-500 text-xs">不限泳姿，在标准泳池内连续游完 25 米。</span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></div>
                        <div>
                          <span className="text-slate-800 font-bold text-sm block">通过判定</span>
                          <span className="text-slate-500 text-xs">游进过程中身体不触碰池底、不拉泳道线、中途不停顿。</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-sky-50 p-5 rounded-2xl border border-sky-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-primary">school</span>
                      <h4 className="font-bold text-slate-800">专业建议</h4>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      校内课程通常采用大班教学制。对于零基础或恐水的学生，建议提前进行适应性训练，确保在统一考核中顺利达标，获取“上海市中小学生游泳达标证书”。
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-primary">analytics</span>
                      <h4 className="font-bold text-slate-800">分值构成</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      在上海中考体育总分（30分）中，统一考试占 15分。其中，游泳属于第一类项目（分值权重最高）。
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-primary">compare_arrows</span>
                      <h4 className="font-bold text-slate-800">项目对比与选择策略</h4>
                    </div>
                    <p className="text-slate-500 text-xs mb-3">第一类项目为“三选一”模式，考生需在以下项目中任选其一：</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <div className="text-primary font-black text-lg">6分</div>
                        <div className="text-slate-800 font-bold text-xs">游泳</div>
                        <div className="text-slate-400 text-[10px]">200米</div>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <div className="text-slate-800 font-black text-lg">6分</div>
                        <div className="text-slate-800 font-bold text-xs">长跑</div>
                        <div className="text-slate-400 text-[10px]">1000/800米</div>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <div className="text-slate-800 font-black text-lg">6分</div>
                        <div className="text-slate-800 font-bold text-xs">跳绳</div>
                        <div className="text-slate-400 text-[10px]">4分钟</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-primary">trending_up</span>
                      <h4 className="font-bold text-slate-800">游泳项目优势分析</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-sky-100 text-primary flex items-center justify-center text-xs font-bold shrink-0">1</div>
                        <div>
                          <span className="text-slate-800 font-bold text-sm block">非竞速类项目</span>
                          <span className="text-slate-500 text-xs">与长跑严格的时间限制不同，中考游泳不设时间门槛。</span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-sky-100 text-primary flex items-center justify-center text-xs font-bold shrink-0">2</div>
                        <div>
                          <span className="text-slate-800 font-bold text-sm block">评分规则</span>
                          <span className="text-slate-500 text-xs">考生不限泳姿，不限时间，只要在泳道内规范地游完 200 米全程（中途不犯规），即可获得 6分满分。</span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-sky-100 text-primary flex items-center justify-center text-xs font-bold shrink-0">3</div>
                        <div>
                          <span className="text-slate-800 font-bold text-sm block">稳定性强</span>
                          <span className="text-slate-500 text-xs">相比于长跑对体能状态的严苛要求，游泳项目的容错率更高，是体能基础薄弱或不擅长跑步考生的首选拿分项目。</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            <p className="text-slate-400 text-[10px] text-center mt-8 mb-4 px-4 leading-relaxed">
              注：考试政策以当年上海市教委及各区教育局发布的最新官方文件为准。
            </p>
          </div>
        </main>
    </div>
  );
}
