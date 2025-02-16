import React, { useState, useEffect, useMemo } from "react";
import { Carousel } from "react-bootstrap";
import photo7 from "../../../../Images/image 7.svg";
import photo5 from "../../../../Images/image 5.svg";
import photo6 from "../../../../Images/image 6.svg";
import photo8 from "../../../../Images/image 8.svg";

const services = [
  {
    img: photo7,
    title: "تنظيم البيانات والتقارير",
    desc: "من خلالها نتيح للعملاء إنشاء وتشارك المحتوى المتعلق بالعلامة التجارية أو المنتج ، وتهدف إلي زيادة التفاعل بين العملاء وتحليل المحتوى الذي ينتجه العملاء لتحسين تجربتهم وزيادة ثقتهم وتحقيق أهداف العمل .",
  },
  {
    img: photo6,
    title: "تصميم متاجر",
    desc: "من خلالها نتيح للعملاء إنشاء وتشارك المحتوى المتعلق بالعلامة التجارية أو المنتج ، وتهدف إلي زيادة التفاعل بين العملاء وتحليل المحتوى الذي ينتجه العملاء لتحسين تجربتهم وزيادة ثقتهم وتحقيق أهداف العمل .",
  },
  {
    img: photo5,
    title: "تصميم المواقع الإلكترونية",
    desc: "من خلالها نتيح للعملاء إنشاء وتشارك المحتوى المتعلق بالعلامة التجارية أو المنتج ، وتهدف إلي زيادة التفاعل بين العملاء وتحليل المحتوى الذي ينتجه العملاء لتحسين تجربتهم وزيادة ثقتهم وتحقيق أهداف العمل .",
  },
  {
    img: photo8,
    title: "UGC",
    desc: "من خلالها نتيح للعملاء إنشاء وتشارك المحتوى المتعلق بالعلامة التجارية أو المنتج ، وتهدف إلي زيادة التفاعل بين العملاء وتحليل المحتوى الذي ينتجه العملاء لتحسين تجربتهم وزيادة ثقتهم وتحقيق أهداف العمل .",
  },
  {
    img: photo7,
    title: "تحليل البيانات",
    desc: "من خلالها نتيح للعملاء إنشاء وتشارك المحتوى المتعلق بالعلامة التجارية أو المنتج ، وتهدف إلي زيادة التفاعل بين العملاء وتحليل المحتوى الذي ينتجه العملاء لتحسين تجربتهم وزيادة ثقتهم وتحقيق أهداف العمل .",
  },
  {
    img: photo6,
    title: "تحسين الأداء",
    desc: "من خلالها نتيح للعملاء إنشاء وتشارك المحتوى المتعلق بالعلامة التجارية أو المنتج ، وتهدف إلي زيادة التفاعل بين العملاء وتحليل المحتوى الذي ينتجه العملاء لتحسين تجربتهم وزيادة ثقتهم وتحقيق أهداف العمل .",
  },
];

const chunkArray = (array, size) => {
  return array.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, array.slice(i, i + size)]),
    []
  );
};

const ServresBar = () => {
  const getItemsPerSlide = () => {
    if (window.innerWidth < 576) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 992) return 3;
    return 4;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const [arrowPosition, setArrowPosition] = useState(
    window.innerWidth < 768 ? "5%" : "-40px"
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      setArrowPosition(window.innerWidth < 768 ? "5%" : "-40px");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupedServices = useMemo(
    () => chunkArray(services, itemsPerSlide),
    [itemsPerSlide]
  );

  return (
    <div style={{ backgroundColor: "#151723" }}> 

    <div className="container text-center text-white py-5 position-relative"      style={{ backgroundColor: "#151723" }}> 

      <h1 className="fw-bold">الخدمات</h1>
      <Carousel
        indicators={false}
        controls={true}
        className="my-4 position-relative"
        prevIcon={
          <div
            className=" position-absolute top-50 translate-middle-y"
            style={{ left: arrowPosition, zIndex: 10 }}
          >
            <button className="arrow-btn">
              <svg
                width="40"
                height="40"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="53"
                  width="53"
                  height="53"
                  rx="8"
                  transform="rotate(90 53 0)"
                  fill="#F4CFAB"
                />
                <path
                  d="M34 12L19 27.0024L34 42"
                  stroke="#151723"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        }
        nextIcon={
          <div
            className="position-absolute top-50 translate-middle-y"
            style={{ right: arrowPosition, zIndex: 10 }}
          >
            <button className="arrow-btn">
              <svg
                width="40"
                height="40"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="53" height="53" rx="8" fill="#F4CFAB" />
                <path
                  d="M19 42L34 26.9976L19 12"
                  stroke="#151723"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        }
      >
        {groupedServices.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div className="row justify-content-center">
              {group.map((service, index) => (
                <div
                  key={index}
                  className={`mb-3 ${
                    itemsPerSlide === 1
                      ? "col-12"
                      : itemsPerSlide === 2
                      ? "col-6"
                      : itemsPerSlide === 3
                      ? "col-md-4"
                      : "col-lg-3"
                  }`}
                >
                  <div className="card text-white p-3  service-card">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="card-img-top service-img"
                    />
                    <h5 className="mt-3" style={{fontFamily:"Cairo" , fontSize:"14px",  fontWeight:"bold" , direction:"rtl"}}> {service.title}</h5>
                    <p style={{fontFamily:"Cairo" , fontSize:"14px" ,  direction:"rtl"}}>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default ServresBar;
