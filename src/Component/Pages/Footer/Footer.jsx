import { Container, Row, Col } from "react-bootstrap";
import logoe from "../../../Images/minas logo.svg";import fasebook from "../../../Images/bx_bxl-facebook.svg";
import insta from "../../../Images/bx_bxl-instagram-alt.svg";
import twater from "../../../Images/akar-icons_twitter-fill.svg";
import sendd from "../../../Images/carbon_send.svg";

const Footer = () => {
  return (
    <>
      <footer
        className="text-white py-5 px-5 w-100 text-center text-md-start d-none d-md-block"
        style={{ backgroundColor: "#171a28", padding: "20px" }}
      >
        <div className="container-fluid">
          <div className="row text-center text-md-start">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                <img
                  src={logoe}
                  alt="ALFARES Logo"
                  className="me-2"
                  width="50"
                  height="50"
                />
                <br />
                <h5
                  className="mb-0"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "#D9D9D9",
                  }}
                >
                  Marketing <br /> Agency
                </h5>
              </div>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  color: "#D9D9D9",
                }}
              >
                Marketing is the key to success. <br /> Understand your
                customers,
                <br /> show your value, and build lasting loyalty.
              </p>
              <div
                className="d-flex "
                style={{ gap: "10%", marginTop: "45px" }}
              >
                <img src={insta} alt="Instagram" width="24" height="24" />
                <img src={fasebook} alt="Facebook" width="24" height="24" />
                <img src={twater} alt="Twitter" width="24" height="24" />
              </div>
            </div>
            <br />
            <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-md-0">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  color: "#D9D9D9",
                }}
              >
                About
              </p>
              <ul
                className="list-unstyled "
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  color: "#D9D9D9",
                }}
              >
                <li className="liinfooter">About Us</li>

                <li className="liinfooter">Features</li>

                <li className="liinfooter">News</li>

                <li className="liinfooter">Menu</li>
              </ul>
            </div>
            <br />
            <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-lg-0">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  color: "#D9D9D9",
                }}
              >
                Company
              </p>
              <ul
                className="list-unstyled "
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  color: "#D9D9D9",
                }}
              >
                <li className="liinfooter">Why Fudo?</li>

                <li className="liinfooter">Partner With Us</li>

                <li className="liinfooter">FAQ</li>

                <li className="liinfooter">Blog</li>
              </ul>
            </div>
            <br />
            <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-lg-0">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  color: "#D9D9D9",
                }}
              >
                Support
              </p>

              <ul
                className="list-unstyled "
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  color: "#D9D9D9",
                }}
              >
                <li className="liinfooter">Account</li>

                <li className="liinfooter">Support Center</li>

                <li className="liinfooter">Feedback</li>

                <li className="liinfooter">Contact Us</li>

                <li className="liinfooter">Accessibility</li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-lg-0">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  color: "#D9D9D9",
                }}
              >
                Get in Touch
              </p>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  color: "#D9D9D9",
                }}
              >
                Question or feedback? <br /> <br /> We&apos;d love to hear from
                you.
              </p>
              <div
                className="d-flex align-items-center justify-content-center px-3 py-2"
                style={{ border: "2px #D9D9D933 solid", borderRadius: "20px" }}
              >
                <input
                  type="email"
                  placeholder="Send Email"
                  className="border-0 bg-transparent text-white fw-bold me-2 p-2 w-100 text-center"
                  style={{
                    outline: "none",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "#D9D9D9",
                  }}
                />
                <img src={sendd} alt="Send" width="20" height="20" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer mt-5 d-md-none">
        <Container>
          <Row>
            <Col md={4} className="text-light">
              <div
                className="d-flex align-items-center gap-2 "
                style={{
                  direction: "rtl",
                }}
              >
                <img src={logoe} alt="Logo" className="footer-logo" />
                <h5 className="fw-bold">
                  وكالة
                  <br /> تسويق
                </h5>
              </div>
              <p className="footer-text px-3">
                التسويق هو مفتاح النجاح: افهم عملائك، وأظهر قيمتك، ومن ولاء
                دائمًا لهم.
              </p>
            </Col>

            {/* Middle - Links */}
            <div className="d-flex justify-content-between ">
              <div className="text-light">
                <h6 className="fw-bold">الشركة</h6>
                <ul className="list-unstyled">
                  <li>ما هو الفارس؟</li>
                  <li>الشركاء</li>
                  <li>الأسئلة الشائعة</li>
                  <li>الفوائد</li>
                </ul>
              </div>
              <div className="text-light">
                <h6>عن</h6>
                <ul className="list-unstyled">
                  <li>معلومات عنا</li>
                  <li>المميزات</li>
                  <li>المقالات</li>
                </ul>
              </div>
            </div>

            {/* Right - Support & Socials */}
            <Col md={4} className="text-light position-relative">
              <h6 className="fw-bold">الدعم</h6>
              <ul className="list-unstyled">
                <li>معلومات عنا</li>
                <li>المصادر</li>
                <li>المقالات</li>
                <li>تواصل معنا</li>
              </ul>

              <div className="" style={{ position: "absolute", top: 0 }}>
                <div className="d-flex gap-3 mt-3">
                  <img src={insta} alt="Instagram" className="social-icon" />
                  <img src={twater} alt="Twitter" className="social-icon" />
                  <img src={fasebook} alt="Facebook" className="social-icon" />
                </div>

                <button className="email-btn d-block">
                  البريد الإلكتروني{" "}
                  <img src={sendd} alt="Send" className="send-icon" />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
