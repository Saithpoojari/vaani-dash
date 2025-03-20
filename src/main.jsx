import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AppProvider } from './context/AppContext.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/bootstrap.min.css';
import './css/dataTables.min.css';
import './css/poppins-fonts.css';
import './css/layout.css';
import './css/style.css';
import './css/dashboard.css';
// import './css/theme.css';
import './css/vaani2.0.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);