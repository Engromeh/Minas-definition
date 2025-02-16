import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Disclosure } from "@headlessui/react";

const faqQuestions = [
  { question: "كيف أبدأ؟", answer: "يمكنك البدء عبر التسجيل..." },
  { question: "ما هي شركة ALFARES؟", answer: "شركة ALFARES..." },
  { question: "ما هي رؤية ALFARES؟", answer: "الرؤية الخاصة بالشركة..." },
  { question: "ما هي الخدمات التي تقدمونها؟", answer: "نحن نقدم خدمات مثل..." },
  { question: "ما هي شروط وأحكام افتتاح الشركة؟", answer: "الشروط والأحكام الخاصة..." },
  { question: "كيف يعمل موقع ALFARES؟", answer: "موقع التسويق هو منصة إلكترونية..." },
  { question: "من هم مؤسسين ALFARES؟", answer: "معلومات عن المؤسسين..." },
  { question: "ما هي أهداف ALFARES؟", answer: "الأهداف الرئيسية لـ ALFARES..." },
  { question: "ما هي المزايا التي تقدمها شركة ALFARES؟", answer: "المزايا المقدمة تشمل..." },
];

const FAQ = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5" style={{ direction: "rtl" }}>
        <h2 className="text-center text-white mb-4">FAQ</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="accordion" id="faqAccordionRight">
              {faqQuestions.slice(0, Math.ceil(faqQuestions.length / 2)).map((faq, index) => (
                <div key={index} className="accordion-item mb-3" style={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}>
                  <h2 className="accordion-header">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="accordion-button custom-accordion">
                            {faq.question}
                          </Disclosure.Button>
                          <Disclosure.Panel className="accordion-collapse collapse">
                            <div className="accordion-body">{faq.answer}</div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </h2>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <div className="accordion" id="faqAccordionLeft">
              {faqQuestions.slice(Math.ceil(faqQuestions.length / 2)).map((faq, index) => (
                <div key={index} className="accordion-item mb-3" style={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}>
                  <h2 className="accordion-header">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Bu className="accordion-button custom-accordion">
                            {faq.question}
                          </Disclosure.Bu>
                          <Disclosure.Panel className="accordion-collapse collapse">
                            <div className="accordion-body">{faq.answer}</div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;