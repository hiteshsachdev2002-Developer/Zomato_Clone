import React from 'react';
import './styles/Header.css';
import Header from './Components/HeaderComponents/Header';
import {Outlet} from 'react-router-dom';
import {useIsOnline} from './utils/CoustomHooks/useConnection.jsx'
import OfflinePage from './Components/Offline_page_Components/OfflinePage.jsx'
import { Provider } from 'react-redux';
import appStore from './ReduxStore/appStore.js';

function App() {
  const isOnline = useIsOnline();
  return (
    <Provider store={appStore}>
    <>

    {
      
       isOnline ? (<><Header/>
        <Outlet/></>):(
          <OfflinePage/>
        )
    }
    </>
    </Provider>
  )
}

export default App
