import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUser, updateUser } from "../../store/Actions/postAction"
import "./Dashboard.scss"
import { Offcanvas, Table, Button, Spinner } from "react-bootstrap";
import moment from "moment"
import Form from '../Form/Form'
import "../Form/Form.scss"
import {Links} from '../Link/Link'

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    dob: new Date(),
    gender: "",
    password: ""
  })
  const [userId, setUserId] = useState("")
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.post)

  useEffect(() => {
    const id = localStorage.getItem("id")
    setUserId(JSON.parse(id))
  }, [])

  useEffect(() => {
    dispatch(getAllUser())
  }, [selector.post, dispatch]);
  const edit = (data) => {
    setShow(true)
    setId(data._id)
    moment.defaultFormat = "DD.MM.YYYY HH:mm"
    setInput({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      address: data.address,
      dob: data.dob,
      gender: data.gender
    })
  }

  const verify = (data) => {
    data.verifed = !data.verifed
    dispatch(updateUser(data._id, data))
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
      password: ""
    })
  }

  const onSubmit = (id, data) => {
    dispatch(updateUser(id, data))
    setId('')
    setShow(false)
  }

  if (selector.loading) {
    return <Spinner animation="border" role="status" />
  }

  const onChange = (e) => {
    e.preventDefault()
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const onChangeDate = (date) => {
    setInput({ ...input, dob: date })
  }

  return (
    <>
        <Links />
        <>
        <div className="content">
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
              {selector.posts.map((post, index) => {
                  return (post._id !== userId && <tr key={index}>
                    <td>{post.email}</td>
                    <td>{post.firstName}</td>
                    <td>{post.lastName}</td>
                    <td>{post.address}</td>
                    <td>{post.dob}</td>
                    <td>{post.gender}</td>
                    <td>{post.Admin ? 'yes' : "No"}</td>
                    <td><Button onClick={() => edit(post)}>Edit</Button> </td>
                    <td><Button onClick={() => verify(post)}>{post.verifed ? 'Verified' : 'Verify'}</Button></td>
                  </tr>)
              })}
            </tbody>
          </Table>
          <Offcanvas show={show} onHide={handleClose} placement='end' >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Edit Details</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form onChange={onChange} input={input} onChangeDate={onChangeDate} ispwd={false} />
              <div className="edit-button">
                <button className="btn" onClick={() => onSubmit(id, input)}>
                  submit
                </button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

        </div>
        </>
    </>
  )
}

export default Dashboard
