import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../store/Actions/postAction";

export const Profile = () => {

    const dispatch = useDispatch();
    const selector = useSelector((state) => state.post);
    useEffect(() => {
     const id = localStorage.getItem("id")
        dispatch(getProfile(JSON.parse(id)));
    }, [dispatch])

    return (
        <div>
            Profile
        </div>
    )
}
