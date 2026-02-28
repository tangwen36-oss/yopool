import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function CoachBottomNav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg shadow-slate-200 border border-white p-2 flex justify-between items-center">
      {[
        { icon: 'dashboard', label: '工作台', link: '/coach' },
        { icon: 'calendar_month', label: '排课', link: '/coach/schedule' },
        { icon: 'qr_code_scanner', label: '核销', link: '/coach/summary' },
        { icon: 'person', label: '我的', link: '/coach/profile' },
      ].map((item, i) => {
        const isActive = path === item.link || (item.link !== '/coach' && path.startsWith(item.link));
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
