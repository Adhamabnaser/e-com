import React, { useState } from 'react'
import design from './pass.module.css'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useFormik } from 'formik'
import axios from 'axios'
import { InfinitySpin } from 'react-loader-spinner'

export default function ForgetPass() 
{

  const [errM , seterrM] = useState(null)
  const [isloading , setisloading] = useState(false)
  const navigate = useNavigate()
  let user = { sender : "",}
  const formikobj = useFormik({
    initialValues : user,
    onSubmit:async(value)=>
    {
        try
        {   
            setisloading(true)
            const {data} = await axios.post('https://khdmah.online/api/forget-password',value)
           
            if (data?.message === 'check your Email to reset your password') 
            {   
                toast.success('check your Email to reset your password')
                setTimeout(() => {navigate('/resetpass')}, 1000);
            }
            setisloading(false)
        }
        catch(error)
        {
            toast.error(error.response.data.message)
            console.log(error.response.data.message)
            setisloading(false)
        }
    },
    validate:async(value)=>
    {
        const errors = {};
        if (value.sender.includes('@')===false ||value.sender.includes('.') === false) { errors.sender = 'E-mail is Invalid'}
        console.log(value)
        return errors
    }
  })  

  return <>
  <div className='d-flex justify-content-center align-items-center w-100'>
      <div className={design.form_container +' w-50'}>
          <div className={design.logo_container+ ' d-flex justify-content-center align-items-center'}>
           <span className='fw-bold fs-4 text-center'>Forgot Password</span> 
          </div>

          <form onSubmit={formikobj.handleSubmit} className={design.form}>
            <div className={design.form_group}>
              <label className='ps-1' htmlFor="email">Email</label>
              <input onChange={formikobj.handleChange} value={formikobj.values.sender} onBlur={formikobj.handleBlur} type="text" id="email" name="sender" placeholder="Enter your email" required=""/>
            </div>

            <button className={design.form_submit_btn} type="submit">
              {isloading?
              <div className={design.loader}>    
                <span>
                  <InfinitySpin
                    visible={true}
                    className="spinner"
                    height="200"
                    width="200"
                    color="#ffff"
                    ariaLabel="infinity-spin-loading"
                    />
                </span>
              </div>
                    :"Send Email"}
            </button>
          </form>

          <p className={design.signup_link}>
            Don't have an account?
            <Link className='text-decoration-none' to = '/loguser' ><span className={design.link}> Sign up now</span> </Link>
          </p>
        </div>
  </div>
  </>
}
