import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../store/Actions/postAction";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import './Profile.scss'
import '../Dashboard/Dashboard.scss'
import img from '../../profile.jpg'
import {Links} from '../Link/Link'


export const Profile = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.post)

  useEffect(() => {
    const id = localStorage.getItem("id")
    dispatch(getProfile(JSON.parse(id)))
  }, [dispatch])

 
  return (
    <>
      {/* <div className="sidebar">
        <div className="d-sm-block d-md-none">
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
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link href="/link">Link</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        </div>
        <Nav
          className="col-sm-2 d-none d-md-block  sidebar navs"
          activeKey="/dashboard"
        >
          <h4> MyApp </h4>
          <Nav.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/profile">Profile</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/link">Link</Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="content img">
        <div className="header">
          <Dropdown className="d-inline mx-3 drop-down">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              {user}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/link">Link</Dropdown.Item>
              <Dropdown.Item href="/" onClick={logout}>Signout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
        <Links />
        <div className="contents img ">
        {!selector.loading &&<Card style={{ width: '20rem' }}>
          <Card.Img width={180}
            height={180} variant="top" src={img} alt="Card image" />
          <Card.Body>
            <Card.Title>{selector.post.firstName} {selector.post.lastName}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{selector.post.email}</ListGroupItem>
          </ListGroup>
        </Card>}
        </div>

      {/* </div> */}
    </>
  )
}
