import React from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function SignupForm({setIsLoggedIn}) {
  const [showPassword,setShowPassword] = useState(false)
  const [accountType, setAccountType] = useState("student");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  let navigate = useNavigate()
  let [formData,setformData] = useState({
    firstname:"",
    lastname:"",
    phone:"",
    gender:"",
    city:"",
    state:"",
    howDidYouHear: [],
    email:"",
    password:"",
    confirmPassword:""
  })

  function changeHandler(e){
    const{name,value,checked,type} = e.target
    setformData((old)=>{
return{
  ...old,
  [name] : type ==="checkbox" ? checked : value
}
    })
  }

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = formData.howDidYouHear.includes(value);
    if (isChecked) {
      setformData({
        ...formData,
        howDidYouHear: formData.howDidYouHear.filter((item) => item !== value),
      });
    } else {
      setformData({
        ...formData,
        howDidYouHear: [...formData.howDidYouHear, value],
      });
    }
  };

  function submitHandler(e){
e.preventDefault();
if(formData.password !== formData.confirmPassword){
  toast.error("Password do not match");
  return
}

setIsLoggedIn(true);
toast.success("Account Created");
navigate("/dashboard")
  }
  return (
    <>
      <div   className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button   className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>Student</button>
        <button  className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
      <div className='flex gap-x-4 mt-[20px]'>
      <label className='w-full'>
        <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
          <input required name='firstname' value={formData.firstname} placeholder='Enter Your FirstName' type='text' onChange={changeHandler}   className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

        </label>
        <label>
        <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
          <input required name='lastname' value={formData.lastname} placeholder='Enter Your Email' type='text' onChange={changeHandler}   className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

        </label>
        </div>
        <div>
        <label>
        <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Phone Number<sup className='text-pink-200'>*</sup></p>
          <input required name='phone' value={formData.phone} placeholder='Enter Your LastName' type='number' onChange={changeHandler}   className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

        </label>
        </div>
      <div className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
      <div>
        <legend  className='text-[0.875rem] text-richblack-900  leading-[1.375rem]'>Gender</legend>
        
        <input  type='radio' name='gender' checked={formData.gender === "Male"} value="Male" onChange={changeHandler}   className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 '/><span><label htmlFor='gender'>Male</label></span>
        
        <input   className='bg-richblack-800 rounded-[0.5rem] text-richblack-5  '  type='radio' name='gender' checked={formData.gender === "Female"} value="Female" onChange={changeHandler}/>
        <label htmlFor='gender'>Female</label>
        <input   className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 ' type='radio' name='gender' checked={formData.gender === "other"} value="other" onChange={changeHandler}/>
        <label htmlFor='gender'>other</label>
        </div>

          <div>
          <label  className='text-[0.875rem] text-richblack-900 mb-1 leading-[1.375rem]'>How did you hear about this?</label>
          <br/>

          <input
            type="checkbox"
            name="howDidYouHear"
            value="LinkedIn"
            onChange={handleCheckboxChange}
            checked={formData.howDidYouHear.includes('LinkedIn')}
          /> LinkedIn
          <input
            type="checkbox"
            name="howDidYouHear"
            value="Friends"
            onChange={handleCheckboxChange}
            checked={formData.howDidYouHear.includes('Friends')}
          /> Friends
          <input
            type="checkbox"
            name="howDidYouHear"
            value="Job Portal"
            onChange={handleCheckboxChange}
            checked={formData.howDidYouHear.includes('Job Portal')}
          /> Job Portal
          <input
            type="checkbox"
            name="howDidYouHear"
            value="Others"
            onChange={handleCheckboxChange}
            checked={formData.howDidYouHear.includes('Others')}
          /> Others
        </div>

        <div>
          <label>City</label>
          <br/>
          <select require name='city' value={formData.city} onChange={changeHandler}>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
        </div>
        <div>
          <label className='mt-3 text-[0.875rem] text-richblack-800 mb-1 leading-[1.375rem]'>State</label>
          <br/>
          <select require name='state' value={formData.state} onChange={changeHandler}>
            <option  value="Mumbai">Gujarat</option>
            <option  value="Pune">Maharashtra</option>
            <option  value="Ahmedabad">Karnataka</option>
          </select>
        </div>
      </div>

        <div>
        <label>
      
        <p  className='text-[0.875rem] text-richblack-800 mb-1 leading-[1.375rem]'>Email Adddress<sup className='text-pink-200'>*</sup></p>
          <input  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required name='email' value={formData.email} placeholder='Enter Your LastName' type='text' onChange={changeHandler}/>

        </label>
        </div>

        
        <div className='w-full flex gap-x-4 mt-[20px]'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-900 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span
                     className='absolute right-3 top-[38px] cursor-pointer' 
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-800 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span 
                     className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ?

                         (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                         (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>
        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account
        </button>
      </form>
    </>
  )
}
