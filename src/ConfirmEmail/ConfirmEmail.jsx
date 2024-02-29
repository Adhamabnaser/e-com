import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

export default function ConfirmEmail() 
{
    console.log('adham');
    const [isloading , setisloading] = useState(false)
    const navigate = useNavigate()
    
    let user = 
    {
        email : "",
        verification_code : ""
    }
  const formikobj = useFormik({
    initialValues : user,
    onSubmit:async(values)=>
    {
        try
        {   
            setisloading(true)
            const {data} = await axios.post('https://khdmah.online/api/confirm-code-email',values)// fe hena headers
            console.log(data)
           
            if (data?.verification_code === 'success') 
            {   
                toast.success('Login Successfully')
                // localStorage.setItem('token',data.token)
                navigate('/home' , 1000)
                // console.log(data.role_type);
            }            
            setisloading(false)
        }
        catch(error)
        {
            toast.error('Invalid code or email')
            console.log(error.message)
            setisloading(false)
        }
    },
    validate:async(values)=>
    {
        const errors = {};
        if (values.email.includes('@')===false ||values.email.includes('.') === false) { errors.email = 'E-mail is Invalid'}
        if (values.verification_code.length ===6) {errors.verification_code = 'verification_code must be 6 digit'}
        console.log(errors)
        // seterrMsg(null)
        return errors
    }
  })  
  return<>
  <form className='container' onSubmit={formikobj.handleSubmit}>

        <h2 className='mt-5 text-success text'>Confirmation of  Email : </h2>

        <div className='form-control my-4'>
            <div className='my-4'>
               <div>
                    <label htmlFor="Email" className=' pb-1'> Email :</label>
                    <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.email} type="text" id="Email" name="email" placeholder='Your Email'className='form-control mb-3' />
               </div> 
                <div>
                    <label htmlFor="ConfirmEmail" className=' pb-1'> Code :</label>
                    <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.ConfirmEmail} type="text" id="verification_code" name="verification_code" placeholder=' Code' className='form-control mb-3'/>

                </div>
            </div>
            
        </div>

    
       
        <div className='d-flex justify-content-end'><button type= 'submit' className='btn btn-outline-success px-5'  >
            
            {isloading?<ThreeDots 
                height="25" 
                width="50" 
                radius="4"
                color="#4fa94d" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}/> :"ConfirmEmail"}
              </button>  
            </div>
</form>
  </>
}
