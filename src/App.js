import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar'
import TourList from './Components/TourList/TourList'


function App() {
  return (
    <React.Fragment >
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
