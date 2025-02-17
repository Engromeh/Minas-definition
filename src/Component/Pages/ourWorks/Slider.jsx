import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import serviceIcon from "../../../Images/Group 188.svg";
import prevIcon from "../../../Images/iconenext.svg";
import nextIcon from "../../../Images/iconeprev.svg";

const services = [
  { name: "تنظيم فعاليات و مؤتمرات", icon: serviceIcon },
  { name: "إدارة الفعاليات الافتراضية", icon: serviceIcon },
  { name: "التسويق الرقمي", icon: serviceIcon },
  { name: "التصوير الفوتوغرافي", icon: serviceIcon },
  { name: "الإنتاج الإعلامي", icon: serviceIcon },
];

const Slider = () => {
  return (
    <div
      className="position-relative p-3 mb-4 mt-4"
      style={{
        backgroundColor: "#2B3972",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="d-flex justify-content-between align-items-center slide-item"
              style={{
                backgroundColor: "#1C2752",
                borderRadius: "12px",
                padding: "15px",
                width: "90%",
                height: "100%",
              }}
            >
              <p className="ms-5 text-white" style={{ direction: "rtl" }}>
                {service.name}
              </p>
              <img src={service.icon} alt="Service" style={{ width: "60px" }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <img
        src={prevIcon}
        alt="Prev"
        className="swiper-button-prev-custom"
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "20px",
          cursor: "pointer",
          zIndex: 10,
        }}
      />

      <img
        src={nextIcon}
        alt="Next"
        className="swiper-button-next-custom"
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "30px",
          cursor: "pointer",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default Slider;
