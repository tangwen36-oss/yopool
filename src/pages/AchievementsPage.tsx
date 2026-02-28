import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { getAchievements } from '../services/api';

const achievements = getAchievements();
const unlockedCount = achievements.filter(a => a.unlocked).length;

export default function AchievementsPage() {
  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 relative">
      <header className="px-6 pt-10 pb-4 bg-white z-10 sticky top-0 shadow-sm">
        <div className="flex items-center gap-4 mb-2">
          <Link to="/profile" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </Link>
          <h1 className="text-xl font-extrabold text-slate-800">成就中心</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-slate-50 px-6 pt-6">
        {/* Summary Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-lg shadow-slate-200 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
          <div className="relative z-10">
            <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">已获得勋章</div>
            <div className="text-4xl font-black mb-4">{unlockedCount} <span className="text-lg text-slate-500 font-medium">/ 12</span></div>
            <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
              <div className="bg-amber-400 h-full w-1/4 rounded-full"></div>
            </div>
            <p className="text-slate-400 text-[10px] mt-2">再获得 1 枚勋章即可升级为「白银泳者」</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((item) => (
            <div key={item.id} className={clsx(
              "bg-white p-4 rounded-2xl shadow-sm border transition-all flex flex-col items-center text-center",
              item.unlocked ? "border-slate-100" : "border-slate-50 opacity-60 grayscale"
            )}>
              <div className={clsx(
                "w-14 h-14 rounded-full flex items-center justify-center mb-3",
                item.unlocked ? item.color : "bg-slate-100 text-slate-300"
              )}>
                <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
              </div>
              <h3 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h3>
              <p className="text-slate-400 text-[10px] leading-tight mb-3 h-8 flex items-center">{item.description}</p>

              {item.unlocked ? (
                <div className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-full">
                  {item.date} 获得
                </div>
              ) : (
                <div className="text-[10px] font-bold text-slate-300 bg-slate-50 px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px]">lock</span> 未解锁
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
