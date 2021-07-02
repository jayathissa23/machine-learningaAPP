import './App.css';
import Navigation from './components/Navigatiohn/Navigation';
import Logo from './components/logo/Logo'
import ImgLinkform from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import React from 'react';


const particleOption={
  particles: {
    number: {
      value:105,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  
}


class App extends React.Component{
  constructor(){
    super();
    this.state={
      input:'',
    }
  }

  onInputChange=(e)=>{
    console.log(e.target.value);
  }

  onButtonSubmit=()=>{
    console.log(`click`);
  }

  render(){
  return (
    <div className="App">
    <Particles
        className='particles'
        params={particleOption}
        />
    <Navigation />
      <Logo />
      <Rank />
      <ImgLinkform onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            {/*<FaceRecognition /> */}
  </div>
  );
}
}

export default App;
