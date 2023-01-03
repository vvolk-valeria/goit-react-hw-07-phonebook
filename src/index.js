import React from 'react';
import ReactDOM from 'react-dom/client';
 import { App } from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

