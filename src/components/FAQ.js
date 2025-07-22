import React, { useState } from 'react';

const faqData = [
  {
    question: 'What are your delivery timings?',
    answer: 'We deliver groceries every day between 7 AM and 10 PM. You can choose your preferred time slot during checkout.',
  },
  {
    question: 'Is there a minimum order value for free delivery?',
    answer: 'Yes, orders above ₹499 qualify for free delivery. Otherwise, a nominal delivery charge of ₹30 applies.',
  },
  {
    question: 'Can I return or replace grocery items?',
    answer: 'Yes, items can be returned or replaced within 24 hours if they are damaged, expired, or not as described.',
  },
  {
    question: 'Do you sell fresh vegetables and fruits?',
    answer: 'Currently, we are focusing on packaged groceries and essentials. Fresh produce will be added soon!',
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order is placed, you will receive an SMS/email with a tracking link and status updates.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          onClick={() => toggleFAQ(index)}
          style={{
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            cursor: 'pointer',
            padding: '15px',
            backgroundColor: index === activeIndex ? '#f9f9f9' : '#fff',
          }}
        >
          <h4 style={{ margin: 0 }}>{faq.question}</h4>
          {activeIndex === index && (
            <p style={{ marginTop: '10px', color: '#555' }}>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
