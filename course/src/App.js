import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer'
import { Route, Routes } from "react-router-dom";
import Physics from './pages/Physics/Physics'
import Bio from './components/Bio/Biomedical'
import Accordian from './components/accordian/AccordianDataNotes'
import VideoAcc from './components/accordian/AccordianDataVideos'

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
    <Route
              path="/"
              element={
                <div>
                  <Home />
                </div>
              }
            />

<Route
              path="/physics"
              element={
                <div>
                  <Physics />
                </div>
              }
            />

<Route
              path="/physics/notes"
              element={
                <div>
                  <Accordian />
                </div>
              }
            />

<Route
              path="/physics/video"
              element={
                <div>
                  <VideoAcc />
                </div>
              }
            />

<Route
              path="/bio"
              element={
                <div>
                  <Bio />
                </div>
              }
            />

<Route
              path="/bio/notes"
              element={
                <div>
                  <Accordian />
                </div>
              }
            />

<Route
path="/bio/video"
              element={
                <div>
                  <VideoAcc />
                </div>
              }
            />
 
     </Routes>
  <Footer />
    </div>
  );
}

export default App;