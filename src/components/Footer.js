import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logoSoluti from '../assets/img/logoSoluti.png';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logoSoluti} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">

            <p>Copyright 2023 SOLUTI</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
