import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Feature from './Components/Feature';
import Header from './Components/Header';
import Presentation from './Components/Presentation';
import aboutImage1 from './images/about.png'
import aboutImage2 from './images/download.png'
function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutImage1} title={'Comes with all you need for daily life'} button={'Get it'} />
      <Presentation />
      <About image={aboutImage2} title={'Download now'} button={'Download'} />
      <Contact />
    </div>
  );
}

export default App;
