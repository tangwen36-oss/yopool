import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import CourseSelectionPage from './pages/CourseSelectionPage';
import GuidePage from './pages/GuidePage';
import CheckoutPage from './pages/CheckoutPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import GrowthReportPage from './pages/GrowthReportPage';
import ProfilePage from './pages/ProfilePage';
import CoachHomePage from './pages/CoachHomePage';
import LessonSummaryPage from './pages/LessonSummaryPage';
import SchedulePage from './pages/SchedulePage';
import CoachProfilePage from './pages/CoachProfilePage';
import OrdersPage from './pages/OrdersPage';
import AchievementsPage from './pages/AchievementsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CourseSelectionPage />} />
          <Route path="guide" element={<GuidePage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="booking-confirm" element={<BookingConfirmationPage />} />
          <Route path="report" element={<GrowthReportPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          
          {/* Coach Routes */}
          <Route path="coach">
            <Route index element={<CoachHomePage />} />
            <Route path="summary" element={<LessonSummaryPage />} />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="profile" element={<CoachProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
