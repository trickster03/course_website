import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
    <Navbar />
    <Home />
    <About />
    <Footer />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
