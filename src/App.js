import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
// import { Footer } from 'flowbite-react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
