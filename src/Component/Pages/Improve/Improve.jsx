import impr1 from "../../../Images/nahid photo (1).svg";
import impr2 from "../../../Images/nahid photo (2).svg";
import impr3 from "../../../Images/nahid photo.svg";
const Improve = () => {
  return (
    <>
      <div
        className="container-fluid  text-white py-0 py-md-5 w-100 improve-section "
        style={{ backgroundColor: "#040049" }}
      >
        <div className="container">
          <div className="row align-items-center improve-container">
            <div className="col-md-6 text-end">
              <p
                className="text"
                style={{
                  color: "#D9D9D9",
                  fontSize: "32px",
                  fontFamily: "Cairo",
                  width: "60%",
                  marginLeft: "35%",
                }}
              >
                نقدم حلول تسويقية متقدمة ومتكاملة، تهدف إلى تحقيق أهدافك وتحقيق
                استدامة النجاح ، حيث نسعى جاهدين لفهم أهداف نشاط عميلنا أولا ،
                ثم يتم إتخاذ جميع القرارات مع وضع هذه الأهداف في الإعتبار.
              </p>
            </div>

            <div className="col-md-6 text-end position-relative">
              <h2
                style={{
                  fontSize: "77px",
                  fontFamily: "Cairo",
                  fontWeight: "bold",
                }}
              >
                نحن نسعى لجعل عملك ينمو بشكل أسرع من أي وقت مضى
              </h2>
              <div className="d-flex align-items-center mt-3 improve-images">
                <div className="d-flex profile-images">
                  <img src={impr1} alt="impr 1" className="profile-img" />
                  <img src={impr2} alt="impr 2" className="profile-img" />
                  <img src={impr3} alt="impr 3" className="profile-img" />
                </div>
                <button className="rounded-5">
                  <svg
                    width="97"
                    height="27"
                    viewBox="0 0 97 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.758789"
                      y="0.320068"
                      width="95.6562"
                      height="26.4059"
                      rx="13.2029"
                      fill="white"
                    />
                    <rect
                      x="0.758789"
                      y="0.320068"
                      width="95.6562"
                      height="26.4059"
                      rx="13.2029"
                      stroke="#E0E6ED"
                      strokeWidth="0.436267"
                    />
                    <path
                      d="M38.8497 13.9048H37.8323V13.4498H38.8497V12.4069H39.3098V13.4498H40.3298V13.9048H39.3098V14.9427H38.8497V13.9048ZM42.1062 13.1891C42.4828 13.1891 42.7811 13.2888 43.0009 13.4882C43.2208 13.6876 43.3307 13.9594 43.3307 14.3036C43.3307 14.7024 43.2054 15.0143 42.9549 15.2392C42.7061 15.4625 42.3516 15.5741 41.8915 15.5741C41.474 15.5741 41.1459 15.5068 40.9073 15.3721V14.8276C41.0454 14.906 41.2039 14.9665 41.3828 15.0091C41.5617 15.0517 41.7279 15.073 41.8813 15.073C42.1522 15.073 42.3584 15.0126 42.4999 14.8916C42.6413 14.7706 42.7121 14.5933 42.7121 14.3599C42.7121 13.9134 42.4275 13.6901 41.8583 13.6901C41.7782 13.6901 41.6793 13.6986 41.5617 13.7157C41.4442 13.731 41.3411 13.7489 41.2524 13.7694L40.984 13.6109L41.1272 11.7857H43.0699V12.32H41.6563L41.572 13.2453C41.6316 13.2351 41.704 13.2232 41.7893 13.2095C41.8762 13.1959 41.9818 13.1891 42.1062 13.1891Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Improve;
