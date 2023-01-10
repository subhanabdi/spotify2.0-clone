import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DataLayerProvider } from './DataLayerContext';
import reducer, { initialState } from './reducer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayerProvider initialState={initialState} reducer={reducer}>
      <App />
    </DataLayerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
