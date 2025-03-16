import { useState } from 'react';
import './FAQ.css'; // ملف CSS جديد للتنسيق

const FAQ = ({ faqs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="faq-section">
      <button className="faq-button" onClick={toggleModal}>
        الأسئلة الشائعة
      </button>

      {isOpen && (
        <div className="faq-modal-overlay" onClick={toggleModal}>
          <div className="faq-modal" onClick={(e) => e.stopPropagation()}>
            <h2>الأسئلة الشائعة</h2>
            <button className="close-button" onClick={toggleModal}>
              ✕
            </button>
            <ul className="faq-list">
              {faqs.map((faq, index) => (
                <li key={index} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default FAQ;