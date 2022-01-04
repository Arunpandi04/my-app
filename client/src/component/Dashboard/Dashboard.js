import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/Actions/postAction";
import "./Dashboard.scss";
import { Navbar, Nav, Offcanvas, Dropdown } from "react-bootstrap";

const Dashboard = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.post)
  useEffect(() => {
    console.log("token--->");
   const id = localStorage.getItem("id")
      dispatch(getProfile(JSON.parse(id)))
  }, [dispatch]);

  const logout =()=>{
    localStorage.clear()
  }
  

  if(selector.loading){
    return <div>Loading.....</div>
  }

  return (
    <>
      <div className="sidebar">
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
                <h4>My App</h4>
                  <Nav.Link href="/profile">Home</Nav.Link>
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
          <h4> My App </h4>
          <Nav.Item>
            <Nav.Link href="/dashboard">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/link">Link</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="content">
        <div className="header">
       { selector.posts.data && <Dropdown className="d-inline mx-3 drop-down">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              {selector?.posts?.data?.firstName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/link">Menu Item</Dropdown.Item>
              <Dropdown.Item href="/" onClick={logout}>Signout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
