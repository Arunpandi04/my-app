import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/Actions/postAction";
import './Dashboard.scss'

const Dashboard =()=> {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.post);
    useEffect(() => {
        console.log("token--->",selector)
        if(!selector.loading){
       console.log("token--->",selector.posts.data)
        dispatch(getProfile(selector.posts.data._id))
        }
    }, [])
    return (
        <div data-testid="dashboard" className="container-dash">
          <h5>{selector?.posts?.data?.firstName} logged successfully</h5>
        </div>
    )
}

export default Dashboard;
