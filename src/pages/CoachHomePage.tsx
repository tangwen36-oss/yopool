import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { getStudents } from '../services/api';

const studentList = getStudents();

export default function CoachHomePage() {
  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 relative">
      <header className="px-6 pt-10 pb-4 bg-white z-10 sticky top-0 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-extrabold text-slate-800">工作台</h1>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-500">在线</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mb-2">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <span className="text-slate-400 text-[10px] font-bold uppercase">今日课程</span>
            <div className="text-2xl font-black text-slate-800">{studentList.length} <span className="text-sm text-slate-400 font-medium">节</span></div>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <span className="text-slate-400 text-[10px] font-bold uppercase">待核销</span>
            <div className="text-2xl font-black text-primary">{studentList.filter(s => s.status === 'active').length} <span className="text-sm text-slate-400 font-medium">人</span></div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-slate-50 px-6 pt-6">
        {/* Schedule Management Entry */}
        <Link to="/coach/schedule" className="block bg-slate-800 text-white p-5 rounded-2xl shadow-lg shadow-slate-200 mb-8 relative overflow-hidden group">
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[100px]">calendar_month</span>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-xl">edit_calendar</span>
              <h3 className="font-bold text-lg">排课管理</h3>
            </div>
            <p className="text-slate-400 text-xs">点击设置下周可约时段</p>
          </div>
        </Link>

        {/* Student List */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-extrabold text-slate-800">今日学员</h2>
          <span className="text-slate-400 text-xs font-bold">2023.10.24</span>
        </div>

        <div className="flex flex-col gap-4">
          {studentList.map((student, i) => {
            if (student.status === 'completed') {
              return (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 opacity-60">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg", student.avatarColor)}>
                        {student.initial}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800">{student.name}</h3>
                        <p className="text-slate-400 text-xs">{student.time} • {student.course}</p>
                      </div>
                    </div>
                    <span className="bg-slate-100 text-slate-400 text-[10px] font-bold px-2 py-1 rounded-lg">{student.statusText}</span>
                  </div>
                </div>
              );
            }

            if (student.status === 'active') {
              return (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-primary relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 border-white shadow-sm", student.avatarColor)}>
                        {student.initial}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-lg">{student.name}</h3>
                        <p className="text-primary text-xs font-bold">{student.time} • {student.course}</p>
                      </div>
                    </div>
                    <span className="bg-sky-50 text-primary text-[10px] font-bold px-2 py-1 rounded-lg border border-sky-100">{student.statusText}</span>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-500 text-xs font-bold py-3 rounded-xl transition-colors">
                      取消预约
                    </button>
                    <Link to="/coach/summary" className="flex-[2] bg-primary hover:bg-primary-dark text-white text-xs font-bold py-3 rounded-xl shadow-lg shadow-sky-100 transition-colors flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">qr_code_scanner</span>
                      核销并总结
                    </Link>
                  </div>
                </div>
              );
            }

            // upcoming
            return (
              <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg", student.avatarColor)}>
                      {student.initial}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">{student.name}</h3>
                      <p className="text-slate-400 text-xs">{student.time} • {student.course}</p>
                    </div>
                  </div>
                  <span className="bg-slate-50 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-lg">{student.statusText}</span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
