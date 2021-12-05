import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/Actions/postAction";

const Dashboard =()=> {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.post);
    useEffect(() => {
        if(!selector.loading){
            const data=localStorage.getItem("token")
       const token = JSON.parse(data)
       console.log("token--->",token)
        dispatch(getProfile(selector.posts.data._id))
        }
    }, [])
    return (
        <div data-testid="dashboard">
          <h5>{selector?.posts?.data?.firstName} logged successfully  </h5>
        </div>
    )
}

export default Dashboard;
