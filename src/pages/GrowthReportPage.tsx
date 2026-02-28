import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

export default function GrowthReportPage() {
  return (
    <div className="flex-1 flex flex-col h-full bg-slate-800 relative overflow-hidden">
      {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl"></div>
        </div>

        <header className="px-6 pt-10 pb-4 z-10 flex justify-between items-center">
          <Link to="/" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-md">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </Link>
          <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-md">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </button>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-6 z-10 pb-12">
          {/* Badge/Icon */}
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.4)] relative z-10">
              <span className="material-symbols-outlined text-6xl text-white drop-shadow-md">emoji_events</span>
            </div>
            <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
          </div>

          <h1 className="text-3xl font-black text-white mb-2 text-center tracking-tight">太棒了，尼莫！</h1>
          <p className="text-sky-200 text-sm font-medium mb-10 text-center">完成了第 12 节蛙泳课程</p>

          {/* Achievements */}
          <div className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/10 mb-8">
            <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest text-center mb-6">本节课成就</h3>
            <div className="flex justify-between px-2">
              {[
                { icon: 'waves', label: '呼吸', active: true },
                { icon: 'pool', label: '划手', active: true },
                { icon: 'directions_run', label: '蹬腿', active: true },
                { icon: 'timer', label: '速度', active: false },
                { icon: 'fitness_center', label: '耐力', active: false },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className={clsx(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
                    item.active 
                      ? "bg-gradient-to-br from-sky-400 to-primary text-white shadow-[0_0_15px_rgba(14,165,233,0.5)] scale-110 border border-white/20" 
                      : "bg-slate-700/50 text-slate-500 border border-white/5"
                  )}>
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <span className={clsx(
                    "text-[10px] font-bold",
                    item.active ? "text-white" : "text-slate-500"
                  )}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coach Comment */}
          <div className="text-center mb-10">
            <div className="inline-block relative">
              <span className="material-symbols-outlined text-4xl text-white/20 absolute -top-4 -left-6">format_quote</span>
              <p className="text-white text-lg font-medium leading-relaxed px-4">
                今天的节奏感非常好！<br/>
                特别是在换气配合上有了很大进步。<br/>
                继续保持！
              </p>
              <span className="material-symbols-outlined text-4xl text-white/20 absolute -bottom-4 -right-6 rotate-180">format_quote</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxQKNYiYAHDMAKpufw2PU1g39t5jSCOyZsjz0x5NCTEZ96tt-dl_qP4jw06rHrFebKkvAxQC15RudPoZtCBOV17xArfxvybqFdmKvvnMGYzd3LHn7mLgbDrpPcNggJXGZUfQGq9l_eY-N908OiAWMH_xDmr4bd1wKe-Y9R1PCQGEII3malBa-_EAPdgwfoLcVzgIBk2F1pkaE-a-KGTzsRyTPCsZtNhrkulfnf6f8HHsJp50-UyDEiSSg7nimCbjR6RGvXxGPH2TM" alt="Coach" className="w-full h-full object-cover" />
              </div>
              <span className="text-white/60 text-xs font-bold">Alex 教练</span>
            </div>
          </div>

          {/* Footer QR */}
          <div className="mt-auto flex flex-col items-center gap-3">
            <div className="w-20 h-20 bg-white rounded-xl p-1">
              <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">qr_code_2</span>
              </div>
            </div>
            <p className="text-white/40 text-[10px] font-medium tracking-wide">我在 YoPool 完成了第 12 节课</p>
          </div>
        </main>
    </div>
  );
}
