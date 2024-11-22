import React from "react"
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom"
import Contact from './Components/Contact'
import Failure from './Components/Failure'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import HeroSection2 from './Components/HeroSection2'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Order from './Components/Order'
import Pricing from './Components/Pricing'
import QuestionsList from './Components/QuestionsList'
import Signup from './Components/Signup'
import Success from './Components/success'
import Team from './Components/Team'
import Upload from './Components/Upload'
import Dashboard from './Components/Admin/Dashboard.jsx'


function App() {
  const location = useLocation();

  const showHeaderFooter = location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/dashboard';

  return (
    <>
    {showHeaderFooter && <Navbar />}
    <Switch>
    <Route path="/dashboard">
        <Dashboard />
      </Route>
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
      <Route path="/order">
        <Order />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
      <Route path="/failure">
        <Failure />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/team">
        <Team />
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