import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile ,getAllUser, updateUser} from "../../store/Actions/postAction";
import "./Dashboard.scss";
import { Navbar, Nav, Offcanvas, Dropdown ,Table,Button} from "react-bootstrap";

const Dashboard = () => {
  const[loader,setLoader]=useState(false)
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.post)
  useEffect(() => {
   const id = localStorage.getItem("id")
      dispatch(getProfile(JSON.parse(id)))
  }, [dispatch])

  useEffect(() => {
    dispatch(getAllUser())
   }, [selector.post]);

  const logout =()=>{
    localStorage.clear()
  }
  const edit =(data)=>{
    data.verifed = !data.verifed
    dispatch(updateUser(data._id,data))
  }
  const verify =(data)=>{
    setLoader(prevSelected => {
      return !prevSelected
    })
    data.verifed = !data.verifed
    dispatch(updateUser(data._id,data))
    setLoader(prevSelected => {
      return !prevSelected})
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
       <Dropdown className="d-inline mx-3 drop-down">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              {selector?.post?.firstName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/link">Menu Item</Dropdown.Item>
              <Dropdown.Item href="/" onClick={logout}>Signout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {loader ? <div> loading...</div> :
       <Table responsive>
        <thead>
    <tr>
      <th>Email</th>
      <th>First_Name</th>
      <th>Last_Name</th>
      <th>Address</th>
      <th>DOB</th>
      <th>Gender</th>
      <th>Admin</th>
      <th>Verified</th> 
      <th>Edit</th> 
      <th>Verify</th>   
    </tr>
  </thead>
  <tbody>
   { selector.posts.map((post,index) => 
   <tr key={index}>
      <td>{post.email}</td>
      <td>{post.firstName}</td>
      <td>{post.lastName}</td>
      <td>{post.address}</td>
      <td>{post.dob}</td>
      <td>{post.gender}</td>
      <td>{post.Admin ? 'yes' : "No"}</td>
      <td>{post.verifed ? 'yes' : "No"}</td>
      <td><Button onClick={()=>edit(post)}>Edit</Button> </td>
      <td><Button onClick={()=>verify(post)}>Verify</Button></td>
    </tr>)}
  </tbody>
        </Table>}
      </div>
    </>
  );
};

export default Dashboard;
