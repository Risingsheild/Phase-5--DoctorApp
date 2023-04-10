import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectUser } from "../../features/Users/userSlice";


function ApptForm(){
    
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const [errors, setErrors] = useState([])

    const allPatients = user.patients

    const [apptInfo, setApptInfo] = useState({
        startDate: "", 
        patient_id: patient_id,
        description: description, 
    })
    
    
}