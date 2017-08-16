import React from 'react';
import Header from './components/Header';
import NameContainer from './containers/NameContainer';
import AddressContainer from './containers/AddressContainer';
import TeamsContainer from './containers/TeamsContainer';

const App = () => (
  <div>
    <Header />
    <div className="container">
      <hr />
      <NameContainer />
      <hr />
      <AddressContainer />
      <hr />
      <TeamsContainer />
    </div>
  </div>
);

export default App;
