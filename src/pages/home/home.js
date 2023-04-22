import Header from "../../components/Header.js"
import './home.css'
import Programs from "../../components/Programs.js"
import Values from "../../components/Values.js"
import Shop from "../../components/Shop.js"
import About from "../../components/about.js"
import FAQ from "../../components/FAQ.js"
import Testimonial from "../../components/Testimonial.js"

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <Header />
        <Programs />
        <Values />
        <Shop />
        <About />
        <FAQ />
        <Testimonial />
      </div>
    </section>
  )
}

export default Home