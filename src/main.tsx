import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import BookEntityProvider from './context/BookEntityProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const helmetContext = {};

root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <BookEntityProvider>
          <App />
        </BookEntityProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
