import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';

//Базовый сетап Create React App и Store провайдер для Redux Toolkit

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);