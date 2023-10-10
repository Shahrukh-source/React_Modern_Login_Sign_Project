import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link ,useNavigate} from 'react-router-dom';
import { toast } from 'react-hot-toast';
export default function LoginForm({setIsLoggedIn}) {
    let navigate = useNavigate()
    let[formData,setformData] = useState({
        email:"",
        password:""
    })
const [showPassword,setshowPassword] = useState(false)
    function changeHandler(e){
        let name = e.target.name
        let value = e.target.value
        setformData((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    function submitHandler(e){
e.preventDefault()
setIsLoggedIn(true)
toast.success("Logged In");
        console.log("Printing the formData ");
        console.log(formData)
        navigate("/dashboard");

    }
  return (
  <>
      <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        <label  className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Adddress<sup className='text-pink-200'>*</sup>
            </p>
            <input name='email' required type='text' value={formData.email} onChange={changeHandler} placeholder='email enter id'  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                password<sup className='text-pink-200'>*</sup>
            </p>
            <input name='password'  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required type={showPassword ? ("text") : ("password" )} value={formData.password} onChange={changeHandler} placeholder='Enter Password'/><span  className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setshowPassword((old)=>!old)}>{showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}</span>
            <Link to="#"><p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forget Password</p></Link>
            
        </label>
        <button  className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>
      </form>
  </>
  )
}
