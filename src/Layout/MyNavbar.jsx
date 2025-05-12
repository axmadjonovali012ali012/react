import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import foto from '../assets/foto.png';
import { Modal } from 'antd';
import {
  AppstoreOutlined,
  ProjectOutlined,
  TagsOutlined,
  ContactsOutlined,
  CalculatorOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MessageOutlined
} from '@ant-design/icons';
import './MyNavbar.css';
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Yuqori info qismi */}
      <Container fluid>
        <Row className="align-items-center justify-content-between gap-2 px-3" style={{ backgroundColor: '#f5f4fa', fontSize: '14px', padding: '6px 0' }}>
          <Col xs="auto" className="d-flex align-items-center gap-2">
            <FaMapMarkerAlt color="red" />
            <span>Иркутск</span>
          </Col>

          <Col className="d-none d-md-block">
            <a href="#" style={{ textDecoration: 'underline', color: '#000' }}>
              Оставить претензию
            </a>
          </Col>

          <Col xs="auto" className="d-none d-md-flex align-items-center">
            <a href="#" style={{ color: 'red', fontWeight: 500 }}>Заказать звонок</a>
          </Col>

          <Col xs="auto" className="d-flex align-items-center gap-2">
            <FaPhoneAlt />
            <span>+7 395 252–59–99</span>
          </Col>
        </Row>
      </Container>

      {/* NAVBAR QISMI */}
      {isMobile ? (
        <>
          <div className="text-center mt-3 px-3">
            <button
              className="bg-white border-0 w-100 d-flex justify-content-between align-items-center"
              onClick={handleShow}
              style={{ padding: '10px' }}
            >
              <img src={foto} alt="logo" style={{ height: '40px' }} />
              <span style={{
                backgroundColor: 'black',
                color: 'white',
                width: '50px',
                padding: '8px',
                textAlign: 'center',
                borderRadius: '5px',
                fontSize: '20px'
              }}>
                ☰
              </span>
            </button>
          </div>

          {/* Ant Design Modal menyu */}
          <Modal
            open={show}
            onCancel={handleClose}
            footer={null}
            centered
            width="90%"
            bodyStyle={{ padding: '24px' }}
          >
            <Nav className="flex-column gap-3">
              <NavLink to="/katalog" className="modal-link"><AppstoreOutlined /> Каталог</NavLink>
              <NavLink to="/proekti" className="modal-link"><ProjectOutlined /> Проекты</NavLink>
              <NavLink to="/aksiyalar" className="modal-link"><TagsOutlined /> Акции</NavLink>
              <NavLink to="/izohlar" className="modal-link"><MessageOutlined /> Контакты</NavLink>
              <hr />
              <NavLink to="/kalkulyator" className="modal-link"><CalculatorOutlined /> Калькулятор</NavLink>
              <NavLink to="/korzina" className="modal-link"><ShoppingCartOutlined /> Корзина</NavLink>
              <NavLink to="/profil" className="modal-link"><UserOutlined /> Профиль</NavLink>
            </Nav>
          </Modal>
        </>
      ) : (
        <Navbar bg="white" expand="lg" className="shadow-sm">
          <Container>
            <Navbar.Brand href="#"><img src={foto} alt="logo" style={{ height: '40px' }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="d-flex w-100 justify-content-between">
                <Nav className="gap-4">
                  <NavLink to="/katalog" className="nav-link nav-link-hover-red d-flex align-items-center">
                    <AppstoreOutlined className="me-1" /> Каталог
                  </NavLink>
                  <NavLink to="/proekti" className="nav-link nav-link-hover-red d-flex align-items-center">
                    <ProjectOutlined className="me-1" /> Проекты
                  </NavLink>
                  <NavLink to="/aksiyalar" className="nav-link nav-link-hover-red d-flex align-items-center">
                    <TagsOutlined className="me-1" /> Акции
                  </NavLink>
                  <NavLink to="/izohlar" className="nav-link nav-link-hover-red d-flex align-items-center">
                    <ContactsOutlined className="me-1" /> Контакты
                  </NavLink>
                </Nav>

                <Nav className="gap-4">
                  <NavLink to="/kalkulyator" className="nav-link nav-link-hover-blue d-flex align-items-center">
                    <CalculatorOutlined className="me-1" /> Калькулятор
                  </NavLink>
                  <NavLink to="/korzina" className="nav-link nav-link-hover-blue d-flex align-items-center">
                    <ShoppingCartOutlined className="me-1" /> Корзина
                  </NavLink>
                  <NavLink to="/profil" className="nav-link nav-link-hover-blue d-flex align-items-center">
                    <UserOutlined className="me-1" /> Профиль
                  </NavLink>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default MyNavbar;
