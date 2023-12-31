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
import AssAcc from './components/accordian/AccordianDataAssignment'
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import AddAssign from './pages/AdminPortal/AddAssign'
import AddVideos from './pages/AdminPortal/AddVideos';
import AdminPortal from './pages/AdminPortal/AdminPortal'
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
              <Accordian course='Physics'/>
            </div>
          }
        />

        <Route
          path="/physics/video"
          element={
            <div>
              <VideoAcc course='Physics'/>
            </div>
          }
        />
         <Route
          path="/physics/assignment"
          element={
            <div>
              <AssAcc course='Physics'/>
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
              <Accordian course='Bio Medical'/>
            </div>
          }
        />

        <Route
          path="/bio/video"
          element={
            <div>
              <VideoAcc course='Bio Medical'/>
            </div>
          }
        />

<Route
          path="/bio/assignment"
          element={
            <div>
              <AssAcc course='Bio Medical'/>
            </div>
          }
        />
<Route
          path="/adminLogin"
          element={
            <div>
              <Login />
            </div>
          }
        />

{/* <Route
          path="/addAssignment"
          element={
            <div>
              <AddAssign />
            </div>
          }
        /> */}
<Route
          path="/admin"
          element={
            <div>
              <AdminPortal />
            </div>
          }
        />
<Route
          path="/createAdmin"
          element={
            <div>
              <Signup />
            </div>
          }
        />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;