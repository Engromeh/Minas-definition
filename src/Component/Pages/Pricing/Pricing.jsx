import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Pricing = () => {
  const [active, setActive] = useState("شهري");

  return (
    <div
      className="pricing-container text-center w-100 py-0 py-md-5"
      style={{ backgroundColor: "#171a28" }}
    >
      <Container>
        <Row className="align-items-center mb-4 text-white pricing-content mb-4">
          <Col md={6} sm={12} className="text-start">
            <h2 className="pricing-subtitle">
              خطط تسعير تناسب عملك في كل مرحلة من مراحل النمو على منصتنا (يومي -
              شهري - سنوي).
            </h2>
          </Col>
          <Col md={6} sm={12} className="text-end mt-4">
            <p className="pricing-title">أفضل باقة سعرية مصممة خصيصًا لك</p>
          </Col>
        </Row>

        <div
          className="pricing d-flex justify-content-start flex-wrap "
          style={{ fontSize: "38px", fontFamily: "Cairo" }}
        >
          {["يومي", "شهري", "سنوي"].map((option) => (
            <Button
              key={option}
              variant={active === option ? "warning" : "dark"}
              className={`toggle-btn ${active === option ? "active" : ""}`}
              style={{ fontWeight: "bold" }}
              onClick={() => setActive(option)}
            >
              {option}
            </Button>
          ))}
        </div>

        <Row className="justify-content-center d-none d-md-flex">
          {[
            {
              title: "مشروع",
              price: "$164",
              services: 7,
              features: [true, true, true, true, true, true, true],
            },
            {
              title: "مميز",
              price: "$148",
              services: 5,
              features: [true, true, true, true, true, false, false],
            },
            {
              title: "بداية",
              price: "$132",
              services: 3,
              features: [true, true, true, false, false, false, false],
            },
          ].map((plan, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4 d-flex">
              <Card
                className={`pricing-card flex-fill ${
                  plan.title === "مميز" ? "featured" : ""
                }`}
              >
                <Card.Body>
                  <Card.Title className="plan-title">{plan.title}</Card.Title>
                  <Card.Text className="plan-price">{plan.price}</Card.Text>
                  <Card.Text
                    className="plan-duration"
                    style={{ fontSize: "30px", fontFamily: "Cairo" }}
                  >
                    لكل شهر | {plan.services} خدمات
                  </Card.Text>
                  <ul className="plan-features text-start ps-0">
                    {plan.features.map((enabled, idx) => (
                      <li key={idx} className="d-flex align-items-center">
                        <FaCheckCircle
                          style={{ color: enabled ? "#F4CFAB" : "#D9D9D933" }}
                        />
                        <span
                          className="ms-2"
                          style={{ fontSize: "20px", fontFamily: "Cairo" }}
                        >
                          ميزة {idx + 1}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center d-md-none">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Pagination]}
            initialSlide={1}
            className="custom-swiper"
          >
            {[
              {
                title: "مشروع",
                price: "$164",
                services: 7,
                features: [true, true, true, true, true, true, true],
              },
              {
                title: "مميز",
                price: "$148",
                services: 5,
                features: [true, true, true, true, true, false, false],
              },
              {
                title: "بداية",
                price: "$132",
                services: 3,
                features: [true, true, true, false, false, false, false],
              },
            ].map((plan, index) => (
              <SwiperSlide key={index}>
                <Card
                  className={`pricing-card flex-fill ${
                    plan.title === "مميز" ? "featured" : ""
                    }`}
                  style={{
                  
                }}
                >
                  <Card.Body>
                    <Card.Title className="plan-title">{plan.title}</Card.Title>
                    <Card.Text className="plan-price">{plan.price}</Card.Text>
                    <Card.Text
                      className="plan-duration"
                      style={{ fontSize: "30px", fontFamily: "Cairo" }}
                    >
                      لكل شهر | {plan.services} خدمات
                    </Card.Text>
                    <ul className="plan-features text-start ps-0">
                      {plan.features.map((enabled, idx) => (
                        <li key={idx} className="d-flex align-items-center">
                          <FaCheckCircle
                            style={{ color: enabled ? "#F4CFAB" : "#D9D9D933" }}
                          />
                          <span
                            className="ms-2"
                            style={{ fontSize: "20px", fontFamily: "Cairo" }}
                          >
                            ميزة {idx + 1}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
