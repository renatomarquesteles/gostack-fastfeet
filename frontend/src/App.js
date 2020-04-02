import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import Routes from './routes';
import { persistor, store } from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </PersistGate>
    </Provider>
  );
}

export default App;
