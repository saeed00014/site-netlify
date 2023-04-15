import { faqs } from "../data.js"
import FAQs from "./FAQs.js"

const FAQ = () => {
  return (
    <section id="faqs" className="faqs__main-container">
      <div className="section-content">
        <div className="section-head">
          Our Answers to some of the Most Asked Questions
        </div>
        <div className="faqs-content">
            {faqs.map((faq) => {
              return (
                <FAQs key={faq.id} question={faq.question} answer={faq.answer}/>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default FAQ