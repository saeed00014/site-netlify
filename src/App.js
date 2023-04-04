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
        <Route path="sports-pro-site" index element={<Home />}/>
        <Route path="sports-pro-site/about" element={<About />}/>
        <Route path="sports-pro-site/contact" element={<Contact />}/>
        <Route path="sports-pro-site/plans/*" element={<Plans />}/>
        <Route path="sports-pro-site/trainers" element={<Trainers />}/>
        <Route path="sports-pro-site/card"  element={<Card />} />
        <Route path="sports-pro-site/*" element={<Notfound />}/>
        <Route path="sports-pro-site/signup" element={<Signup />}/>
        <Route path="sports-pro-site/signin" element={<Signin />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App