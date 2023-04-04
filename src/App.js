import { BrowserRouter, Routes, Route } from "react-router-dom"


import Footer from "./components/Footer.js"
import Navbar from "./components/Navbar.js"
import About from "./pages/about/about.js"
import Card from "./pages/card/card.js"
import Contact from "./pages/contact/contact.js"
import Home from "./pages/home/home.js"
import Notfound from "./pages/not-found/notfound.js"
import Plans from "./pages/plans/plans.js"
import Trainers from "./pages/trainers/trainers.js"
import Signup from "./pages/signup/signup.js"
import Signin from "./pages/signin/signin.js"


const App = () => {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/plans/*" element={<Plans />}/>
        <Route path="/trainers" element={<Trainers />}/>
        <Route path="/card"  element={<Card />} />
        <Route path="/*" element={<Notfound />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App