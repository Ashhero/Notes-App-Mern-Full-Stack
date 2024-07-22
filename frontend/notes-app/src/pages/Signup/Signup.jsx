// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Passwordinput from '../../components/input/Passwordinput';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosinstance';

const Signup = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(null);

  const navigate=useNavigate()

  const handleSignup=async(e)=>{
    e.preventDefault();

    if(!name){
      setError("Please enter your name")
      return;
    }
    if(!validateEmail(email)){
      setError("Please enter valid email address")
      return;
    }
    if(!password){
      setError("Please enter a password")
      return;
    }
    setError("")
    //Sigup API Handle
    try{
      const response=await axiosInstance.post("/create-account",{
        fullName:name,
        email:email,
        password:password
      });
      //Handle successfull login response
      if(response.data&&response.data.error){
        setError(response.data.error.message)
        return
      }
      if(response.data&&response.data.accessToken){
        localStorage.setItem("token",response.data.accessToken);
        navigate("/dashboard");
      }
    }
    catch (error){
      //Handle error response
      if(error.response&&error.response.data&&error.response.data.message){
        setError(error.response.data.message);
        }
        else{
          setError("An unexpected error occured, Please try again.");
        }
      }
    }

return (
    <div>
    <Navbar />
    <div className='flex items-center justify-center mt-20'>
      <div className='w-96 border rounded bg-white px-7 py-10'>
        <form onSubmit={handleSignup}>
          <h4 className='text-2xl mb-7'>Signup</h4>
          <input
              type="text"
              placeholder="Name"
              className='input-box'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
             <input
              type="text"
              placeholder="Email"
              className='input-box'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Passwordinput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

            <button type="submit"className="btn-primary">Create Account</button>
            <p className='text-sm text-center my-4'>
              Already have an Account?{" "}
            
            <Link to="/login" className='font-medium text-primary underline'>Login</Link>
            </p>

          </form>
          </div>
          </div>
          </div>
  )
}

export default Signup
