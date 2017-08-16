import React from 'react';
import Header from './components/Header';
import NameContainer from './containers/NameContainer';
import AddressContainer from './containers/AddressContainer';
import TeamsContainer from './containers/TeamsContainer';

const App = () => (
  <div>
    <Header />
    <NameContainer />
    <AddressContainer />
    <TeamsContainer />
  </div>
);

export default App;
