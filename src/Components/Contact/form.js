import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Reachout = () => (
  <section>
    <Container className="form">
      <Row className="justify-content-center">
        <Col className="text-center form-title">
          <h2>How to reach me out</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="mb-3 col-lg-5">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="John Smith"
          />
        </Col>
        <Col className="mb-3 col-lg-5">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="mb-3 col-lg-10">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center">
          <button type="button" class="btn btn-outline-light form-button">
            Submit
          </button>
        </Col>
      </Row>
    </Container>
  </section>
);
export default Reachout;
