import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllUser, updateUser} from "../../store/Actions/postAction";
import "./Dashboard.scss";
import { Link } from "react-router-dom";
import { Navbar, Nav, Offcanvas, Dropdown ,Table,Button,Spinner} from "react-bootstrap";
import DatePicker from 'react-date-picker';
import CustomInput from "../customField/CustomInput";
import "../RegisterComponent/Form.scss";
import moment from "moment";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const[input,setInput]= useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    dob: new Date(),
    gender: "",
    password:""
  })
const[user,setUser]=useState("")
const[userId,setUserId]=useState("")
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.post)
  useEffect(() => {
   const Name = localStorage.getItem("Name")
   const id = localStorage.getItem("id")
      // setUser(JSON.parse(Name))
      setUser(JSON.parse(Name))
      setUserId(JSON.parse(id))
  }, [])

  useEffect(() => {
    dispatch(getAllUser())
   }, [selector.post,dispatch]);

  const logout =()=>{
    localStorage.clear()
  }
  const edit =(data)=>{
    setShow(true)
    setId(data._id)
    moment.defaultFormat = "DD.MM.YYYY HH:mm"
   console.log("msnk",data.dob,moment(data.dob, moment.defaultFormat).toDate())
    setInput({firstName:data.firstName,
    lastName: data.lastName,
    email: data.email,
    address: data.address,
    dob: data.dob,
    gender: data.gender
  })
   // dispatch(updateUser(data._id,data))
  }
  const verify =(data)=>{
    data.verifed = !data.verifed
    dispatch(updateUser(data._id,data))
  }

  const handleClose = () => {
    setShow(false)
    setInput({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      dob: new Date(),
      gender: "",
      password:""
    })
  };
const onSubmit =(id,data)=>{
  dispatch(updateUser(id,data))
  setId('')
  setShow(false)
}
  if(selector.loading){
    return <Spinner animation="border" role="status" />
  }

  const onChange = (e) => {
    e.preventDefault()
    setInput({ ...input, [e.target.name]: e.target.value })
  };
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
      <div className="content">
        <div className="header">
       <Dropdown className="d-inline mx-3 drop-down">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              {user}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/link">Menu Item</Dropdown.Item>
              <Dropdown.Item href="/" onClick={logout}>Signout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <>
       <Table responsive bordered hover size="sm">
        <thead>
    <tr>
      <th>Email</th>
      <th>First_Name</th>
      <th>Last_Name</th>
      <th>Address</th>
      <th>DOB</th>
      <th>Gender</th>
      <th>Admin</th> 
      <th>Edit</th> 
      <th>Verify</th>   
    </tr>
  </thead>
  <tbody>
   { selector.posts.map((post,index) =>{
     if(post._id !== userId)
  return <tr key={index}>
      <td>{post.email}</td>
      <td>{post.firstName}</td>
      <td>{post.lastName}</td>
      <td>{post.address}</td>
      <td>{post.dob}</td>
      <td>{post.gender}</td>
      <td>{post.Admin ? 'yes' : "No"}</td>
      <td><Button onClick={()=>edit(post)}>Edit</Button> </td>
      <td><Button onClick={()=>verify(post)}>{post.verifed ? 'Verified' : 'Verify'}</Button></td>
    </tr>})}
  </tbody>
        </Table>
        <Offcanvas show={show} onHide={handleClose} placement='end' >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <CustomInput type="text" name="firstName" onChange={onChange} value={input.firstName} />
        <CustomInput type="text" name="lastName" onChange={onChange} value={input.lastName} />
        <CustomInput type="email" name="email" onChange={onChange} value={input.email} />
        <CustomInput name="address" onChange={onChange} value={input.address} />
        <div className="select-div">
          <span className="text-font label">gender</span>
          <select
            className="select"
            name="gender"
            value={input.gender}
            onChange={onChange}
          >
            <option default="">Select Gender</option>
            <option value="Male">male</option>
            <option value="Female">female</option>
          </select>
        </div>
        <div className="datepicker">
          <span className="text-font label">dob</span>
          <DatePicker
          className='dates'
            name="dob"
         onChange={(date) =>{console.log("data",date)
          setInput({ ...input, dob: date })}
        }
         value={moment(input.dob, moment.defaultFormat).toDate()}
      />
        </div>
        <div className="edit-button">
          <button className="btn" onClick={()=>onSubmit(id,input)}>
            submit
          </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

        </>
      </div>
    </>
  );
};

export default Dashboard;
