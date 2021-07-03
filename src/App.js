import './App.css';
import Navigation from './components/Navigatiohn/Navigation';
import Logo from './components/logo/Logo';
import ImgLinkform from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import SignIN from './components/SignIn/SignIn';
import Registar from './components/Registar/Registar';
import React from 'react';

import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '108610d1b9bf41ab9c5e02f09f7209dc'
 });
 




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
      imageUrl:'',
      box:{},
      route:'sign in',
      isSignIn:false,
    }
    
  }

  calculatefaceLocation=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
     const image=document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
   
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox=(box)=>{

    this.setState({box:box})
  }

  onInputChange=(e)=>{
    
    this.setState({input: e.target.value});
  }

  onButtonSubmit=()=>{
    
    this.setState({imageUrl: this.state.input});
    
    

    app.models.predict(Clarifai
        .FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displayFaceBox(this.calculatefaceLocation(response)))
  }
  

  onRouteChange=(route)=>{
    
    this.setState({route:route}) 
    
    if(route==='home') this.setState({isSignIn:true}) 
    if(route==='register') this.setState({isSignIn:false}) 
    if(route==='sign in') this.setState({isSignIn:false}) 
  }
  

  render(){
  return (
    <div className="App">
    <Particles
      className='particles'
      params={particleOption}
      />
    <Navigation onRouteChange={this.onRouteChange} isSignIn={this.state.isSignIn}/>
      {(() => { //IIFE
        
        if (this.state.route==='sign in'){ // SIGN IN window
               return <SignIN  onRouteChange={this.onRouteChange}/>
        }
        if(this.state.route==='register'){  // Register Window
          return <Registar onRouteChange={this.onRouteChange}/>
        }    
        else{ //HOME window
            return( <div>
            <Logo />
            <Rank />
            <ImgLinkform onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
            </div>)
              
          }
              
      })()}
</div>
);
}
}

export default App;
