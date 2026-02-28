import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { getCourses, getTrialClass } from '../services/api';

const courseList = getCourses();
const trial = getTrialClass();

export default function CourseSelectionPage() {
  const [activeTab, setActiveTab] = useState('课程');

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50">
      <header className="px-6 pt-10 pb-4 bg-white z-10 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-bold flex items-center justify-center border border-sky-200">Y</div>
            <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-lg">
              <span className="material-symbols-outlined text-[14px] text-slate-500">location_on</span>
              <span className="text-slate-600 text-xs font-bold">上海</span>
            </div>
          </div>
          <button className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
        </div>

        {/* Segment Control */}
        <div className="bg-slate-100 p-1 rounded-2xl flex relative">
          <button
            onClick={() => setActiveTab('课程')}
            className={clsx(
              "flex-1 py-2.5 rounded-xl text-sm font-bold transition-all z-10",
              activeTab === '课程' ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"
            )}
          >
            课程
          </button>
          <button
            onClick={() => setActiveTab('泳馆')}
            className={clsx(
              "flex-1 py-2.5 rounded-xl text-sm font-bold transition-all z-10",
              activeTab === '泳馆' ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"
            )}
          >
            泳馆
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-slate-50">
        {activeTab === '课程' ? (
          <div className="flex flex-col gap-6 p-6">
            {/* Trial Class - Large */}
            <Link to="/checkout" className="block group">
              <div className="relative h-64 rounded-[2rem] overflow-hidden shadow-lg shadow-sky-200 transition-transform duration-300 group-hover:scale-[1.02]">
                <img alt="Trial class" className="absolute inset-0 w-full h-full object-cover" src={trial.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                  {trial.badge}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-extrabold text-white mb-1">{trial.title}</h3>
                  <p className="text-white/90 text-sm font-medium mb-3">{trial.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-lg">{trial.price}</span>
                    <span className="text-white/60 text-sm line-through decoration-white/60">{trial.originalPrice}</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Other Courses List */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-slate-800 px-1">热门课程</h3>

              {courseList.map((course) => (
                <Link to="/checkout" key={course.id} className="bg-white p-3 rounded-2xl shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 rounded-xl bg-slate-100 shrink-0 overflow-hidden">
                    <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center py-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-slate-800 text-lg">{course.title}</h4>
                      <span className="text-primary font-bold">{course.price}</span>
                    </div>
                    <div className="flex gap-2 mb-3">
                      <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded">{course.level}</span>
                      <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded">{course.age}</span>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-slate-400 text-xs font-medium">{course.lessons}</span>
                      <button className="bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg">预订</button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 p-6 text-center">
            <span className="material-symbols-outlined text-4xl mb-2">pool</span>
            <p className="font-medium">更多泳馆即将上线</p>
          </div>
        )}
      </main>
    </div>
  );
}
