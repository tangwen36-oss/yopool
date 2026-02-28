import { Link } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 relative">
      <header className="px-6 pt-10 pb-4 bg-white z-10 sticky top-0 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl font-extrabold text-slate-800">我的</h1>
            <button className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[20px]">settings</span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-slate-50 px-6 pt-6">
          {/* User Profile */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full bg-sky-100 p-1 border-2 border-white shadow-md">
              <div className="w-full h-full rounded-full bg-sky-200 flex items-center justify-center text-sky-600 text-2xl font-black">
                N
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800">尼莫 (Nemo)</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200">
                  L1 蛙泳青铜
                </span>
                <span className="text-slate-400 text-xs font-medium">6岁 • 男生</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
              <span className="text-2xl font-black text-slate-800">12</span>
              <span className="text-[10px] font-bold text-slate-400 mt-1">剩余课时</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
              <span className="text-2xl font-black text-slate-800">24</span>
              <span className="text-[10px] font-bold text-slate-400 mt-1">累计课时</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
              <span className="text-2xl font-black text-slate-800">3</span>
              <span className="text-[10px] font-bold text-slate-400 mt-1">获得勋章</span>
            </div>
          </div>

          {/* Menu */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-6">
            {[
              { icon: 'assignment', label: '我的订单', link: '/orders' },
              { icon: 'emoji_events', label: '成就中心', link: '/achievements' },
              { icon: 'help', label: '帮助与客服', link: '#' },
            ].map((item, i) => (
              <Link to={item.link} key={i} className="flex items-center justify-between p-5 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-none">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <span className="text-slate-800 font-bold text-sm">{item.label}</span>
                </div>
                <span className="material-symbols-outlined text-slate-300 text-[20px]">chevron_right</span>
              </Link>
            ))}
          </div>

          {/* Coach Switch (Demo) */}
          <Link to="/coach" className="block w-full bg-slate-800 text-white font-bold py-4 rounded-2xl hover:bg-slate-900 transition-colors shadow-lg shadow-slate-200 text-center text-sm mb-8">
            切换至教练端 (演示用)
          </Link>
        </main>
    </div>
  );
}
