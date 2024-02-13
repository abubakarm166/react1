import './App.css';
import Body from './components/body';
import Faq from './components/faq';
import Footer from './components/footer';
import GoogleMapComponent from './components/map';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar  />
      </header>
      <div className="container-fluid p-0">
        <Body/>
      </div>
      <div className="container">
        <GoogleMapComponent></GoogleMapComponent>
      </div>
      <div className="container">
        <Faq></Faq>
      </div>
      <div className="content">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
