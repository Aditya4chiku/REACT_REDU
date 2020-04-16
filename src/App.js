import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'

import Routes from './Routes'
import { PersistGate } from 'redux-persist/integration/react'
import setAuthToken from './redux/utils/setAuthToken'

if (localStorage.getItem('jwt')) {
  setAuthToken(localStorage.getItem('jwt'));
}
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
