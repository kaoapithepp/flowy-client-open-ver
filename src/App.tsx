import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Assets
import Fonts from './assets/Fonts';
import Reset from './assets/Reset';
import Variables from './assets/Variables';

// Pages
import Expore from './pages/Explore/Explore';
import Login from './pages/Account/Login';
import Register from './pages/Account/Register';
import Booking from './pages/Booking/Booking';
import Explore from './pages/Explore/Explore';
import Filter from './pages/Filter/Filter';
import Information from './pages/Information/Information';
import Payment from './pages/Payment/Payment';
import Ticket from './pages/Ticket/Ticket';
import ForgotPassword from './pages/Account/ForgotPassword';
import DeskSelect from './pages/Booking/Desk/DeskSelect';
import NumberOfCustomers from './pages/Booking/NumberOfCustomers/NumberOfCustomers';
import TimeSlot from './pages/Booking/TimeSlot/TimeSlot';

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <Fonts />
      <Variables />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/expore" element={<Expore />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/info/:id" element={<Information />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path='/desk-select' element={<DeskSelect />} />
        <Route path='/booking-number-of-customers' element={<NumberOfCustomers />} />
        <Route path='/booking-time-slot' element={<TimeSlot />} />
      </Routes>
    </>
  );
}
export default App;
