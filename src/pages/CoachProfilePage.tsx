import { Link } from 'react-router-dom';

export default function CoachProfilePage() {
  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 relative">
      {/* Header Background */}
        <div className="absolute top-0 left-0 w-full h-64 bg-slate-800 rounded-b-[3rem] z-0"></div>
        
        <header className="px-6 pt-12 pb-4 z-10 relative">
          <div className="flex justify-end mb-4">
            <button className="text-white/80 hover:text-white transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden mb-3 relative">
               <img src="/images/coach.jpg" alt="Coach Profile" className="w-full h-full object-cover" />
               <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <h1 className="text-2xl font-black text-white mb-1">Coach Mike</h1>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              <span className="material-symbols-outlined text-yellow-400 text-sm filled">verified</span>
              <span className="text-white text-xs font-bold">资深游泳教练 L3</span>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-2xl p-4 shadow-lg mt-6 flex justify-between items-center text-center">
            <div className="flex-1">
              <div className="text-2xl font-black text-slate-800">1,240</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">累计课时</div>
            </div>
            <div className="w-px h-8 bg-slate-100"></div>
            <div className="flex-1">
              <div className="text-2xl font-black text-slate-800">4.9</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">学员评分</div>
            </div>
            <div className="w-px h-8 bg-slate-100"></div>
            <div className="flex-1">
              <div className="text-2xl font-black text-slate-800">86</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">学员人数</div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-slate-50 px-6 pt-2">
          {/* Menu Items */}
          <div className="flex flex-col gap-3">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <span className="font-bold text-slate-700">我的收入</span>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-slate-500 transition-colors">chevron_right</span>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
                <span className="font-bold text-slate-700">资质证书</span>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-slate-500 transition-colors">chevron_right</span>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center">
                  <span className="material-symbols-outlined">reviews</span>
                </div>
                <span className="font-bold text-slate-700">学员评价</span>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-slate-500 transition-colors">chevron_right</span>
            </div>
          </div>

          {/* Switch Role Button */}
          <Link to="/profile" className="mt-8 bg-slate-200 hover:bg-slate-300 text-slate-600 font-bold py-4 rounded-2xl transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">switch_account</span>
            切换至学员端
          </Link>
          
          <div className="mt-8 text-center">
             <p className="text-[10px] text-slate-300 font-mono">YoPool Coach v1.0.2</p>
          </div>
        </main>
    </div>
  );
}
