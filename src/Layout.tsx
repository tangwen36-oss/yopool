import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import CoachBottomNav from './components/CoachBottomNav';

export default function Layout() {
  const location = useLocation();
  const isCoachPage = location.pathname.startsWith('/coach');
  const hideNav = ['/checkout', '/booking-confirm', '/report', '/guide'].some(path => location.pathname.startsWith(path));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-sky-50 flex justify-center items-center py-4 sm:py-8 font-sans text-slate-900">
      <div className="relative w-full max-w-[390px] h-[844px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden ring-1 ring-black/5 flex flex-col">
        <div className="flex-1 overflow-hidden relative flex flex-col bg-slate-50">
          <Outlet />
        </div>
        {!hideNav && (
          <div className="absolute bottom-6 left-0 w-full px-6 z-50 pointer-events-none">
            <div className="pointer-events-auto">
              {isCoachPage ? <CoachBottomNav /> : <BottomNav />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
