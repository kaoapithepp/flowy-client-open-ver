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
        <Route path="/information" element={<Information />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </>
  );
}
export default App;
