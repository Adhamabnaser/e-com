import { useFormik } from 'formik'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';


// src\Register\Register fooor user



export default function Register() 
{

    let user = 
  {
    name :"",
    email :"",
    password :"",
    rePassword :"",
    phone :"",
  }
  const [errMsg ,seterrMsg] =useState(null);
  const [successMsg ,setsuccessMsg] =useState(null);
  const [isloading , setisloading] = useState(false)
  const navigate =  useNavigate()

  const formikobj =  useFormik({
    initialValues: user,
    onSubmit: async(values) => 
    {
     
      console.log( values)
      setisloading(true)
      //Api Calling is here
      const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
      .catch((error)=>
      {
        // console.log(error.response.data.message);
        seterrMsg(error.response.data.message)
        setisloading(false)
      })
      if (data.message === 'success') 
      {
        setsuccessMsg('Account is aready created')
        setTimeout(() => {navigate('/product')}, 500); 
      }
      

    },
    validate : function (values) 
    { 

      const errors = {};
      if (values.name.length < 4 || values.name.length > 10) { errors.name = 'Name Should be from 4 to 10'}
      if (values.email.includes('@')===false ||values.email.includes('.') === false) { errors.email = 'E-mail is Invalid'}
      if (!values.phone.match(/^(\01|01|00201)[0-2,5]{1}[0-9]{8}/)) {errors.phone = 'Enter Invalid Number'}
      if (values.password.length < 6 || values.password.length > 12) {errors.password = 'Name Should be from 4 to 10'}
      if (values.rePassword!== values.password) {errors.rePassword = `password and Reoassword dosn't match`}
      console.log(errors)
      seterrMsg(null)

      return errors
    }
  })

  return<>
            <form className='container' onSubmit={formikobj.handleSubmit}>

            {errMsg? <div className="alert alert-danger text-center">{errMsg}</div>: ''}
            {successMsg? <div className="alert alert-success text-center">{successMsg}</div>: ''}
                            <h2 className='mt-5 text-success text'>Register for user Now : </h2>

                            <label htmlFor="name" className=' pb-1'> Name :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.name} type="text" id="name" name="name"placeholder=' Name'  className='form-control mb-3 '/>
                            {formikobj.errors.name && formikobj.touched.name ?<div class="alert alert-success" role="alert">{formikobj.errors.name}</div> :''}

                            <label htmlFor="Email" className=' pb-1'> Email :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.email} type="text" id="Email" name="email" placeholder='Ex : user@gmail.com'className='form-control mb-3' />
                            {formikobj.errors.email && formikobj.touched.email?<div class="alert alert-success" role="alert">{formikobj.errors.email}!</div> :''}

                            <label htmlFor="password" className=' pb-1'> Password :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.password} type="password" id="password" name="password" placeholder=' Password' className='form-control mb-3'/>
                            {formikobj.errors.password && formikobj.touched.password?<div class="alert alert-success" role="alert">{formikobj.errors.password}!</div> :''}

                            <label htmlFor="rePassword" className=' pb-1'> RePassword :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.rePassword} type="rePassword" id="rePassword" placeholder='Same Password' name="rePassword" className='form-control mb-3' />
                            {formikobj.errors.rePassword && formikobj.touched.rePassword?<div class="alert alert-success" role="alert">{formikobj.errors.rePassword}</div> :''}

                            <label htmlFor="phone" className=' pb-1'> Phone :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.phone} type="tel" id="phone" name="phone"className='form-control mb-3' placeholder=' Number' />
                            {formikobj.errors.phone&& formikobj.touched.phone ?<div class="alert alert-success" role="alert">{formikobj.errors.phone}!</div> :''}

                            <div className='d-flex justify-content-end'><button type= 'submit' disabled={ formikobj.isValid === false || formikobj.dirty === false} className='btn btn-outline-success'  >
                                
                                {isloading?<ThreeDots 
                                    height="25" 
                                    width="50" 
                                    radius="9"
                                    color="#4fa94d" 
                                    ariaLabel="three-dots-loading"  
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                    /> :"Register"}
                                
                                
                                
                                
                                
                            </button>  </div>
            </form>

</>
}
  

