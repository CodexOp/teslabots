import React from 'react';
import Landing from './components/landing/Landing';
import './App.scss';
import Bots from './components/bots/Bots';
import Why from './components/why/Why';
import About from './components/about/About';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Landing />
      <Bots />
      <Why />
      <About />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
