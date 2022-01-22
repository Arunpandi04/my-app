import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../store/Actions/postAction"
import { Navbar, Container, Form, NavDropdown, Nav, Offcanvas, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Link.scss'

export const Links = () => {

    const dispatch = useDispatch();
    const selector = useSelector((state) => state.post)
    
    useEffect(() => {
        const id = localStorage.getItem("id")
        dispatch(getProfile(JSON.parse(id)))
    }, [dispatch])

    return (
        <div >
            <div className="d-none d-md-block">
                <Navbar fixed="top" className="main" style={{ backgroundColor: "#6289e6", height: "15vh" }}>
                    <Navbar.Brand className="col-sm-2" href="#home"><h3 className="text" style={{ textAlign: "center" }}>React-Bootstrap</h3></Navbar.Brand>
                    <Dropdown className="d-inline mx-3 drop-down">
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                            Arunpandi
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                            <Dropdown.Item href="/link">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="/">Signout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar>
            </div>
            <div className="d-sm-block d-md-none side-btn">
                <Navbar bg="light" expand={false}>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <h4 className="title">MyApp</h4>
                                <Nav.Link href="/profile">Home</Nav.Link>
                                <Nav.Link href="/link">Link</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar>
                <Dropdown className="d-inline mx-3 drop-down">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                        Arunpandi
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                        <Dropdown.Item href="/link">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="/">Signout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="sidebar">
                <div className="d-sm-block d-md-none">

                </div>
                <Nav
                    className="col-sm-2 d-none d-md-block  sidebar navs"
                    activeKey="/dashboard"
                >
                    <Nav.Item>
                        <Link to="/dashboard">Active</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/profile">Profile</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/link">Link</Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}
