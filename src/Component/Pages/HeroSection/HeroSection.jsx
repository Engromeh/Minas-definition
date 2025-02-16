import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper/modules";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import group1 from "../../../Images/Mask group (1).png";
import group2 from "../../../Images/Mask group (2).png";
import group3 from "../../../Images/Mask group.png";
import vide from "../../../Images/00a0ff6a220a5eb3f63a865b31d63c0b.mp4";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const images = [
    { src: group1, alt: "التسويق الرقمي" },
    { src: group3, alt: "استراتيجية التسويق" },
    { src: group2, alt: "تطوير العلامة التجارية" },
  ];

  return (
    <>
      <section className="hero text-center py-5 ">
        <div className="hero-bg-gold"></div>
        <div className="hero-bg-blue"></div>
        <div>
          <h1
            className="text-white fw-bold"
            style={{
              fontFamily: "Cairo",
              fontSize: "72px",
            }}
          >
            شركة الفارس للتسويق الإلكترونى
          </h1>
          <p
            className="lead text-white"
            style={{
              fontSize: "24px",
              color: "#D9D9D9",
            }}
          >
            نؤمن في شركة الفارس بأن التسويق الرقمى ليس مجرد إعلانات وإحصائيات ،
            نحن
            <br />
            نعتمد علي أسلوب مبتكر وتقديم تجارب غير مسبوقة ، نسعي لتطوير
            <br />
            استراتيجيات تسويقية تُجسد هوية علامتك التجارية وتُلامس مشاعر عملائك
          </p>
          <div className="d-flex button-container justify-content-center align-items-center gap-3 mt-4 flex-wrap">
            <button
              className="customee-btn"
              style={{
                backgroundColor: "#F4CFAB",
                borderRadius: "25px",

                textAlign: "center",
                fontWeight: "bold",
                width: "150px",
                height: "56px",
                fontFamily: "Cairo",
                fontSize: "31px",
              }}
            >
              ابدا الان
            </button>

            <div className="d-flex align-items-center">
              <p
                className="custom-btn fw-bold d-flex align-items-center"
                style={{
                  color: "white",
                  fontFamily: "Cairo",
                  fontSize: "31px",
                  cursor: "pointer",
                }}
                onClick={handleShow}
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.8999 23.8193C31.364 24.6654 31.3694 25.7297 29.8999 26.6863L18.546 34.6273C17.1194 35.4168 16.1505 34.9506 16.0488 33.2423L16.0006 16.622C15.9685 15.0484 17.2184 14.6038 18.4095 15.3583L29.8999 23.8193Z"
                    fill="#151723"
                    stroke="url(#paint0_linear_0_1)"
                    strokeWidth="2"
                  />
                  <path
                    d="M33.8999 23.8193C35.364 24.6654 35.3694 25.7297 33.8999 26.6863L22.546 34.6273C21.1194 35.4168 20.1505 34.9506 20.0488 33.2423L20.0006 16.622C19.9685 15.0484 21.2184 14.6038 22.4095 15.3583L33.8999 23.8193Z"
                    fill="#151723"
                    stroke="url(#paint1_linear_0_1)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="25"
                    cy="25"
                    r="24.5"
                    stroke="url(#paint2_linear_0_1)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_1"
                      x1="23.5"
                      y1="15"
                      x2="23.5"
                      y2="35"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F4CFAB" />
                      <stop offset="1" stopColor="#D9D9D9" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_0_1"
                      x1="27.5"
                      y1="15"
                      x2="27.5"
                      y2="35"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F4CFAB" />
                      <stop offset="1" stopColor="#D9D9D9" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_0_1"
                      x1="25"
                      y1="0"
                      x2="25"
                      y2="50"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F4CFAB" />
                      <stop offset="1" stopColor="#D9D9D9" />
                    </linearGradient>
                  </defs>
                </svg>
                فيديو تعريفي
              </p>
            </div>
          </div>

          <div className="row mt-3 d-none d-md-flex">
            <div className="col-md-4">
              <img
                src={group1}
                className="card-img-top hero-image"
                alt="التسويق الرقمي"
                style={{ width: "70%", marginLeft: "45%" }}
              />
            </div>
            <div className="col-md-4">
              <img
                src={group3}
                className="card-img-top hero-image"
                alt="استراتيجية التسويق"
                style={{ width: "70%", marginLeft: "16%" }}
              />
            </div>
            <div className="col-md-4">
              <img
                src={group2}
                className="card-img-top hero-image"
                alt="تطوير العلامة التجارية"
                style={{ width: "70%", marginRight: "40%" }}
              />
            </div>
          </div>
          <div className="d-md-none mt-2">
            <Swiper
              spaceBetween={20}
              slidesPerView={"auto"} // Allows partial slides to be visible
              loop={true} // Enables infinite scrolling
              centeredSlides={true} // Centers the active slide
              pagination={{ clickable: true }}
              freeMode={true} // Allows smooth movement
              modules={[Pagination, FreeMode]}
              className="custom-swiper"
            >
              <SwiperSlide style={{width:"fit-content", margin:"0 5px"}}>
                
                  <img
                    src={group1}
                    className="card-img-top hero-image"
                    alt="التسويق الرقمي"
                    style={{
                      width: "309px",
                      display: "block",
                    
                    }}
                  />
                
              </SwiperSlide>
              <SwiperSlide style={{width:"fit-content", margin:"0 5px"}}>
                <img
                  src={group3}
                  className="card-img-top hero-image"
                  alt="استراتيجية التسويق"
                  style={{ width: "309px", display: "block" }}
                />
              </SwiperSlide>
              <SwiperSlide style={{width:"fit-content", margin:"0 5px"}}>
                <img
                  src={group2}
                  className="card-img-top hero-image"
                  alt="تطوير العلامة التجارية"
                  style={{ width: "309px", display: "block" }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body>
          <div className="d-flex justify-content-end">
            <Button variant="danger" onClick={handleClose}>
              إغلاق
            </Button>
          </div>
          <div className="d-flex justify-content-center">
            <video width="90%" height="300px" controls>
              <source src={vide} type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HeroSection;
