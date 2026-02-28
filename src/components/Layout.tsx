import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from './BottomNav';
import CoachBottomNav from './CoachBottomNav';

export default function Layout() {
  const location = useLocation();
  const path = location.pathname;

  // Determine which nav to show
  const isCoachPage = path.startsWith('/coach');
  const isCheckoutPage = path === '/checkout' || path === '/booking-confirm';
  const isSummaryPage = path === '/coach/summary';
  
  // Some pages might not want a bottom nav at all (like checkout flow)
  const showNav = !isCheckoutPage && !isSummaryPage;

  return (
    <>
      <Outlet />
      {showNav && (
        isCoachPage ? <CoachBottomNav /> : <BottomNav />
      )}
    </>
  );
}
