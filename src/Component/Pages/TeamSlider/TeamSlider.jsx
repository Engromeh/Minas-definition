import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import team1 from "../../../Images/image 14.png";
import team2 from "../../../Images/image 14.png";
import team3 from "../../../Images/image 14.png";
import team4 from "../../../Images/image 14.png";
import { useRef } from "react";
import next from "../../../Images/nextteam.svg";
import prev from "../../../Images/prevteam.svg";
const teamMembers = [
  { name: "Hedra", role: "Manager", image: team1, rating: 4 },
  { name: "Ali", role: "Designer", image: team2, rating: 5 },
  { name: "Sara", role: "Developer", image: team3, rating: 4 },
  { name: "Omar", role: "Marketing", image: team4, rating: 3 },
];

const TeamSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div
      className="text-center my-5 position-relative w-100 py-3"
      style={{ backgroundColor: "#040049" }}
    >
      <h2
        className="text-white mb-3 team-title"
        style={{ fontSize: "37px", fontFamily: "Cairo", fontWeight: "bold" }}
      >
        فريق العمل
      </h2>
      <p
        style={{ color: "#D9D9D9", fontSize: "17px", fontFamily: "Cairo" }}
        className="team-desc"
      >
        الفارس المصدر المثالي لكل ما يتعلق بالتسويق الذكي والأعمال، نحن نقدم لك
        فرصة استثنائية لاكتساب نجاح خبير لأعمالك في عالم التسويق
      </p>

      <div
        className="rounded position-relative"
        style={{ padding: "50px 10%" }}
      >
        <div className="d-none d-md-block">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="d-flex flex-column align-items-center">
                  <div className="position-relative team-frame">
                    <div className="team-bg"></div>
                    <div className="team-white-circle"></div>
                    <div className="team-circle position-absolute">
                      <img
                        src={member.image}
                        className="team-image"
                        alt={member.name}
                      />
                    </div>
                  </div>

                  <div
                    className="card p-3 rounded-bottom text-center"
                    style={{
                      backgroundColor: "#2B3972",
                      marginTop: "180px",
                      width: "100%",
                      maxWidth: "300px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between ">
                      <h5 className="fw-bold mb-0 text-white">{member.name}</h5>
                      <div className="d-flex" style={{ color: "#F4CFAB" }}>
                        {[...Array(member.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                    <p
                      className="mb-0 mt-1 text-light"
                      style={{ opacity: 0.6, textAlign: "left" }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="custom-prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src={prev} alt="romehouse" />
          </button>

          <button
            className="custom-next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src={next} alt="romehouse" />
          </button>
        </div>
        <div className="d-md-none">
          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={1}
            slidesPerView={1}
            loop={true} // Infinite scrolling
            initialSlide={1} // Start with the second slide
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Optional autoplay
            pagination={{ clickable: true }} // Enables dots (circles)
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="custom-swiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="d-flex flex-column align-items-center">
                  <div className="position-relative team-frame">
                    <div className="team-bg"></div>
                    <div className="team-white-circle"></div>
                    <div className="team-circle position-absolute">
                      <img
                        src={member.image}
                        className="team-image"
                        alt={member.name}
                      />
                    </div>
                  </div>

                  <div
                    className="card p-3 rounded-bottom text-center"
                    style={{
                      backgroundColor: "#2B3972",
                      marginTop: "180px",
                      width: "100%",
                      maxWidth: "300px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="fw-bold mb-0 text-white">{member.name}</h5>
                      <div className="d-flex" style={{ color: "#F4CFAB" }}>
                        {[...Array(member.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                    <p
                      className="mb-0 mt-1 text-light"
                      style={{ opacity: 0.6, textAlign: "left" }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
