import React from 'react';
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import { resume } from './data/resume'
import "react-image-gallery/styles/css/image-gallery-no-icon.css"

function App() {
  return (
    <div>
      <Header data={resume.header}/>
      {/* <About data={resume.about}/> */}
      <Resume data={resume.resume}/>
      <Portfolio data={resume.portfolio}/>
      <Footer/>
    </div>
  );
}

export default App;
