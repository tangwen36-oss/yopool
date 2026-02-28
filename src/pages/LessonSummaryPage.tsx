import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { getSkillTags } from '../services/api';

const defaultTags = getSkillTags();

export default function LessonSummaryPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 relative">
      <header className="px-6 pt-10 pb-4 bg-white z-10 sticky top-0 shadow-sm">
        <div className="flex items-center gap-4 mb-2">
          <Link to="/coach" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </Link>
          <h1 className="text-xl font-extrabold text-slate-800">课后总结</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-32 bg-slate-50 px-6 pt-6">
        {/* Student Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center text-primary font-bold text-xl border-2 border-white shadow-sm">
            N
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-800">Nemo</h2>
            <p className="text-slate-400 text-xs font-medium">蛙泳 L1 • 第 12 课时</p>
          </div>
        </div>

        {/* Skill Tags */}
        <div className="bg-white p-5 rounded-2xl shadow-sm mb-6 border border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 mb-4">本节课重点</h3>
          <div className="flex flex-wrap gap-2">
            {defaultTags.map((tag, i) => (
              <button
                key={i}
                onClick={() => toggleTag(tag)}
                className={clsx(
                  "px-3 py-1.5 rounded-lg text-xs font-bold transition-all border",
                  selectedTags.includes(tag)
                    ? "bg-sky-50 border-primary text-primary"
                    : "bg-slate-50 border-transparent text-slate-500 hover:bg-slate-100"
                )}
              >
                {tag}
              </button>
            ))}
            <button className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-50 text-slate-400 border border-dashed border-slate-300 hover:bg-slate-100 transition-colors">
              + 自定义
            </button>
          </div>
        </div>

        {/* AI Comment */}
        <div className="bg-white p-5 rounded-2xl shadow-sm mb-6 border border-slate-100 relative overflow-hidden">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold text-slate-800">教练评语</h3>
            <button className="flex items-center gap-1 text-primary text-[10px] font-bold bg-sky-50 px-2 py-1 rounded-lg hover:bg-sky-100 transition-colors">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              AI 生成
            </button>
          </div>
          <textarea
            className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 resize-none h-32"
            placeholder="输入评语或点击 AI 生成..."
            defaultValue="今天的节奏感非常好！特别是在换气配合上有了很大进步。继续保持！"
          ></textarea>
        </div>

        {/* Media Upload */}
        <div className="bg-white p-5 rounded-2xl shadow-sm mb-6 border border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 mb-4">精彩瞬间</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square rounded-xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-100 hover:border-slate-300 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-2xl mb-1">add_a_photo</span>
              <span className="text-[10px] font-bold">上传照片</span>
            </div>
            <div className="aspect-square rounded-xl bg-slate-100 overflow-hidden relative group">
              <img src="/images/child-swimming.jpg" className="w-full h-full object-cover" />
              <button className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-white border-t border-slate-100 p-6 pb-8 z-20">
        <button className="w-full bg-slate-800 text-white font-bold py-4 rounded-2xl hover:bg-slate-900 transition-colors shadow-lg shadow-slate-200 block text-center text-lg">
          发送报告
        </button>
      </div>
    </div>
  );
}
