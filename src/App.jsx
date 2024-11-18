import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Upload from './Components/Upload'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import Contact from './Components/Contact'
import QuestionsList from './Components/QuestionsList'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Link
} from "react-router-dom";
import Pricing from './Components/Pricing'
import HeroSection2 from './Components/HeroSection2'


function App() {
  const location = useLocation();

  const showHeaderFooter = location.pathname !== '/login' && location.pathname !== '/signup';

  return (
    <>
    {showHeaderFooter && <Navbar />}
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/upload">
        <Upload />
        <QuestionsList />
      </Route>
      <Route path="/pricing">
        <Pricing />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <HeroSection />
        <HeroSection2 />
      </Route>
    </Switch>
    {showHeaderFooter && <Footer />}
  </>
  )
}
// Wrap App in Router
const RootApp = () => (
  <Router>
    <App />
  </Router>
);
export default RootApp;



  {/* <Login />  */}
      {/* <Signup /> */}
      {/* <Navbar /> */}
      {/* <Upload /> */}
      {/* <Register /> */}
      {/* <HeroSection /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    // </>