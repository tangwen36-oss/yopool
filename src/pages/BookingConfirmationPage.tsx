import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

export default function BookingConfirmationPage() {
  const [coachPref, setCoachPref] = useState('any');

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 relative">
      <header className="px-6 pt-10 pb-4 bg-white z-10 sticky top-0 shadow-sm">
          <div className="flex items-center gap-4 mb-2">
            <Link to="/checkout" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </Link>
            <h1 className="text-xl font-extrabold text-slate-800">预约确认</h1>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar pb-32 bg-slate-50 px-6 pt-6">
          {/* Selected Info */}
          <div className="bg-white p-5 rounded-2xl shadow-sm mb-6 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-50 rounded-bl-[3rem] -z-0"></div>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 relative z-10">已选时段</h2>
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 text-sm font-medium">日期</span>
                <span className="text-slate-800 font-bold text-lg">2023年10月24日</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 text-sm font-medium">时间</span>
                <span className="text-slate-800 font-bold text-lg">16:00 - 17:00</span>
              </div>
              <div className="h-px bg-slate-100 my-2"></div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 text-sm font-medium">剩余课时</span>
                <div className="bg-sky-100 text-sky-700 px-3 py-1 rounded-lg text-xs font-bold">
                  8 节课
                </div>
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <h2 className="text-lg font-extrabold text-slate-800 mb-4 px-1">特殊需求</h2>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm mb-6 border border-slate-100">
            <h3 className="text-sm font-bold text-slate-800 mb-3">教练偏好</h3>
            <div className="flex gap-3 mb-6">
              {['不限', '男教练', '女教练'].map((pref, i) => {
                const value = i === 0 ? 'any' : i === 1 ? 'male' : 'female';
                return (
                  <button
                    key={value}
                    onClick={() => setCoachPref(value)}
                    className={clsx(
                      "flex-1 py-2.5 rounded-xl text-sm font-bold transition-all border-2",
                      coachPref === value
                        ? "bg-sky-50 border-primary text-primary"
                        : "bg-white border-slate-100 text-slate-500 hover:border-slate-200"
                    )}
                  >
                    {pref}
                  </button>
                );
              })}
            </div>

            <h3 className="text-sm font-bold text-slate-800 mb-3">备注</h3>
            <textarea 
              className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 resize-none"
              placeholder="请输入您的特殊需求（选填）..."
              rows={3}
            ></textarea>
          </div>
        </main>

        {/* Fixed Bottom Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-slate-100 p-6 pb-8 z-20">
          <Link to="/report" className="w-full bg-slate-800 text-white font-bold py-4 rounded-2xl hover:bg-slate-900 transition-colors shadow-lg shadow-slate-200 block text-center text-lg">
            确认预约
          </Link>
        </div>
    </div>
  );
}
