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
  UserOutlined
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
      <Container fluid>
        <Row className="align-items-center justify-content-between gap-5" style={{ backgroundColor: '#f5f4fa', fontSize: '14px', padding: '6px 0' }}>
          <Col xs="auto" className="d-flex align-items-center gap-2">
            <FaMapMarkerAlt color="red" />
            <span>Иркутск</span>
          </Col>

          <Col className="d-none d-md-block" style={{ marginLeft: '50px' }}>
            <a href="#" style={{ textDecoration: 'underline', color: '#000' }}>
              Оставить претензию
            </a>
          </Col>

          <Col xs="auto" className="d-flex align-items-center d-none d-md-block">
            <a href="#" style={{ color: 'red', fontWeight: 500 }}>Заказать звонок</a>
          </Col>

          <Col xs="auto" className="d-flex align-items-center gap-3">
            <FaPhoneAlt />
            <span>+7 395 252–59–99</span>
          </Col>
        </Row>
      </Container>

      {isMobile ? (
        <>
          <div className="text-center mt-3">
            <button
              className="bg-white text-start w-100 d-flex justify-content-between align-items-center"
              style={{ color: 'black' }}
              onClick={handleShow}
            >
              <img src={foto} alt="" />
              <span
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  width: '60px',
                  padding: '10px',
                  textAlign: 'center',
                  marginTop: '5px',
                  borderRadius: '5px'
                }}
              >
                ☰
              </span>
            </button>
          </div>


          <Modal
            visible={show}
            onCancel={handleClose}
            footer={null}
            centered
            width={500}
            bodyStyle={{
              padding: '24px',
            }}
          >
            <div style={{ gap: '30px' }}>
              <div style={{ flex: 1 }}>
                <Nav className="flex-column gap-2">
                  <NavLink to="/katalog" className="modal-link">
                    <AppstoreOutlined style={{ marginRight: 8 }} />
                    Каталог
                  </NavLink>
                  <NavLink to="/proekti" className="modal-link">
                    <ProjectOutlined style={{ marginRight: 8 }} />
                    Проекты
                  </NavLink>
                  <NavLink to="/aksiyalar" className="modal-link">
                    <TagsOutlined style={{ marginRight: 8 }} />
                    Акции
                  </NavLink>
                  <NavLink to="/izohlar" className="modal-link">
                    <MessageOutlined style={{ marginRight: 8 }} />
                    Контакты
                  </NavLink>
                  <hr />
                  <NavLink to="/kalkulyator" className="modal-link">
                    <CalculatorOutlined style={{ marginRight: 8 }} />
                    Калькулятор
                  </NavLink>
                  <NavLink to="/korzina" className="modal-link">
                    <ShoppingCartOutlined style={{ marginRight: 8 }} />
                    Корзина
                  </NavLink>
                  <NavLink to="/profil" className="modal-link">
                    <UserOutlined style={{ marginRight: 8 }} />
                    Профиль
                  </NavLink>
                </Nav>
              </div>
            </div>
          </Modal>

        </>
      ) : (
        <Navbar bg="white" className='d-flex align-items-center' expand="lg">
          <Container>
            <Navbar.Brand href="#"><img src={foto} alt="logo" className="logo-img" style={{ height: '40px' }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="d-flex w-100 justify-content-between">
                <Nav className="m-auto gap-5">
                  <NavLink to="/katalog" className="nav-link-hover-red d-flex p-2 align-items-center">
                    <AppstoreOutlined style={{ marginRight: 6 }} />
                    Каталог
                  </NavLink>
                  <NavLink to="/proekti" className="nav-link-hover-red d-flex p-2 align-items-center">
                    <ProjectOutlined style={{ marginRight: 6 }} />
                    Проекты
                  </NavLink>
                  <NavLink to="/aksiyalar" className="nav-link-hover-red d-flex p-2 align-items-center">
                    <TagsOutlined style={{ marginRight: 6 }} />
                    Акции
                  </NavLink>
                  <NavLink to="/izohlar" className="nav-link-hover-red d-flex p-2 align-items-center">
                    <ContactsOutlined style={{ marginRight: 6 }} />
                    Контакты
                  </NavLink>
                </Nav>

                <Nav className="ms-auto gap-5" style={{ marginRight: '20px' }}>
                  <NavLink to="/kalkulyator" className="nav-link-hover-blue d-flex align-items-center">
                    <CalculatorOutlined style={{ marginRight: 6 }} />
                    Калькулятор
                  </NavLink>
                  <NavLink to="/korzina" className="nav-link-hover-blue d-flex align-items-center">
                    <ShoppingCartOutlined style={{ marginRight: 6 }} />
                    Корзина
                  </NavLink>
                  <NavLink to="/profil" className="nav-link-hover-blue d-flex align-items-center">
                    <UserOutlined style={{ marginRight: 6 }} />
                    Профиль
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
