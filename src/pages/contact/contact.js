import BackgroundHeader from "../../images/header_bg_2.jpg"
import Header from "../../components/Header-back.js"
import './contact.css'

import {BsWhatsapp} from 'react-icons/bs/index.esm.js'
import {TbBrandTelegram} from 'react-icons/tb/index.esm.js'
import {AiOutlineMail} from 'react-icons/ai/index.esm.js'

const Contact = () => {
  return (
    <>
      <Header image={BackgroundHeader} title='Get In Thouch' text="Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your projec"/>
      <section>
        <div className="section__main-container">
          <div className="section-container">
            <div className="aa-container">
              <a href="https://wa.me/+989010276284"> <BsWhatsapp id="social"/> </a>
            </div>
            <div className="aa-container">
              <a href="mailto:saeed00014@gmail.com" target="_blank" rel="noreferrer noopener"> <AiOutlineMail id="social" /> </a>
            </div>
            <div className="aa-container">
              <a href="https://t.me/seed" target="_blank" rel="noreferrer noopener"> <TbBrandTelegram id="social" /> </a> 
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact