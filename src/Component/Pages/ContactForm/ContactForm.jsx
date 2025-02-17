import React from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import plan from "../../../Images/pLanblue.svg";

const ContactForm = () => {
  return (
    <div style={{ backgroundColor: "#040049" }}>
      <Container fluid className="p-4 " style={{ color: "white" }}>
        <Row>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img src={plan} alt="خريطة" className="img-fluid" />
          </Col>

          <Col md={6} className="mt-5">
            <Form>
              <div className="d-flex gap-3 w-100">
                <Form.Group className="mb-3 flex-grow-1">
                  <Form.Control
                    type="text"
                    className="custom-placeholder"
                    placeholder="اسم شركتك"
                  />
                </Form.Group>

                <Form.Group className="mb-3 flex-grow-1">
                  <Form.Control
                    type="text"
                    className="custom-placeholder"
                    placeholder="الاسم الكامل"
                  />
                </Form.Group>
              </div>
              <div className="d-flex gap-3 w-100">
                <Dropdown className="mb-3 flex-grow-1">
                  <Dropdown.Toggle className="custom-placeholder w-100">
                    نوع الخدمة
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">خدمة 1</Dropdown.Item>
                    <Dropdown.Item href="#">خدمة 2</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Form.Group className="mb-3 flex-grow-1">
                  <Form.Control
                    type="text"
                    className="custom-placeholder"
                    placeholder="رقم الهاتف"
                  />
                </Form.Group>
              </div>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="custom-placeholder"
                  placeholder="اكتب رسالتك هنا..."
                />
              </Form.Group>

              <Button
                className="custom-button w-100 text-white"
                style={{
                  border: "none",
                  direction: "rtl",
                  fontFamily: "Cairo",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                اطلب الخدمة
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
