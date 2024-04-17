import { useFormik } from 'formik'
import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { InfinitySpin } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import desgin from './register.module.css'
import logo from '../image/White.png'
import font from '../Navbar/nav.module.css'
import $ from 'jquery'

// src\Register\Register fooor user



export default function Register() 
{

    $("#file1").on("change", function() {
      console.log(this.files.name);
      const fileName = this.files[0]?.name;
      const label = document.querySelector("label[for=file1]");
      label.innerText = fileName ?? "Choose File "
    })
  
$('#address').click(function(){
    $('#pesonal').addClass('d-none')
    $('#adress').removeClass('d-none')
  })
$('#personal1').click(function(){
  $('#adress').addClass('d-none')
  $('#pesonal').removeClass('d-none')
})  
$('#ident').click(function(){
  $('#adress').addClass('d-none')
  $('#identify').removeClass('d-none')
})
$('#last').click(function(){
  $('#identify').addClass('d-none')
  $('#safety').removeClass('d-none')
})
$('#before').click(function(){
  $('#identify').addClass('d-none')
  $('#adress').removeClass('d-none')
})
$('#sure').click(function(){
  $('#safety').addClass('d-none')
  $('#identify').removeClass('d-none')
})
let apiConutry = async ()=>
{
  return await axios.get("https://khdmah.online/api/countries");
}
let {data} =  useQuery("Allproduct", apiConutry , 
{
 // refetchOnMount:false ,
 //  refetchInterval : 2000 ,
   cacheTime:10000
 // enabled:false
 })

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
    checkBox :false,

  }
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
          setTimeout(() => {navigate('/ConfirmEmail')}, 500); 
        }
      } catch (error) 
      {
        
        console.log(error);
        toast.error("Error Occured : please try again with valid information")
      }
      setisloading(false)
    },
    validate : function (values) 
    { 

      const errors = {};
      // if (values.full_name.length < 4 || values.full_name.length > 10) { errors.full_name = 'Name Should be from 4 to 10'}
      // if (values.email.includes('@')===false ||values.email.includes('.') === false) { errors.email = 'E-mail is Invalid'}
      // if (!values.phone.match(/^(\01|01|00201)[0-2,5]{1}[0-9]{8}/)) {errors.phone = 'Enter Invalid Number'}
      // if (values.password.length < 6 || values.password.length > 12) {errors.password = 'Name Should be from 4 to 10'}
      // if (values.password_confirmation!== values.password) {errors.password_confirmation = `password and Reoassword dosn't match`}
      // if (values.nationality_id < 0 || !values.nationality_id > 300) {errors.nationality_id = 'Enter from range'}
      // if (values.city_id < 0 ) {errors.city_id = 'Enter valid city'}
      // if (values.piece_number < 0 ) {errors.piece_number = 'Enter valid piece_number'}
      // if (values.street.length < 0 ) {errors.street = 'Enter valid street with some details'}
      // if (values.building.length < 0 ) {errors.building = 'Enter valid building'}
      // if (values.status.length < 0 ) {errors.status = 'Enter valid building'}
      // if (values.automated_address_number < 0 ) {errors.automated_address_number = 'Enter valid automated_address_number'}
      // if (values.id_number_nationality < 0 ) {errors.id_number_nationality = 'Enter valid automated_address_number'}

      console.log(values)

      return errors
    }
  })

  return<>
  <div className='d-flex justify-content-center align-items-center'>
    
    <form className={desgin.form_container} onSubmit={formikobj.handleSubmit}>
        <div className={desgin.logo_container }>
            <img className={desgin.logo_container +' p-2'} src={logo} />
        </div>
        <div className={desgin.title_container}>
          <p className={desgin.title+" "+ font.font2 + ' ' + desgin.colTeal}>تسجيل حساب جديد </p>
          <span className={desgin.subtitle}>ابدا في حسابك معنا و استكشف العديد من المزايا بالتطبيق </span>
        </div>
      <div id='pesonal' className='w-100 p-2'>
        <h5 className={ desgin.input_label + font.font2 +  ' text-center fs-3 text-dark'}>المعلومات الشخصية</h5>
      <div className={desgin.input_container}>
        <i className={desgin.icon +" fa-regular fa-user pb-4"}></i>
        <label className={desgin.input_label} htmlFor="name_field">Name</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.full_name}  placeholder="Name" title="Inpit name" name="full_name" type="text" className={desgin.input_field} id="name_field"/>
      </div>
      <div className={desgin.input_container}>
        <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className={desgin.icon}>
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
          <path strokeLinejoin="round" strokeWidth="1.5" stroke="#141B34" d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
        </svg>
        <label className={desgin.input_label} htmlFor="email_field">Email</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.email}  placeholder="name@mail.com" title="Inpit title" name="email" type="text" className={desgin.input_field} id="email_field"/>
      </div>
      <div className={desgin.input_container}>
        {/* <i className={desgin.icon+" fa-solid fa-phone"}></i> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 32 32" height="32" fill="none" className={desgin.icon}>
          <path strokeWidth="2" strokeLinecap="round" stroke="black" fillRule="evenodd" d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z" clipRule="evenodd">
          </path>
        </svg>
        <label className={desgin.input_label} htmlFor="phone_field">Phone</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.phone}  placeholder="Phone" title="Inpit phone" name="phone" type="text" className={desgin.input_field} id="email_field"/>
      </div>
      <div className={desgin.input_container}>
        <i className={desgin.icon + " fa-solid fa-earth-asia pb-4"}></i>
        <label className={desgin.input_label} htmlFor="Nationality_field">Nationality</label>
        {/* <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.nationality_id}  placeholder="name@mail.com" title="Inpit title" name="email" type="text" className={desgin.input_field} id="email_field"/> */}
        <div className=' w-100' id="company_type">
                              <select onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.nationality_id} id='nationality_id' name='nationality_id' required className={desgin.input_field + " w-100 "}>
                                <option>.. </option>
                               {
                                data?.data?.data.map(function(item,index)
                                {
                                  return <option value={ item.id} key={index}>{item.nationality_en}</option> 
                                })
                               }
                              </select>
                            </div>
      </div>
      <div className={desgin.input_container}>
      <svg className={desgin.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="22" height="18" rx="2" ry="2" />
      </svg>
        <label className={desgin.input_label} htmlFor="work_field">Jop Name</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.job_name} placeholder="Work" title="Inpit work" name="job_name" type="text" className={desgin.input_field} id="work_field"/>
      </div>
      

      <button type='button' id='address' title="Next"className={desgin.sign_in_btn + " w-25"}>
        <i className="fa-solid fa-angle-left"></i>
      </button>  
      
      </div>
      {/* adress =====================================*/}
      <div id='adress' className={desgin.shad +  ' w-100 p-5 rounded-4 mt-5 d-none'}>
        <h5 className={ desgin.input_label + font.font2 +  ' text-center fs-4 text-dark'}> تفاصيل العنوان</h5>
        <div className={ desgin.input_container }>
                              <label htmlFor="city_id" className={desgin.input_label}>City :</label>
                              <select name='city_id'  required id="city_id" className={desgin.input_field + ' w-100 ps-3  '} onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.city_id}>
                                  <option value={'0'}>.. </option>
                                  <option value={'1'}>الأحمدي </option>
                                  <option value={'2'}>حولي </option>
                                  <option value={'3'}>الفروانيه </option>
                                  <option value={'4'}>العاصمه</option>
                                  <option value={'5'}>مبارك الكبيره </option>
                              </select>
          </div>
      <div className={desgin.input_container}>
        
        <label className={desgin.input_label } htmlFor="piece_number_field">Piece Number</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.piece_number}  placeholder="piece_number" title="Inpit piece_number" name="piece_number" type="text" className={desgin.input_field + ' ps-3'} id="piece_number_field"/>
      </div>
      <div className={desgin.input_container}>
        {/* <i className={desgin.icon+" fa-solid fa-phone"}></i> */}
       
        <label className={desgin.input_label} htmlFor="street_field">Street</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.street}  placeholder="street" title="Inpit street" name="street" type="text" className={desgin.input_field+ ' ps-3'} id="street_field"/>
      </div>
    
      <div className={desgin.input_container}>
      
        <label className={desgin.input_label} htmlFor="building_field">Building</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.building} placeholder="building" title="Inpit building" name="building" type="text" className={desgin.input_field + ' ps-3'} id="building_field"/>
      </div>
      <div className={desgin.input_container}>
      
        <label className={desgin.input_label} htmlFor="automated_address_number_field">Automated Address Number</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.automated_address_number} placeholder="Automated Address Number" title="Inpit automated_address_number" name="automated_address_number" type="text" className={desgin.input_field + ' ps-3'} id="automated_address_number_field"/>
      </div>
      

        <button type='button' id='ident' title="sure"  className={desgin.sign_in_btn + " w-25"}>
        <i className="fa-solid fa-angle-left"></i>        </button>  
        <button type='button' id='personal1' title="person"className={desgin.sign_in_btn + " w-25 ms-5"}>
        <i className="fa-solid fa-angle-right"></i>      </button> 
      </div>
      {/**=========identtttttt======================================== */}
      <div id='identify' className={' w-100 p-2 rounded-4 mt-5 d-none'}>
        <h5 className={ desgin.input_label + font.font2 +  ' text-center fs-4 text-dark'}> تأكيد الهوية </h5>
       
      <div className={desgin.input_container}>
        
        <label className={desgin.input_label } htmlFor="id_number_nationality_field">Id Number Nationality</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.id_number_nationality}  placeholder="id number nationality" title="Inpit id_number_nationality" name="id_number_nationality" type="text" className={desgin.input_field + ' ps-3'} id="id_number_nationality_field"/>
      </div>
      <div className={desgin.input_container}>
        {/* <i className={desgin.icon+" fa-solid fa-phone"}></i> */}
       
        <label className={desgin.input_label} htmlFor="status_field">Status</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.status}  placeholder="status" title="Inpit status" name="status" type="text" className={desgin.input_field+ ' ps-3'} id="status_field"/>
      </div>


        <div className={desgin.input_container }>
            <div className={' w-75 '}>
              <label className={desgin.input_label } htmlFor="id_photo_nationality_field">Photo Nationality</label>
              <div className="input_container">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className={desgin.icon +' pb-5 mb-2 ms-5' }>
                          <polyline points="16 16 12 12 8 16"></polyline>
                              <line y2="21" x2="12" y1="12" x1="12"></line>
                              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                            <polyline points="16 16 12 12 8 16">
                          </polyline>
                      </svg>
              <label id='label1' htmlFor="file1" className="btn bg-white w-100 ">
                {
                  formikobj.values.id_photo_nationality ? <p className='mb-0 ps-5'>{formikobj.values.id_photo_nationality}</p> : <p className='mb-0 pe-5 me-5'>Choose a file</p>
                }
              </label>
                <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.id_photo_nationality} className='d-none' name='id_photo_nationality' id="file1" type="file"/>    
            </div>
            </div>
            {/*---------------------------------------------------------------*/}
            <div className={desgin.input_container+ ' w-100'}>
              <label className={desgin.input_label  } htmlFor="personal_photo_field">Personal Photo</label>
              <div className="input_container">
                
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className={desgin.icon + '  ms-5' }>
                            <polyline points="16 16 12 12 8 16"></polyline>
                                <line y2="21" x2="12" y1="12" x1="12"></line>
                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                              <polyline points="16 16 12 12 8 16">
                            </polyline>
                        </svg>
                <label id='label2' htmlFor="file2" className="btn bg-white w-75">
                  {
                    formikobj.values.personal_photo ? <p className='mb-0 ps-5'> {formikobj.values.personal_photo.name} </p> : <p className='mb-0 pe-5 me-5'>Choose a file</p>
                  }
                </label> */}
                  <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.personal_photo} className='bg-white p-1 rounded-5 ps-5' name='personal_photo' id="file2" type="file"/>    
              </div>
            </div>
        </div>
        <button id='last' title="LAst" type='button'  className={desgin.sign_in_btn + " w-25"}>
        <i className="fa-solid fa-angle-left"></i>      </button>    
      <button id='before' type='button' title="Next"className={desgin.sign_in_btn + " w-25 ms-5"}>
      <i className="fa-solid fa-angle-right"></i>      </button>              
      </div>
      {/*--------------saaaaaaaaaaafty---------------*/}
      <div id='safety' className={desgin.shad +  ' w-100 p-5 rounded-4 mt-5 d-none'}>
        <h5 className={ desgin.input_label + font.font2 +  ' text-center fs-4 text-dark'}> الأمــان</h5>
      <div className={desgin.input_container}>
      
        <label className={desgin.input_label } htmlFor="password">Password</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.password}  placeholder="Password" title="Inpit password" name="password" type="text" className={desgin.input_field + ' ps-3'} id="password_field"/>
      
      </div>


      
      <div className={desgin.input_container}>
       
        <label className={desgin.input_label} htmlFor="password_confirmation_field">Re-Password</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.password_confirmation}  placeholder="Password Shoud be Match" title="Inpit password_confirmation" name="password_confirmation" type="text" className={desgin.input_field+ ' ps-3'} id="password_confirmation_field"/>
      </div>
        <div className="form-check d-flex gap-3 mt-4">
          <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.checkBox} type="checkbox" className='form-check-input' name='checkBox' id='checkBox' />
          <p>Agree of <a href="https://www.khedmah.site/terms-of-use" className='text-decoration-none text-dark fw-bold'>Usage policy</a> and <a href="https://www.khedmah.site/terms-of-use" className=' text-decoration-none text-dark fw-bold'>terms of use</a></p>
        </div>  
        
        <button title="Sign In" type= 'submit' disabled={ (formikobj.isValid === false || formikobj.dirty === false) && formikobj.values.checkBox === false } className={desgin.sign_in_btnn + " w-25"}>
        <span className={font.font2 + ' fw-bold '}> Sign Up</span>
      </button> 
      <button id='sure' type='button' title="sure" className={desgin.sign_in_btn + " w-25 ms-5"}>
      <i className="fa-solid fa-angle-right"></i>      </button>    
      </div>
  </form>
</div>
</>
}
  

