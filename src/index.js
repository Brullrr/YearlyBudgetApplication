import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './store/index';
import { PersistGate} from 'redux-persist/es/integration/react';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//basename={process.env.PUBLIC_URL}
