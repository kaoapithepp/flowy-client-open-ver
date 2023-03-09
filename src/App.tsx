import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Assets
import Fonts from './assets/Fonts';
import Reset from './assets/Reset';
import Variables from './assets/Variables';

// Pages
import ExporePage from './pages/Explore/ExplorePage';
import Login from './pages/Account/Login';
import Register from './pages/Account/Register';
import Explore from './pages/Explore/ExplorePage';
import Filter from './pages/Filter/Filter';
import Information from './pages/Information/Information';
import PaymentPage from './pages/Payment/PaymentPage';
import Ticket from './pages/Ticket/Ticket';
import ForgotPassword from './pages/Account/ForgotPassword';
import DeskSelectPage from './pages/Booking/02_Desk/DeskSelectPage';
import CustomerAmountPage from './pages/Booking/01_CustomerAmount/CustomerAmountPage';
import TimeSlotPage from './pages/Booking/03_TimeSlot/TimeSlotPage';
import LoadingScreen from './components/ui/LoadingScreen';

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <Fonts />
      <Variables />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/expore" element={<ExporePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/info/:id" element={<Information />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path='/book-ctm-amt/:placeId' element={<CustomerAmountPage />} />
        <Route path='/book-desk/:placeId' element={<DeskSelectPage />} />
        <Route path='/book-time-slot/:deskId' element={<TimeSlotPage />} />
        <Route path='/loading-screen' element={<LoadingScreen />} />
      </Routes>
    </>
  );
}
export default App;
