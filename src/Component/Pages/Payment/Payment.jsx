import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import payment1 from "../../../Images/Orange.svg";
import payment2 from "../../../Images/we.svg";
import payment3 from "../../../Images/instapay.svg";
import payment4 from "../../../Images/vodefone.svg";
import payment5 from "../../../Images/etasilat.svg";
import payment6 from "../../../Images/bank.svg";

const Payment = () => {
  const payments = [
    { src: payment1, alt: "Orange Money" },
    { src: payment2, alt: "We Pay" },
    { src: payment3, alt: "Instapay" },
    { src: payment4, alt: "Vodafone" },
    { src: payment5, alt: "Etisalat" },
    { src: payment6, alt: "Banque Misr" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-3 w-100" style={{ backgroundColor: "#171a28" }}>
      {isMobile ? (
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
        >
          {payments.map((payment, index) => (
            <SwiperSlide key={index}>
              <img
                src={payment.src}
                alt={payment.alt}
                style={{ width: "180px", height: "135px" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {payments.map((payment, index) => (
            <img
              key={index}
              src={payment.src}
              alt={payment.alt}
              style={{ width: "180px", height: "135px" }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Payment;
