import React from "react";
import phhhh5 from "../../../Images/romehh.svg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Slider from "../ourWorks/Slider";
import OurWorksPage from "../ourWorks/OurWorksPage";

const CompaneyDetailes = () => {
  const services = {
    title: "شركه نبض الياسمين الطبيه",
    description:
      "رسالتنا هي توفير رعاية طبية متميزة ومبتكرة لمرضانا من خلال فريق محترف ومتخصص يعمل بروح الفريق والتعاون",
    Ourvision:
      "نسعى لأن نكون الخيار الأمثل للرعاية الصحية في مجتمعنا من خلال توفير خدمات طبية متميزة وبأعلى معايير الجودة والأمان",
    Ourservices: [
      "استشارات طبية متخصصة في جميع التخصصات الطبية الرئيسية.",
      "خدمات التشخيص المتقدمة بما في ذلك التصوير بالرنين المغناطيسي والتصوير بالأشعة.",
      "علاج وتأهيل لمجموعة واسعة من الحالات الطبية.",
      "خدمات طب الأسنان والتجميلية.",
    ],
  };

  return (
    <>
      <Navbar />
      <div className="container " style={{ marginTop: "2%", height: "auto" }}>
        <div className="row g-3 align-items-stretch">
          <div className="col-md-3 d-flex justify-content-center">
            <div
              className="d-flex flex-column align-items-center text-center p-4"
              style={{
                backgroundColor: "#2B3972",
                borderRadius: "10px",
                width: "100%",
                maxWidth: "300px",
                height: "auto",
              }}
            >
              <div
                className="  rounded"
                style={{ width: "100%", borderRadius: "10px" }}
              >
                <img
                  src={phhhh5}
                  alt={services.title}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                />
              </div>
              <hr style={{ width: "180px", border: "2px solid white" }} />
              <h5
                className="mt-1"
                style={{ color: "#F4CFAB", fontWeight: "bold" }}
              >
                من نحن
              </h5>
              <p
                className="text-white"
                style={{ fontSize: "16px", fontWeight: "bold" }}
              >
                مرحبًا بكم في شركة نبض الياسمين الطبية! نحن مركز طبي متعدد
                التخصصات ملتزمون بتقديم رعاية صحية عالية الجودة وشاملة لعملائنا.
                يقع مجمعنا في الرياض، يعمل لخدمتكم 24 ساعة، ويوفر أعلى مستويات
                الرعاية الطبية.
              </p>
            </div>
          </div>

          <div className="col-md-9 h-auto">
            <div
              className="p-4 text-white"
              style={{
                backgroundColor: "#2B3972",
                borderRadius: "10px",
                height: "100%",
              }}
            >
              <h5
                className="fw-bold text-light"
                style={{
                  direction: "rtl",
                  fontSize: "30px",
                  fontWeight: "bolder",
                }}
              >
                اسم الشركة : {services.title}
              </h5>
              <p
                style={{
                  direction: "rtl",
                  color: "#D9D9D9",
                  lineHeight: 1.8,
                  fontSize: "18px",
                }}
              >
                <strong style={{ color: "#F4CFAB", fontWeight: "bold" }}>
                  رسالتنا:
                </strong>
                <br />
                <div style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  {services.description}
                </div>
              </p>

              <p
                style={{
                  direction: "rtl",
                  color: "#D9D9D9",
                  lineHeight: 1.8,
                  fontSize: "18px",
                }}
              >
                <strong
                  style={{
                    color: "#F4CFAB",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                >
                  رويتنا:
                </strong>{" "}
                <div style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  {services.Ourvision}
                </div>
              </p>
              <p
                style={{
                  direction: "rtl",
                  color: "#D9D9D9",
                  lineHeight: 1.8,
                  fontSize: "18px",
                }}
              >
                <strong style={{ color: "#F4CFAB", fontWeight: "bold" }}>
                  خدماتنا:
                </strong>{" "}
                <div style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  <p>
                    مجمعنا الطبي يوفر مجموعة واسعة من الخدمات الطبية التخصصية،
                    بما في ذلك:
                  </p>
                  <ul>
                    {services.Ourservices.map((service, index) => (
                      <li key={index} style={{ marginRight: "3%" }}>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>
        <Slider />
      </div>
      <Footer />
    </>
  );
};

export default CompaneyDetailes;
