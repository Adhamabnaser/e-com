import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

export default function LoginUser() 
{
    const [isloading , setisloading] = useState(false)
    const navigate = useNavigate()
    localStorage.setItem('fcsToken','fFP7MlAmSzqX4gNXkJxOc7:APA91bFHcJnneQA_vjafpJrKnzIN_PYKV0iTw-ohjEerTY4nh8tryg9aSjOpOyRmRnDlHySMxNgA2_2hJP4QXsRiVuyul_WkyR5nEQQCdy_dJL87ooSapmpHhsXTGBPf5wmHwWy3_2Aa')
    
    let user = {
    email : "",
    password : ""
  }
  const formikobj = useFormik({
    initialValues : user,
    onSubmit:async(values)=>
    {
        try
        {   
            setisloading(true)
            const data = await axios.post('https://khdmah.online/api/login',values,{headers:{fcsToken:localStorage.getItem("fcsToken")}})
            console.log(data)
            // if(data?.complite_data === true)
            // {
            //     setisloading(true)
            // }
            // if (data.data.role_type) 
            // {
            //     navigate('/product' , 500)
            // }
            //else
            //{
            //    navigate('/cat' , 500)
            // }
            //
            
            setisloading(false)
        }
        catch(error)
        {
            console.log(error.message)
            setisloading(false)
        }
    },
    validate:async(values)=>
    {
        const errors = {};
        if (values.email.includes('@')===false ||values.email.includes('.') === false) { errors.email = 'E-mail is Invalid'}
        if (values.password.length < 6 || values.password.length > 12) {errors.password = 'Name Should be from 4 to 10'}
        console.log(errors)
        // seterrMsg(null)
        return errors
    }
  })  
  return<>
  <form className='container' onSubmit={formikobj.handleSubmit}>

{/* {errMsg? <div className="alert alert-danger text-center">{errMsg}</div>: ''}
{successMsg? <div className="alert alert-success text-center">{successMsg}</div>: ''} */}
        <h2 className='mt-5 text-success text'>Login user Now : </h2>


        <label htmlFor="Email" className=' pb-1'> Email :</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.email} type="text" id="Email" name="email" placeholder='Ex : user@gmail.com'className='form-control mb-3' />
        {/* {formikobj.errors.email && formikobj.touched.email?<div class="alert alert-success" role="alert">{formikobj.errors.email}!</div> :''} */}

        <label htmlFor="password" className=' pb-1'> Password :</label>
        <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.password} type="password" id="password" name="password" placeholder=' Password' className='form-control mb-3'/>
        {/* {formikobj.errors.password && formikobj.touched.password?<div class="alert alert-success" role="alert">{formikobj.errors.password}!</div> :''} */}

    
       
        <div className='d-flex justify-content-end'><button type= 'submit' disabled={ formikobj.isValid === false || formikobj.dirty === false} className='btn btn-outline-success'  >
            
            {isloading?<ThreeDots 
                height="25" 
                width="50" 
                radius="4"
                color="#4fa94d" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}/> :"Login"}
              </button>  
            </div>
</form>
  </>
}
