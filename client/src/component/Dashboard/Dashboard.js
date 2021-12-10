import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/Actions/postAction";
import "./Dashboard.scss";
import { Navbar,Nav,Offcanvas ,NavDropdown} from "react-bootstrap";

const Dashboard = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.post);
  useEffect(() => {
    console.log("token--->", selector);
    if (!selector.loading) {
      console.log("token--->", selector.posts.data);
      dispatch(getProfile(selector.posts.data._id));
    }
  }, []);
  return (
    <div className="">
     <div className="sidebar">
<div className="d-sm-block d-md-none">
     <Navbar bg="light" expand={false}>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/profile">Home</Nav.Link>
          <Nav.Link href="/link">Link</Nav.Link>
        </Nav>
        </Offcanvas.Body>
    </Navbar.Offcanvas>
        </Navbar>
        </div>
     <Nav className="col-sm-2 d-none d-md-block  sidebar navs"
            activeKey="/home"
            >
                 <Nav.Item >
                <Nav.Link href="/dashboard" className="nav-head">My App</Nav.Link>
            </Nav.Item>
            <Nav.Item className="">
                <Nav.Link href="/dashboard">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/profile" >Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/link" >Link</Nav.Link>
            </Nav.Item>
            </Nav>

     </div>
     <div className="content">
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>

     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>

     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>
     <p>jksdkjnkjsnbdkj</p>

      <p>jksdkjnkjsnbdkj</p>
       <p>jksdkjnkjsnbdkj</p> <p>jksdkjnkjsnbdkj</p>
       <p>jksdkjnkjsnbdkj</p>
       <p>jksdkjnkjsnbdkj</p>
       <p>jksdkjnkjsnbdkj</p>
       <p>jksdkjnkjsnbdkj</p>
       <p>jksdkjnkjsnbdkj</p>
       <p>jksdkjnkjsnbdkj</p>
       <p>jksdkjnkjsnbdkj</p>
       <p>jksdkjnkjsnbdkj</p>
       <p>jksdkjnkjsnbdkj</p>
       <p>jksdkjnkjsnbdkj</p>
       <p>jksdkjnkjsnbdkj</p>

        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p> <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p> <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>#action2
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
        <p>jksdkjnkjsnbdkj</p>
         <p>jksdkjnkjsnbdkj</p>

     </div>
    </div>
  );
};

export default Dashboard;
