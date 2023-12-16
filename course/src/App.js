import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer'
import {Route, Routes,useLocation } from "react-router-dom";
import Physics from './pages/Physics/Physics'
import Bio from './components/Bio/Biomedical'
import Accordian from './components/accordian/AccordianDataNotes'
import VideoAcc from './components/accordian/AccordianDataVideos'

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App=()=> {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
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