import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './i18n';

import global_pl from './translations/pl/global.json';
import global_ua from './translations/ua/global.json';
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolatioon: { escapeValue: false },
  lng: "pl",
  resources: {
    pl: {
      global: global_pl
    },
    ua: {
      global: global_ua
    }
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
    
    
  </React.StrictMode>
);
