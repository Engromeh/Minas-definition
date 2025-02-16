import React from "react";
import markating from "../../../Images/markating.svg";
import divider from "../../../Images/Line 4.svg";

const MarketingSection = () => {
  return (
    <div style={{ backgroundColor: "#151723" }}>
      <section
        className="container text-light py-5 w-full"
        style={{ backgroundColor: "#151723" }}
      >
        <div
          className="row  align-items-center  flex-md-row text-md-end text-center text-md-start marking-section"
          style={{ marginLeft: "10%" }}
        >
          <div
            className="col-lg-6 col-md-6 d-flex flex-column justify-content-center align-items-md-end text-center text-md-end"
            style={{ direction: "rtl" }}
          >
            <h2
              className="fw-bold"
              style={{ fontFamily: "Cairo", fontSize: "77px" }}
            >
              جعل التسويق أكثر من مجرد أداة ترويجية
            </h2>
            <p
              className="mt-3 fs-5"
              style={{
                maxWidth: "600px",
                fontFamily: "Cairo",
                fontSize: "32px",
                color: "#D9D9D9",
                margin: "0 auto",
              }}
            >
              التسويق ليس مجرد أداة ترويجية، بل هو عملية شاملة تهدف إلى فهم
              احتياجات العملاء وتقديم قيمة حقيقية لهم. يساعدك على بناء علامة مع
              العملاء من خلال التواصل الفعّال واستراتيجيات التفاعل، مما يحقق لك
              النجاح والاستمرارية. سنساعدك أيضًا على تعزيز الوعي بعلامتك
              التجارية أو الخدمة بطرق تنافسية وفعّالة.
            </p>
            <div className="mt-4 w-100 d-flex flex-column align-items-center align-items-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap gap-3 w-100">
                <div className="text-center">
                  <h4
                    className="fw-bold"
                    style={{ fontSize: "77px", fontFamily: "Cairo" }}
                  >
                    +80
                  </h4>
                  <p
                    className="mb-0 fs-5"
                    style={{
                      fontFamily: "Cairo",
                      fontSize: "32px",
                      color: "#D9D9D9",
                    }}
                  >
                    جائزة مكتسبة
                  </p>
                </div>
                <img src={divider} alt="divider" style={{ height: "50px" }}  className="marketing-divider"/>
                <div className="text-center">
                  <h4
                    className="fw-bold"
                    style={{ fontSize: "77px", fontFamily: "Cairo" }}
                  >
                    +20
                  </h4>
                  <p
                    className="mb-0 fs-5"
                    style={{
                      fontFamily: "Cairo",
                      fontSize: "32px",
                      color: "#D9D9D9",
                    }}
                  >
                    سنوات الخبرة
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap gap-3 w-100 mt-4">
                <div className="text-center">
                  <h4
                    className="fw-bold"
                    style={{ fontSize: "77px", fontFamily: "Cairo" }}
                  >
                    +140
                  </h4>
                  <p
                    className="mb-0 fs-5"
                    style={{
                      fontFamily: "Cairo",
                      fontSize: "32px",
                      color: "#D9D9D9",
                    }}
                  >
                    ثقة مكتسبة
                  </p>
                </div>
                <img src={divider} alt="divider" style={{ height: "50px" }} className="marketing-divider"/>
                <div className="text-center">
                  <h4
                    className="fw-bold"
                    style={{ fontSize: "77px", fontFamily: "Cairo" }}
                  >
                    +460
                  </h4>
                  <p
                    className="mb-0 fs-5"
                    style={{
                      fontFamily: "Cairo",
                      fontSize: "32px",
                      color: "#D9D9D9",
                    }}
                  >
                    المشاريع المنجزة
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 text-center d-flex justify-content-center mt-4 mt-md-0">
            <img
              src={markating}
              alt="Marketing Presentation"
              className="img-fluid rounded shadow marketing-img"
              style={{
                height: "620px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingSection;
