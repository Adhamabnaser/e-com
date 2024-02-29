import { useFormik } from 'formik'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import toast from 'react-hot-toast';


// src\Register\Register fooor user



export default function Register() 
{

    let user = 
  {
    full_name :"",
    email :"",
    password :"",
    password_confirmation :"",
    phone :"",
    nationality_id :"",
    user_type :"user",
    job_name :"",
    city_id :"",
    region_id :"",
    piece_number :"",
    street :"",
    building :"",
    automated_address_number :"",
    id_number_nationality :"",
    status :"",
    id_photo_nationality :"",
    personal_photo :"",

  }
  const [errMsg ,seterrMsg] =useState(null);
  const [successMsg ,setsuccessMsg] =useState(null);
  const [isloading , setisloading] = useState(false)
  const navigate =  useNavigate()

  const formikobj =  useFormik({
    initialValues: user,
    onSubmit: async(values) => 
    {
     
      try {
        const {data} = await axios.post('https://khdmah.online/api/register/user',values,{headers:{Accept:'application/json'}})
        // console.log(data);
        if (data.message === 'Success') 
        {
          toast('Account is aready created')
          setTimeout(() => {navigate('/home')}, 500); 
        }
      } catch (error) 
      {
        console.log(error);
      }
      setisloading(false)
    },
    validate : function (values) 
    { 

      const errors = {};
      if (values.full_name.length < 4 || values.full_name.length > 10) { errors.full_name = 'Name Should be from 4 to 10'}
      if (values.email.includes('@')===false ||values.email.includes('.') === false) { errors.email = 'E-mail is Invalid'}
      if (!values.phone.match(/^(\01|01|00201)[0-2,5]{1}[0-9]{8}/)) {errors.phone = 'Enter Invalid Number'}
      if (values.password.length < 6 || values.password.length > 12) {errors.password = 'Name Should be from 4 to 10'}
      if (values.password_confirmation!== values.password) {errors.password_confirmation = `password and Reoassword dosn't match`}
      if (values.nationality_id < 0 || !values.nationality_id > 300) {errors.nationality_id = 'Enter from range'}
      if (values.city_id < 0 ) {errors.city_id = 'Enter valid city'}
      if (values.piece_number < 0 ) {errors.piece_number = 'Enter valid piece_number'}
      if (values.street.length < 0 ) {errors.street = 'Enter valid street with some details'}
      if (values.building.length < 0 ) {errors.building = 'Enter valid building'}
      if (values.status.length < 0 ) {errors.status = 'Enter valid building'}
      if (values.automated_address_number < 0 ) {errors.automated_address_number = 'Enter valid automated_address_number'}
      if (values.id_number_nationality < 0 ) {errors.id_number_nationality = 'Enter valid automated_address_number'}

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
                            <div className='form-control m-4'> 
                                <h4 className='text-center'>User Information</h4>
                                <label htmlFor="full_name" className=' pb-1'> Name :</label>
                                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.full_name} type="text" id="full_name" name="full_name"placeholder=' Name'  className='form-control mb-3 '/>
                                {formikobj.errors.full_name && formikobj.touched.full_name ?<div className="alert alert-success" role="alert">{formikobj.errors.full_name}</div> :''}

                                <label htmlFor="Email" className=' pb-1'> Email :</label>
                                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.email} type="text" id="Email" name="email" placeholder='Ex : user@gmail.com'className='form-control mb-3' />
                                {formikobj.errors.email && formikobj.touched.email?<div className="alert alert-success" role="alert">{formikobj.errors.email}!</div> :''}

                                <label htmlFor="phone" className=' pb-1'> phone :</label>
                                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.phone} type="tel" id="phone" placeholder=' phone' name="phone" className='form-control mb-3' />
                                {formikobj.errors.phone && formikobj.touched.phone?<div className="alert alert-success" role="alert">{formikobj.errors.phone}</div> :''}

                                <label htmlFor="job_name" className=' pb-1'> job_name :</label>
                                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.job_name} type="tel" id="job_name" placeholder=' job_name' name="job_name" className='form-control mb-3' />

                                <label htmlFor="nationality_id" className=' pb-1'> nationality_id :</label>
                                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.nationality_id} type="text" id="nationality_id" name="nationality_id"className='form-control mb-3' placeholder=' nationality_id' />
                                {formikobj.errors.nationality_id&& formikobj.touched.nationality_id ?<div className="alert alert-success" role="alert">{formikobj.errors.nationality_id}!</div> :''}
                            </div>
                            <div>
                              
                            </div>
                           
                            <label htmlFor="city_id" className=' pb-1'> city_id :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.city_id} type="text" id="city_id" name="city_id" placeholder='Ex : city_id'className='form-control mb-3' />
                            {formikobj.errors.region_id && formikobj.touched.city_id?<div className="alert alert-success" role="alert">{formikobj.errors.city_id}!</div> :''}

                            <label htmlFor="region_id" className=' pb-1'> region_id :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.region_id} type="text" id="region_id" name="region_id" placeholder=' region_id' className='form-control mb-3'/>
                            {formikobj.errors.region_id && formikobj.touched.region_id?<div className="alert alert-success" role="alert">{formikobj.errors.region_id}!</div> :''}

                            <label htmlFor="piece_number" className=' pb-1'> piece_number :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.piece_number} type="text" id="piece_number" placeholder='piece_number' name="piece_number" className='form-control mb-3' />
                            {formikobj.errors.piece_number && formikobj.touched.piece_number?<div className="alert alert-success" role="alert">{formikobj.errors.piece_number}</div> :''}

                            <label htmlFor="street" className=' pb-1'> street :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.street} type="text" id="street" name="street"className='form-control mb-3' placeholder=' street' />
                            {formikobj.errors.street&& formikobj.touched.street ?<div className="alert alert-success" role="alert">{formikobj.errors.street}!</div> :''}

                            <label htmlFor="building" className=' pb-1'> building :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.building} type="text" id="building" name="building"placeholder=' building'  className='form-control mb-3 '/>
                            {formikobj.errors.building && formikobj.touched.building ?<div className="alert alert-success" role="alert">{formikobj.errors.building}</div> :''}

                            <label htmlFor="automated_address_number" className=' pb-1'> automated_address_number :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.automated_address_number} type="text" id="automated_address_number" name="automated_address_number" placeholder=' automated_address_number' className='form-control mb-3'/>
                            {formikobj.errors.automated_address_number && formikobj.touched.automated_address_number?<div className="alert alert-success" role="alert">{formikobj.errors.automated_address_number}!</div> :''}

                            <label htmlFor="status" className=' pb-1'> status :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.status} type="text" id="status" placeholder=' status' name="status" className='form-control mb-3' />
                            {formikobj.errors.status && formikobj.touched.status?<div className="alert alert-success" role="alert">{formikobj.errors.status}</div> :''}
                            
                            <label htmlFor="id_number_nationality" className=' pb-1'> id_number_nationality :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.id_number_nationality} type="text" id="id_number_nationality" placeholder=' id_number_nationality' name="id_number_nationality" className='form-control mb-3' />
                            {formikobj.errors.id_number_nationality && formikobj.touched.id_number_nationality?<div className="alert alert-success" role="alert">{formikobj.errors.id_number_nationality}</div> :''}
                            
                            <label htmlFor="password" className=' pb-1'> Password :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.password} type="password" id="password" name="password" placeholder=' Password' className='form-control mb-3'/>
                            {formikobj.errors.password && formikobj.touched.password?<div className="alert alert-success" role="alert">{formikobj.errors.password}!</div> :''}

                            <label htmlFor="password_confirmation" className=' pb-1'> RePassword :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.password_confirmation} type="password" id="password_confirmation" placeholder='Same Password' name="password_confirmation" className='form-control mb-3' />
                            {formikobj.errors.password_confirmation && formikobj.touched.password_confirmation?<div className="alert alert-success" role="alert">{formikobj.errors.password_confirmation}</div> :''}
                            <div className=' d-flex gap-4' > 
                              
                                <div className='w-50'>
                                  <label htmlFor="id_photo_nationality" className=' pb-1'> id_photo_nationality :</label>
                                  <input type="file" className='form-control mb-3 w-100' id="id_photo_nationality" name="id_photo_nationality" onChange={formikobj.handleChange} />
                                </div>
                                <div className='w-50'>
                                  <label htmlFor="personal_photo" className=' pb-1'> personal_photo:</label>
                                  <input type="file" className='form-control mb-3 w-100'/>                                  
                                </div>
                            </div>

                            <div className='d-flex justify-content-center'><button type= 'submit' disabled={ formikobj.isValid === false || formikobj.dirty === false} className='btn btn-outline-success w-50 my-4'  >
                                
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
  

//import React from 'react';

// const LoginPage = () => {
//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h1>CleanMyCar</h1>
//         <p>India's first waterless car cleaning company</p>
//         <form>
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" placeholder="joe@email.com" />
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" placeholder="Enter your Password" />
//           <a href="#">forgot password?</a>
//           <button type="submit">Login</button>
//         </form>
//         <p>Need help?</p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// .login-page {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background-color: #f5f5f5;
// }

// .login-container {
//   background-color: #fff;
//   padding: 30px;
//   border-radius: 5px;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
//   max-width: 400px;
// }

// h1 {
//   text-align: center;
//   margin-bottom: 10px;
// }

// p {
//   text-align: center;
//   margin-top: 10px;
//   color: #aaa;
// }

// form {
//   display: flex;
//   flex-direction: column;
//   margin-top: 20px;
// }

// label {
//   margin-bottom: 5px;
// }

// input[type="email"],
// input[type="password"] {
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 3px;
//   margin-bottom: 15px;
// }

// a {
//   text-align: right;
//   color: #aaa;
//   margin-bottom: 10px;
// }

// button {
//   background-color: #4CAF50;
//   color: white;
//   padding: 10px 15px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// }

// button:hover {
//   background-color: #3e8e41;
// }
