import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg shadow-slate-200 border border-white p-2 flex justify-between items-center">
      {[
        { icon: 'home', label: '首页', link: '/' },
        { icon: 'pool', label: '选课', link: '/courses' },
        { icon: 'school', label: '指南', link: '/guide' },
        { icon: 'person', label: '我的', link: '/profile' },
      ].map((item, i) => {
        const isActive = path === item.link || (item.link !== '/' && path.startsWith(item.link));
        return (
          <Link 
            key={i} 
            to={item.link}
            className={clsx(
              "flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all",
              isActive ? "text-primary bg-sky-50" : "text-slate-400 hover:text-slate-600"
            )}
          >
            <span className={clsx("material-symbols-outlined mb-0.5", isActive ? "filled" : "")}>{item.icon}</span>
            <span className="text-[10px] font-bold">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
