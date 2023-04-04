import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai/index.esm.js';
import { AiOutlineMinus } from 'react-icons/ai/index.esm.js';


const FAQs = ({question, answer}) => {
  const [ans, setAns] = useState(false)

  return (
    <article  onClick={() => setAns(!ans)} className="faqs-container">
      <div className="faqs-top">
        <h4 className="faqs-question">{question}</h4>
        <button>
          {!ans && <AiOutlinePlus className="plus-icon" />}
          { ans && <AiOutlineMinus className="plus-icon" />}
        </button>
      </div>
      {ans && <p className="faqs-answer">{answer}</p>}
    </article>
  )
}

export default FAQs