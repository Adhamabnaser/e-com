import { useFormik } from 'formik'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import $ from 'jquery'
export default function RegCompany() {
  
  const [errMsg ,seterrMsg] =useState(null);
  const [successMsg ,setsuccessMsg] =useState(null);
  const [isloading , setisloading] = useState(false)
  const navigate =  useNavigate()
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
// apiConutry()


  let userCompany = 
  {//-----m3lomat 
    first_name :"",
    last_name :"",
    nationality_id :"",//----
    phone :"",
    id_number :"",
    date_of_birth :"",
    //----------- address
    company_logo :"",
    company_name :"",
    company_phone :"",
    company_email :"",
    url :"",
    company_type :"",
    //===
    city_id :"",
    street :"",
    piece_number :"",
    building :"",
    automated_address_number :"",
    //===
    commercial_registration_number :"",
    tax_number :"",
    license_number :"",
    unified_number :"",
    commercial_license :"",
    articles_of_association :"",
    signature_authorization :"",
    signatureـofficial :"",
    //--------- bank
    bank_account_name :"",
    account_number :"",
    iban :"",
    //---------- sefety
    password :"",
    password_confirmation :"",
    //------------id
    identity_confirmation :'',
    passport_image :"",
    front_side_id_image :"",
    back_side_id_image :"",
    // --------------
    user_type :"company",
    checkBox :false,
  }

  const formikobj =  useFormik({
    initialValues: userCompany,
    onSubmit: async(values) => 
    {
      try {
        setisloading(true)
        const {data} = await axios.post('https://khdmah.online/api/register/company', values)

        // const x = await axios.get("https://khdmah.online/api/countries");
        // console.log(x);
        // if (data.message === 'success') 
        // {
            setsuccessMsg('Account is aready created')
            // setTimeout(() => {navigate('/product')}, 500); 
          // }
        } catch (error) {
          console.log(error);
          // seterrMsg()
          setisloading(false)
      }

    },
    validate : function (values) 
    { 

      const errors = {};
      if (values.last_name.length < 4 || values.last_name.length > 10) { errors.last_name = 'Name Should be from 4 to 10'}
      if (values.first_name.length < 4 || values.first_name.length > 10) { errors.last_name = 'Name Should be from 4 to 10'}
      // if (values.nationality_id < 0 ) { errors.nationality_id = 'nationality_id filled';}
      if (values.id_number < 0 ) {  errors.id_number = 'Enter valid id_number'}
      if (!values.phone.match(/^(\01|01|00201)[0-2,5]{1}[0-9]{8}/)) {errors.phone = 'Enter Invalid Number'}
      if (!values.date_of_birth.match( /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {errors.date_of_birth = 'Enter Invalid date_of_birth'}
      //--------------
      // if (values.company_logo.includes('.') === false) { errors.email = 'company_logo is Invalid'}
      if (values.company_name.length < 2 || values.first_name.length > 20) { errors.company_name = 'Name Should be from 2 to 20'}
      if (!values.company_phone.match(/^(\01|01|00201)[0-2,5]{1}[0-9]{8}/)) {errors.company_phone = 'Enter Invalid Number'}
      if (values.company_email.includes('@')===false ||values.company_email.includes('.') === false) { errors.company_email = 'E-mail is Invalid'}
      if (values.company_type === '..') {errors.company_type = 'Enter valid company_type'}
      //--------------
      if (values.city_id === '..') {errors.city_id = 'Enter valid city_id'}
      if (values.street === '..') {errors.street = 'Enter valid street'}
      if (values.piece_number === '..') {errors.piece_number = 'Enter valid piece_number'}
      if (values.building === '..') {errors.building = 'Enter valid building'}
      if (values.automated_address_number === '..') {errors.automated_address_number = 'Enter valid building'}
      //--------- 
      if (values.commercial_registration_number === '..') {errors.commercial_registration_number = 'Enter valid commercial_registration_number'}
      if (values.tax_number === '..') {errors.tax_number = 'Enter valid tax_number'}
      if (values.license_number === '..') {errors.license_number = 'Enter valid license_number'}
      if (values.unified_number === '..') {errors.unified_number = 'Enter valid unified_number'}
      //----------
      if(values.password.length < 6 || values.password.length > 12) {errors.password = 'Name Should be from 4 to 10'}
      if(values.password_confirmation !== values.password) {errors.password_confirmation = 'passwords do not match'}
      //----------
      if (values.bank_account_name === '..') {errors.bank_account_name = 'Enter valid bank_account_name'}
      if (values.account_number === '..') {errors.account_number = 'Enter valid account_number'}
      if (values.iban === '..') {errors.iban = 'Enter valid Iban'}
      //----------
      if (values.checkBox === true) {errors.checkBox = 'Accept terms and conditions'}
      console.log(errors)
      seterrMsg(null)

      return errors
    }
  })
     
  return<>
            <form className='container' onSubmit={formikobj.handleSubmit}>
            {errMsg? <div className="alert alert-danger text-center">{errMsg}</div>: ''}
            {successMsg? <div className="alert alert-success text-center">{successMsg}</div>: ''}
                            <h2 className='mt-5 text-success text'>Register for company Now : </h2>
                            <div className='form-control mb-4'>
                              
                            <label htmlFor="first_name" className=' pb-1'>Frist Name :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.first_name} type="text" id="first_name" name="first_name"placeholder=' first_name'  className='form-control mb-3 '/>
                            {formikobj.errors.first_name && formikobj.touched.first_name?<div className="alert alert-success" role="alert">{formikobj.errors.first_name}</div> :''}

                            <label htmlFor="last_name" className=' pb-1'>Last Name :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.last_name} type="text" id="last_name" name="last_name"placeholder=' last_name'  className='form-control mb-3 '/>
                            {formikobj.errors.last_name && formikobj.touched.last_name ?<div className="alert alert-success" role="alert">{formikobj.errors.last_name}</div> :''}
                            
                            <label htmlFor="phone" className=' pb-1'> Phone :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.phone} type="tel" id="phone" name="phone"className='form-control mb-3' placeholder=' Number' />
                            {formikobj.errors.phone&& formikobj.touched.phone ?<div className="alert alert-success" role="alert">{formikobj.errors.phone}!</div> :''}
                            
                            <label htmlFor="nationality_id" className=' pb-1'>nationality_id :</label>
                            <div className='form-control bg-light' id="company_type">
                              <select onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.nationality_id} id='nationality_id' name='nationality_id' required className=' form-select m-2 w-100'>
                                <option>.. </option>
                               {
                                data?.data?.data.map(function(item,index)
                                {
                                  // if ($("#nationality_idd").val()) 
                                  // {
                                  //   return <option selected key={index}>{item.id}</option>
                                  // }else{
                                  //  return <option key={index}>{item.id}</option>
                                  // }
                                  return <option value={ item.id} key={index}>{item.nationality_en}</option> 
                                })
                               }
                              </select>
                            </div>
                            {console.log(formikobj.values)}
                            <label htmlFor="id_number" className=' pb-1'>id_number :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={ formikobj.values.id_number} type="text" id="id_number" name="id_number"placeholder=' id_number'  className='form-control mb-3 '/>
                            {formikobj.errors.id_number && formikobj.touched.id_number?<div className="alert alert-success" role="alert">{formikobj.errors.id_number}</div> :''}

                            <label htmlFor="date_of_birth" className=' pb-1'> Birth Date :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.date_of_birth} type="date" id="date_of_birth" name="date_of_birth"placeholder=' date_of_birth'  className='form-control mb-3 '/>
                            {formikobj.errors.date_of_birth && formikobj.touched.date_of_birth?<div className="alert alert-success" role="alert">{formikobj.errors.date_of_birth}</div> :''}
                            {/*---------------------------------------------------------------------------------------------- */}
                            </div>
                            <div className='form-control mb-4'>
                              
                            <label htmlFor="company_logo" className=' pb-1'> company_logo :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.company_logo} type="file" id="company_logo" name="company_logo" placeholder='Ex : user@gmail.com'className='form-control mb-3' />
                            {formikobj.errors.company_logo && formikobj.touched.company_logo?<div className="alert alert-success" role="alert">{formikobj.errors.company_logo}!</div> :''}

                            <label htmlFor="company_name" className=' pb-1'> company_name :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.company_name} type="text" id="company_name" name="company_name" placeholder=' company_name' className='form-control mb-3'/>
                            {formikobj.errors.company_name && formikobj.touched.company_name?<div className="alert alert-success" role="alert">{formikobj.errors.company_name}!</div> :''}
                            
                            <label htmlFor="company_phone" className=' pb-1'> company_phone :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.company_phone} type="tel" id="company_phone" name="company_phone"className='form-control mb-3' placeholder=' Number' />
                            {formikobj.errors.company_phone&& formikobj.touched.company_phone ?<div className="alert alert-success" role="alert">{formikobj.errors.company_phone}!</div> :''}
                            
                            <label htmlFor="company_email" className=' pb-1'> company_email :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.company_email} type="email" id="company_email" placeholder='Same Password' name="company_email" className='form-control mb-3' />
                            {formikobj.errors.company_email && formikobj.touched.company_email?<div className="alert alert-success" role="alert">{formikobj.errors.company_email}</div> :''}
                            
                            <label htmlFor="url" className=' pb-1'> url :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.url} type="url" id="url" placeholder='Same Password' name="url" className='form-control mb-3' />
                            
                            <label htmlFor="company_type" className=' pb-1'> company_type :</label>
                            <div className='form-control bg-light' id="company_type">
                              <select required className=' form-select m-2 w-50'>
                                <option value={''}>.. </option>
                                <option value={'recruitment'}>recruitment </option>
                                <option value={'cleaning'}>cleaning</option>
                              </select>
                            </div>
                            {formikobj.errors.company_type && formikobj.touched.company_type?<div className="alert alert-success" role="alert">{formikobj.errors.company_type}</div> :''}

                            </div>
                            {/*---------------------------------------------------------------------------------------------- */}
                            <div className='form-control my-4'>
                              
                            <div className='form-control my-4'>
                              <label htmlFor="city_id" className=' pb-1'> city_id :</label>
                              <select required id="city_id" className=' form-select m-2 w-100 bg-light'>
                                <option value={''}>.. </option>
                                <option value={'الأحمدي'}>الأحمدي </option>
                                <option value={'حولي'}>حولي </option>
                                <option value={'الفروانيه'}>الفروانيه </option>
                                <option value={'العاصمه'}>العاصمه</option>
                                <option value={'مبارك الكبيره'}>مبارك الكبيره </option>
                              </select>
                              {formikobj.errors.city_id && formikobj.touched.city_id?<div className="alert alert-success" role="alert">{formikobj.errors.city_id}!</div> :''}
                            </div>
                            <label htmlFor="street" className=' pb-1'> street :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.street} type="text" id="street" placeholder='street' name="street" className='form-control mb-3' />
                            {formikobj.errors.street && formikobj.touched.street?<div className="alert alert-success" role="alert">{formikobj.errors.street}!</div> :''}

                            <label htmlFor="piece_number" className=' pb-1'> piece_number :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.piece_number} type="text" id="piece_number" placeholder='Same Password' name="piece_number" className='form-control mb-3' />
                            {formikobj.errors.piece_number && formikobj.touched.piece_number?<div className="alert alert-success" role="alert">{formikobj.errors.piece_number}!</div> :''}

                            <label htmlFor="building" className=' pb-1'> building :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.building} type="text" id="building" placeholder='building' name="building" className='form-control mb-3' />
                            {formikobj.errors.building && formikobj.touched.building?<div className="alert alert-success" role="alert">{formikobj.errors.building}!</div> :''}

                            <label htmlFor="automated_address_number" className=' pb-1'> automated_address_number :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.automated_address_number} type="file" id="automated_address_number" placeholder=' automated_address_number' name="automated_address_number" className='form-control mb-3' />
                            {formikobj.errors.automated_address_number && formikobj.touched.automated_address_number?<div className="alert alert-success" role="alert">{formikobj.errors.automated_address_number}!</div> :''}
                            </div>
                            {/*---------------------------------------------------------------------------------------------- */}
                            <div className='form-control my-4'>
                              
                            <label htmlFor="commercial_registration_number" className=' pb-1'> commercial_registration_number :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.commercial_registration_number} type="text" id="commercial_registration_number" placeholder='commercial_registration_number' name="company_email" className='form-control mb-3' />
                            {formikobj.errors.commercial_registration_number && formikobj.touched.commercial_registration_number?<div className="alert alert-success" role="alert">{formikobj.errors.commercial_registration_number}</div> :''}

                            <label htmlFor="tax_number" className=' pb-1'> tax_number :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.tax_number} type="text" id="tax_number" placeholder=' tax_number' name="tax_number" className='form-control mb-3' />
                            {formikobj.errors.tax_number && formikobj.touched.tax_number?<div className="alert alert-success" role="alert">{formikobj.errors.tax_number}</div> :''}

                            <label htmlFor="license_number" className=' pb-1'> license_number :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.license_number} type="text" id="license_number" placeholder=' license_number' name="license_number" className='form-control mb-3' />
                            {formikobj.errors.license_number && formikobj.touched.license_number?<div className="alert alert-success" role="alert">{formikobj.errors.license_number}</div> :''}

                            <label htmlFor="unified_number" className=' pb-1'> unified_number :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.unified_number} type="text" id="unified_number" placeholder='unified_number' name="unified_number" className='form-control mb-3' />
                            {formikobj.errors.unified_number && formikobj.touched.unified_number?<div className="alert alert-success" role="alert">{formikobj.errors.unified_number}</div> :''}

                           <div className='form-control my-4 '>
                            <div className='d-flex gap-4'>
                              <div className='w-100'> 
                                
                                <label htmlFor="commercial_license" className=' pb-1'> commercial_license :</label>
                                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.commercial_license} type="file" id="commercial_license" placeholder=' commercial_license' name="commercial_license" className='form-control mb-3' />
                            
                              </div>
                              <div className='w-100'>
                                
                                <label htmlFor="articles_of_association" className=' pb-1'> articles_of_association :</label>
                                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.articles_of_association} type="file" id="articles_of_association" placeholder=' articles_of_association' name="articles_of_association" className='form-control mb-3' />
                              
                              </div>
                              
                            </div>
                            <div className='d-flex gap-4'>
                                <div className='w-100'>
                                  
                                      <label htmlFor="signature_authorization" className=' pb-1'> signature_authorization :</label>
                                      <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.signature_authorization} type="file" id="signature_authorization" placeholder=' signature_authorization' name="signature_authorization" className='form-control mb-3' />
                                    
                                </div>
                                <div className='w-100'>
                                  
                                    <label htmlFor="signatureـofficial" className=' pb-1'> signatureـofficial :</label>
                                    <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.signatureـofficial} type="file" id="signatureـofficial" placeholder=' signatureـofficial' name="signatureـofficial" className='form-control mb-3' />
                                  
                                </div>
                            </div>
                           </div>
                            </div>
                            {/*---------------------------------------------------------------------------------------------- */}
                            <div className='form-control my-4'>

                                <label htmlFor="password" className=' pb-1'> password :</label>
                                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.password} type="password" id="password" placeholder=' password' name="password" className='form-control mb-3' />
                                {formikobj.errors.password && formikobj.touched.password?<div className="alert alert-success" role="alert">{formikobj.errors.password}</div> :''}

                                <label htmlFor="password_confirmation" className=' pb-1'> password_confirmation :</label>
                                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.password_confirmation} type="password" id="password_confirmation" placeholder=' password_confirmation' name="password_confirmation" className='form-control mb-3' />
                                {formikobj.errors.password_confirmation && formikobj.touched.password_confirmation?<div className="alert alert-success" role="alert">{formikobj.errors.password_confirmation}</div> :''}

                            </div>
                            {/*---------------------------------------------------------------------------------------------- */}
                            <div className='form-control my-4'>
                              
                                <label htmlFor="bank_name" className=' pb-1'> bank_name :</label>
                                  <select id="bank_name" className=' form-select  w-100 bg-light'>
                                    <option value={''}>.. </option>
                                  </select>  
                              
                                <label htmlFor="bank_account_name" className=' pb-1'> bank_account_name :</label>
                                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.bank_account_name} type="text" id="bank_account_name" placeholder=' bank_account_name' name="bank_account_name" className='form-control mb-3' />
                                {formikobj.errors.bank_account_name && formikobj.touched.bank_account_name?<div className="alert alert-success" role="alert">{formikobj.errors.bank_account_name}</div> :''}

                                <label htmlFor="account_number" className=' pb-1'> account_number :</label>
                                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.account_number} type="text" id="account_number" placeholder=' account_number' name="account_number" className='form-control mb-3' />
                                {formikobj.errors.account_number && formikobj.touched.account_number?<div className="alert alert-success" role="alert">{formikobj.errors.account_number}</div> :''}

                                <label htmlFor="iban" className=' pb-1'> iban :</label>
                                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.iban} type="text" id="iban" placeholder=' iban' name="iban" className='form-control mb-3' />
                                {formikobj.errors.iban && formikobj.touched.iban?<div className="alert alert-success" role="alert">{formikobj.errors.iban}</div> :''}

                            </div>
                            <div className='form-control my-4'>
                              <label htmlFor="identity_confirmation" className=' pb-1'> identity_confirmation_about :</label>
                              <div className='form-control my-4'>
                                <div className='d-flex gap-4'>
                                  <div className='d-flex gap-2'>
                                    <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} defaultChecked type="radio" name='typeID' value='pass' id='pass'/> 
                                    <label htmlFor="identity_confirmation" id='identity' className='pb-1'>pass</label>
                                  </div>
                                  <div className='d-flex gap-2'>
                                      <input  onChange={formikobj.handleChange} onBlur={formikobj.onBlur} type="radio"  name='typeID' value='card_Id'/>
                                  <label htmlFor="identity_confirmation" className=' pb-1'> card_Id </label>
                                  </div>
                                </div>
                                {
                                  console.log(formikobj.values.typeID)
                                }
                                {/**----------------------------- ***************/}


                                {formikobj.values.typeID === 'card_Id' ? <>
                                <div className='form-conrtol my-4'>
                                  <div className='d-flex gap-4'>
                                            <div className='w-50'>
                                              <label htmlFor="front_side_id_image" id='front_side_id_image' className='pb-1'>front_side_id_image</label>                                    
                                              <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.front_side_id_image} type="file" id="front_side_id_image" placeholder=' front_side_id_image' name="front_side_id_image" className='form-control mb-3 '/>
                                            </div>
                                            <div className='w-50'>
                                              <label htmlFor="back_side_id_image" id='back_side_id_image' className='pb-1'>back_side_id_image</label>
                                              <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.back_side_id_image} type="file" id="back_side_id_image" placeholder=' back_side_id_image' name="back_side_id_image" className='form-control mb-3' />
                                            </div>
                                      </div>
                                  </div> 
                         
                                </> 
                                : 
                                <>
                                      <div className='form-conrtol my-4'>
                                        <label htmlFor="passport_image" id='passport_image' className='pb-1'>passport_image</label>
                                        <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.passport_image} type="file" id="passport_image" placeholder=' ibpassport_imagean' name="passport_image" className='form-control mb-3' />                                    
                                      </div>
                                </>
                                }



                                {/* <div className='form-conrtol my-4'>
                                  <div className='d-flex gap-4'>
                                      {
                                        formikobj.values.typeID === 'card_Id' ?<>
                                        
                                            <div className='w-50'>
                                              <label htmlFor="front_side_id_image" id='front_side_id_image' className='pb-1'>front_side_id_image</label>                                    
                                              <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.front_side_id_image} type="file" id="front_side_id_image" placeholder=' front_side_id_image' name="front_side_id_image" className='form-control mb-3 '/>
                                            </div>
                                            <div className='w-50'>
                                              <label htmlFor="back_side_id_image" id='back_side_id_image' className='pb-1'>back_side_id_image</label>
                                              <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.back_side_id_image} type="file" id="back_side_id_image" placeholder=' back_side_id_image' name="back_side_id_image" className='form-control mb-3' />
                                            </div>
                                        </> : ''
                                      }
                                      </div>
                                      
                                  <div > 
                                    {
                                      formikobj.values.typeID === 'pass' ?<>
                                      <div>
                                        
                                      <label htmlFor="passport_image" id='passport_image' className='pb-1'>passport_image</label>
                                      <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.passport_image} type="file" id="passport_image" placeholder=' ibpassport_imagean' name="passport_image" className='form-control mb-3' />                                    
                                      </div>
                                      </> : ''
                                    }
                                  </div>
                                </div> */}
                              </div>

                            </div>
                            {console.log(formikobj.values.typeID)}
                            <div className='form-control my-4 aa'>
                              <div className="form-check d-flex gap-3">
                                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.checkBox} type="checkbox" className='form-check-input' id='checkBox' />
                                <p>Agree of <a href="https://www.khedmah.site/terms-of-use" className='text-decoration-none text-dark fw-bold'>Usage policy</a> and <a href="https://www.khedmah.site/terms-of-use" className=' text-decoration-none text-dark fw-bold'>terms of use</a></p>
                              </div>
                            </div>
                            <div className='d-flex justify-content-center'><button type= 'submit' disabled={ (formikobj.isValid === false || formikobj.dirty === false) && formikobj.values.checkBox === false } className='btn btn-outline-success m-5 w-25'  >
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
