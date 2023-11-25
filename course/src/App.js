import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar />
    <Home />
    <About />
  <Footer />
    </div>
  );
}

export default App;