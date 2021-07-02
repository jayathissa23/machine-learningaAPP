import './App.css';
import Navigation from './components/Navigatiohn/Navigation';
import Logo from './components/logo/Logo'
import ImgLinkform from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'

function App() {
  return (
    <div className="App">
      <Navigation />
       <Logo />
       <Rank />
       <ImgLinkform />
              {/*<FaceRecognition /> */}
    </div>
  );
}

export default App;
