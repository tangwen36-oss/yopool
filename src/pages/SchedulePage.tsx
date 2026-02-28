import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { getDefaultScheduleSlots } from '../services/api';

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(24);
  const [schedule, setSchedule] = useState(getDefaultScheduleSlots());

  const toggleSlot = (index: number) => {
    const newSchedule = [...schedule];
    newSchedule[index] = { ...newSchedule[index], available: !newSchedule[index].available };
    setSchedule(newSchedule);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 relative">
      <header className="px-6 pt-10 pb-4 bg-white z-10 sticky top-0 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/coach" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </Link>
          <h1 className="text-xl font-extrabold text-slate-800">排课管理</h1>
        </div>

        {/* Date Scroller */}
        <div className="flex justify-between items-center overflow-x-auto no-scrollbar pb-2">
          {[22, 23, 24, 25, 26, 27, 28].map((date, i) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={clsx(
                "flex flex-col items-center justify-center w-12 h-16 rounded-2xl shrink-0 mx-1 transition-all",
                selectedDate === date
                  ? "bg-slate-800 text-white shadow-lg shadow-slate-200 scale-110"
                  : "bg-slate-50 text-slate-400 hover:bg-slate-100"
              )}
            >
              <span className="text-[10px] font-bold mb-1">周{['日', '一', '二', '三', '四', '五', '六'][i]}</span>
              <span className="text-lg font-black">{date}</span>
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-32 bg-slate-50 px-6 pt-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-extrabold text-slate-800">时段设置</h2>
            <button className="text-primary text-xs font-bold bg-sky-50 px-3 py-1.5 rounded-lg hover:bg-sky-100 transition-colors">
              一键全选
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {schedule.map((slot, i) => (
              <div
                key={i}
                onClick={() => toggleSlot(i)}
                className={clsx(
                  "p-4 rounded-xl border-2 transition-all cursor-pointer flex justify-between items-center",
                  slot.available
                    ? "bg-sky-50 border-primary"
                    : "bg-slate-50 border-transparent opacity-60"
                )}
              >
                <span className={clsx(
                  "font-black text-lg",
                  slot.available ? "text-primary" : "text-slate-400"
                )}>{slot.time}</span>
                <div className={clsx(
                  "w-10 h-6 rounded-full p-1 transition-colors relative",
                  slot.available ? "bg-primary" : "bg-slate-300"
                )}>
                  <div className={clsx(
                    "w-4 h-4 bg-white rounded-full shadow-sm transition-transform",
                    slot.available ? "translate-x-4" : "translate-x-0"
                  )}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Fixed Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-white border-t border-slate-100 p-6 pb-8 z-20">
        <button className="w-full bg-slate-800 text-white font-bold py-4 rounded-2xl hover:bg-slate-900 transition-colors shadow-lg shadow-slate-200 block text-center text-lg">
          保存设置
        </button>
      </div>
    </div>
  );
}
