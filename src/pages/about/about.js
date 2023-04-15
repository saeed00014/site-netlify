import Header from "../../components/Header-back.js"
import image from "../../images/header_bg_3.jpg"
import './about.css'
import ab1 from '../../images/about1.jpg'
import ab2 from '../../images/about2.jpg'
import ab3 from '../../images/about3.jpg'

const About = () => {
  return (
      <section>
        <Header image={image} title='WHO WE ARE' text='get to Know about Us our Expriemce and Goals'/>
        <div className="about__main-container">
          <div className="about-container">
            <div className="about1">
              <div className="about-pic">
                <img src={ab1} alt="" />
              </div>
              <div className="about-text">
                <h1>Services</h1>
                <p>We provide a safe, secure and comfortable environment to train in no matter what your experience or fitness level is. We boast a strong community of like-minded people supporting and encouraging one another to achieve legendary greatness.</p>
              </div>
            </div> 
            <div className="about1">
              <div className="about-text">
                <h1>Exprince</h1>
                <p>Over the last 46 years, our iconic gym brand has set the standard for all others to follow. Legends have been made here since 1976. Now its your turn.</p>
              </div>
              <div className="about-pic">
                <img src={ab2} alt="" />
              </div>
            </div>
            <div className="about1">
              <div className="about-pic">
                <img src={ab3} alt="" />
              </div>
              <div className="about-text">
                <h1>Goals</h1>
                <p>If youre serious about achieving a goal- no matter what that is- then we are your gym. From the best equipment, technology and programs to the best fitness professionals around, we are serious about getting you results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About