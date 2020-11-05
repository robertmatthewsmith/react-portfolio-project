import React, { Component } from 'react';

import './index.css'
import './App.css';
import { DOGS } from './shared/dogs';
import FeaturedDogs  from './components/HomeComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';


class App extends Component {
  render() {
      return (
          <div className="App">
           <Header/>
           <FeaturedDogs />
           <Footer />
          </div>
      );
  }
}

export default App;
