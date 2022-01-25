import React, { useEffect,useState } from 'react'
import { useDispatch } from "react-redux"
import { getProfile } from "../../store/Actions/postAction"
import { Navbar, Nav, Offcanvas, Dropdown} from "react-bootstrap"
import { Link } from "react-router-dom"
import './Link.scss'

export const Links = () => {
    const [user, setUser] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        const id = localStorage.getItem("id")
        dispatch(getProfile(JSON.parse(id)))
    }, [dispatch])

    useEffect(() => {
        const Name = localStorage.getItem("Name")
        setUser(JSON.parse(Name))
      }, [])

    const logout = () => {
        localStorage.clear()
        sessionStorage.clear()
    }

    return (
        < >
            <Navbar fixed="top" className="main" style={{ backgroundColor: "#6289e6", height: "13vh", display: "flex", justifyContent: "space-between" }}>
                <Navbar.Brand className="col-sm-2" href="#home"><h3 className="text" style={{ textAlign: "center" }}>my Auth App</h3></Navbar.Brand>
                <Dropdown className="d-inline mx-3 drop-down">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                        {user}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/link">Link</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/" onClick={logout}>Signout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>

            <div className="sidebar">
                <div className="d-sm-block d-md-none">
                    <Navbar bg="light" expand={false} className="off-canvas btn" style={{ marginTop: "83px" }}>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="start"
                        >
                            <Offcanvas.Body style={{backgroundColor: "steelblue"}}>
                                <Nav className="justify-content-end flex-grow-1 pe-3 navs">
                                    <h4 className="title">my Auth App</h4>
                                    <Nav.Item><Link to="/dashboard" className="title">Dashboard</Link></Nav.Item>
                                    <Nav.Item><Link to="/profile" className="title">Profile</Link></Nav.Item>
                                    <Nav.Item><Link to="/link" className="title">Link</Link></Nav.Item>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Navbar>
                </div>
                <Nav
                    className="col-sm-2 d-none d-md-block  sidebar navs"
                    activeKey="/dashboard"
                >
                    <Nav.Item>
                            <Link to="/dashboard">Dashboard</Link>
                    </Nav.Item>
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
        </>
    )
}
