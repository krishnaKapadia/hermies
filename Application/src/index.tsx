import { createRenderer } from "fela";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider as FelaProvider } from "react-fela";
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './sections/App';
import registerServiceWorker from './Services/service-workers/registerServiceWorker';
import CreateStore  from "./Utils/Redux/CreateStore";
import { PersistGate } from "redux-persist/integration/react";

const renderer = createRenderer();
const ReduxStore = CreateStore();
// ReduxStore.persistor.purge();
ReactDOM.render(
    <ReduxProvider store={ReduxStore.store}>
      <PersistGate loading={null} persistor={ReduxStore.persistor}>
        <FelaProvider renderer={renderer}>
          <App />
        </FelaProvider>
      </PersistGate>
    </ReduxProvider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
