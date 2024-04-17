import React, { useState } from 'react'
import design from './pass.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import toast from 'react-hot-toast'
import { InfinitySpin } from 'react-loader-spinner'

export default function ResetPass() 
{
  const [isloading , setisloading] = useState(false)
  const navigate = useNavigate()
  let user = {
     sender : "",
     verification_code : "",
     password : "",
     password_confirmation : "",
    }
  const formikobj = useFormik({
    initialValues : user,
    onSubmit:async(values)=>
    {
        try
        {   
            setisloading(true)
            const {data} = await axios.post('https://khdmah.online/api/reset-password',values)
            console.log(data)
           
            // if (data?.message === '') 
            // {   
            //     toast.success(data?.message)
            //     setTimeout(() => {navigate('/home')}, 1000);
            // }
            setisloading(false)
        }
        catch(error)
        {
            toast.error('Enter Valid INFO')
            console.log(error.message)
            setisloading(false)
        }
    },
    validate:async(values)=>
    {
        const errors = {};
       console.log(values)
        return errors
    }
  })  

  return <>
  <div className='d-flex justify-content-center align-items-center'>
      <div className={design.form_container}>
          <div className={'d-flex justify-content-center align-items-center fs-3 fw-bold'}>
            Reset Password
          </div>

          <form onSubmit={formikobj.handleSubmit} className={design.form}>
            <div className={design.form_group}>
              <label className='py-1' htmlFor="email">Email</label>
              <input onChange={formikobj.handleChange} value={formikobj.values.sender} onBlur={formikobj.handleBlur} type="text" id="email" name="sender" placeholder="Enter your email" required=""/>          
              <label className='py-1' htmlFor="code">code</label>
              <input onChange={formikobj.handleChange} value={formikobj.values.verification_code} onBlur={formikobj.handleBlur} type="text" id="code" name="verification_code" placeholder="Enter your code" required=""/>
              <label className='py-1' htmlFor="password">New Password</label>
              <input onChange={formikobj.handleChange} value={formikobj.values.password} onBlur={formikobj.handleBlur} type="text" id="password" name="password" placeholder="Enter your password" required=""/>
              <label className='py-1' htmlFor="password_confirmation">Match Password</label>
              <input onChange={formikobj.handleChange} value={formikobj.values.password_confirmation} onBlur={formikobj.handleBlur} type="text" id="password_confirmation" name="password_confirmation" placeholder="Enter your password_confirmation" required=""/>
            </div>

            <button className={design.form_submit_btn} type="submit">
            {isloading?
            <div className={design.loader}>
              <InfinitySpin
              visible={true}
              height="2"
              width="200"
              color="#ffff"
              ariaLabel="infinity-spin-loading"
              />

            </div>
                 :'Send Email'}
              
              </button>
          </form>

          <p className={design.signup_link}>
            Don't have an account?
            <Link className='text-decoration-none' to={'/loguser'} ><span className={design.link}> Sign up now</span></Link>
          </p>
        </div>
    
  </div>
  </>
}
