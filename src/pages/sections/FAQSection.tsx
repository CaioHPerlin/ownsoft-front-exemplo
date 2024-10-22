import React, { useState } from 'react';
import Section from '../../components/Section';
import Text from '../../components/Text';
import arrowIcon from '../../assets/images/arrow-icon.svg';

type FAQSectionProps = {
  backgroundTint?: 'bg-white' | 'bg-secondary' | string;
};

const FAQSection: React.FC<FAQSectionProps> = ({ backgroundTint }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
      answer: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Ut enim ad minim veniam?',
      answer:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'Duis aute irure dolor in reprehenderit in voluptate velit esse?',
      answer:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      question: 'Excepteur sint occaecat cupidatat non proident?',
      answer:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  return (
    <Section backgroundTint={backgroundTint} style="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Text.H1 style="text-blue-600">Perguntas frequentes</Text.H1>
        <div className="w-2/3 mt-4">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2 border-b">
              <button
                onClick={() => toggleDropdown(index)}
                className="flex justify-between items-center w-full text-left py-2 text-black font-semibold"
              >
                <span>{faq.question}</span>
                <img
                  src={arrowIcon}
                  alt="Arrow"
                  className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  style={{ width: '14px', height: '14px' }}
                />
              </button>
              {activeIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;
