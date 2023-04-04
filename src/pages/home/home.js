import Header from "../../components/Header.js"
import './home.css'
import Programs from "../../components/Programs.js"
import Values from "../../components/Values.js"
import Shop from "../../components/Shop.js"
import FAQ from "../../components/FAQ.js"
import Testimonial from "../../components/Testimonial.js"

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Programs />
      <Values />
      <Shop />
      <FAQ />
      <Testimonial />
    </div>
  )
}

export default Home