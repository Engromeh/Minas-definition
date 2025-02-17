import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import phhhh5 from "../../../../Images/image 6.svg";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const ServicesDetails = () => {
  const services = {
    title: "UGC",
    description:
      "من خلالها نتيح للعملاء إنشاء ومشاركة المحتوى المتعلق بالعلامة التجارية أو المنتج، وتهدف إلى زيادة التفاعل بين العملاء وتحليل المحتوى الذي ينتجه العملاء لتحسين تجربتهم وزيادة ثقتهم وتحقيق أهداف العمل.",
  };

  const projects = [
    { id: 1, title: "Project 1", image: phhhh5 },
    { id: 2, title: "Project 2", image: phhhh5 },
    { id: 3, title: "Project 3", image: phhhh5 },
    { id: 4, title: "Project 4", image: phhhh5 },
    { id: 5, title: "Project 5", image: phhhh5 },
    { id: 6, title: "Project 6", image: phhhh5 },
    { id: 7, title: "Project 7", image: phhhh5 },
    { id: 8, title: "Project 8", image: phhhh5 },
    { id: 9, title: "Project 9", image: phhhh5 },
    { id: 10, title: "Project 10", image: phhhh5 },
  ];

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row g-3">
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <div
              className="d-flex align-items-center justify-content-center rounded p-4 w-100"
              style={{
                backgroundColor: "#2B3972",
                borderRadius: "10px",
                height: "100%",
              }}
            >
              <img
                src={phhhh5}
                alt={services.title}
                style={{ width: "80px" }}
              />
            </div>
          </div>

          <div className="col-md-9">
            <div
              className="p-4 text-white"
              style={{
                backgroundColor: "#2B3972",
                borderRadius: "10px",
                height: "100%",
              }}
            >
              <h5 className="fw-bold text-light" style={{ direction: "rtl" }}>
                اسم الخدمة: {services.title}
              </h5>
              <p
                style={{
                  direction: "rtl",
                  color: "#D9D9D9",
                  lineHeight: 1.8,
                  fontSize: "18px",
                }}
              >
                <strong style={{ color: "white" }}>وصف الخدمة:</strong>{" "}
                {services.description}
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-4 p-4 rounded"
          style={{ backgroundColor: "#2B3972" }}
        >
          {projects.length > 0 ? (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
              {projects.map((project) => (
                <div key={project.id} className="col">
                  <div
                    className="card text-dark p-3 text-center shadow-sm d-flex flex-column align-items-center"
                    style={{
                      backgroundColor: "#1C2752",
                      borderRadius: "10px",
                      height: "150px",
                    }}
                  >
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <p className="mt-2 fw-bold">{project.title}</p>
                    <button
                      className="btn btn-sm btn-outline-light mt-auto"
                      style={{
                        borderRadius: "8px",
                        fontSize: "14px",
                        padding: "5px 10px",
                      }}
                    >
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white fs-4 mt-4">
              لا يوجد مشاريع
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesDetails;
