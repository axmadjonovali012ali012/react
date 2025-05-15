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

          <Modal
            open={show}
            onCancel={handleClose}
            footer={null}
            centered
            width="90%"
            bodyStyle={{ padding: '24px' }}
          >
            <Nav className="flex-column gap-3">
              <NavLink to="/katalog" onClick={handleClose} className="modal-link"><AppstoreOutlined /> Каталог</NavLink>
              <NavLink to="/proekti" onClick={handleClose} className="modal-link"><ProjectOutlined /> Проекты</NavLink>
              <NavLink to="/aksiyalar" onClick={handleClose} className="modal-link"><TagsOutlined /> Акции</NavLink>
              <NavLink to="/izohlar" onClick={handleClose} className="modal-link"><MessageOutlined /> Контакты</NavLink>
              <hr />
              <NavLink to="/kalkulyator" onClick={handleClose} className="modal-link"><CalculatorOutlined /> Калькулятор</NavLink>
              <NavLink to="/korzina" onClick={handleClose} className="modal-link"><ShoppingCartOutlined /> Корзина</NavLink>
              <NavLink to="/profil" onClick={handleClose} className="modal-link"><UserOutlined /> Профиль</NavLink>
            </Nav>
          </Modal>

        </>
      ) : (

        <Navbar bg="white" expand="lg" className="shadow-sm">
          <Container fluid style={{padding: '0px 130px'}}>
            <div className="d-flex align-items-center justify-content-between w-100">
              <Navbar.Brand href="#">
                <img src={foto} alt="logo" style={{ height: '40px' }} />
              </Navbar.Brand>

              <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center w-100">

                  <Nav className="gap-4">
                    <NavLink to="/katalog" className="nav-item nav-link-hover-red">
                      <AppstoreOutlined /> Каталог
                    </NavLink>
                    <NavLink to="/proekti" className="nav-item nav-link-hover-red">
                      <ProjectOutlined /> Проекты
                    </NavLink>
                    <NavLink to="/aksiyalar" className="nav-item nav-link-hover-red">
                      <TagsOutlined /> Акции
                    </NavLink>
                    <NavLink to="/izohlar" className="nav-item nav-link-hover-red">
                      <ContactsOutlined /> Контакты
                    </NavLink>
                  </Nav>
                  <Nav className="gap-4">
                    <NavLink to="/kalkulyator" className="nav-item nav-link-hover-blue">
                      <CalculatorOutlined /> Калькулятор
                    </NavLink>
                    <NavLink to="/korzina" className="nav-item nav-link-hover-blue">
                      <ShoppingCartOutlined /> Корзина
                    </NavLink>
                    <NavLink to="/profil" className="nav-item nav-link-hover-blue">
                      <UserOutlined /> Профиль
                    </NavLink>
                  </Nav>
                </div>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>

      )}
    </>
  );
};

export default MyNavbar;
