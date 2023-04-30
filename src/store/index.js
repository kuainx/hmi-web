import React from 'react';
import { observer} from 'mobx-react-lite';
import { runningStore } from './runningStore';

export const storesContext = React.createContext({
  runningStore: new runningStore(),
});

export const mobxObserver = observer;
export const useStores = () => React.useContext(storesContext);
