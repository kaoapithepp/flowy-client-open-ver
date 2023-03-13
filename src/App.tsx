import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Assets
import Fonts from './assets/Fonts';
import Reset from './assets/Reset';
import Variables from './assets/Variables';

// Pages
import Login from './pages/Account/Login';
import Register from './pages/Account/Register';
import SuccessReg from './pages/Account/SuccessReg';
import ExplorePage from './pages/Explore/ExplorePage';
import Filter from './pages/Filter/Filter';
import InformationPage from './pages/Information/InformationPage';
import PaymentPage from './pages/Payment/PaymentPage';
import Ticket from './pages/Ticket/Ticket';
import ForgotPassword from './pages/Account/ForgotPassword';
import DeskSelectPage from './pages/Booking/02_Desk/DeskSelectPage';
import CustomerAmountPage from './pages/Booking/01_CustomerAmount/CustomerAmountPage';
import TimeSlotPage from './pages/Booking/03_TimeSlot/TimeSlotPage';
import LoadingScreen from './components/ui/LoadingScreen';

// Contexts
import { useBookEntityValue } from './context/BookEntityProvider';

export const IS_PRODUCTION_MODE = false;

const App: React.FC = () => {
  const { bookingEntity, setBookingEntity } = useBookEntityValue();

  useEffect(() => {
    if(!IS_PRODUCTION_MODE) console.log(bookingEntity);
  },[bookingEntity]);

  return (
    <>
      <Reset />
      <Fonts />
      <Variables />
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path='/successreg' element={<SuccessReg />} />

        {/* Catalog */}
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/ticket" element={<Ticket />} />

        {/* Booking Process */}
        <Route path="/info/:id" element={<InformationPage />} />
        <Route path='/book-ctm-amt/:placeId' element={<CustomerAmountPage />} />
        <Route path='/book-desk/:placeId' element={<DeskSelectPage />} />
        <Route path='/book-time-slot/:deskId' element={<TimeSlotPage />} />
        <Route path="/payment/:bookId" element={<PaymentPage />} />

        {/* Loading screen */}
        <Route path='/loading-screen' element={<LoadingScreen />} />
      </Routes>
    </>
  );
}
export default App;
