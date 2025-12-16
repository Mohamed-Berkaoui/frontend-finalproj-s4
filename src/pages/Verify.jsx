import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

function Verify() {
  const { hash, userId } = useParams();
  const navigate=useNavigate();
const [verified,setVerified]=useState(false);
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/v1/verify/${hash}/${userId}`)
    .then((response)=>{
        setVerified(true);
        setTimeout(()=>{navigate("/user/login");},2000)

    }
    )
    .catch((error)=>{
        toast.error("Verification failed: " + error.message);
    })
  },[])

  return (
    <div>
        {!verified ? <h2>Verifying your account...</h2> : <h2>Your account has been verified! You can now log in.</h2>}
    </div>
  )
}

export default Verify