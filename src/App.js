import React from 'react';
import CakeStore from './Components/CakeStore.component'
import './App.css';
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import IceCreamContainer from './Components/IceCreamContainer.component'
import HookcakeContanier from "./Components/HookcakeContanier.component";
import UserContainer from './Components/userContainer.component'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <header className="App-header">
        <CakeStore />
        <IceCreamContainer />
        <HookcakeContanier />
      </header>
      <UserContainer />
      </Provider>
    </div>
  );
}

export default App;
