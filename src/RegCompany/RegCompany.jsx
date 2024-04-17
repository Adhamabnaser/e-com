import { useFormik } from 'formik'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import logo from '../image/White.png'
import font from '../Navbar/nav.module.css' 
import $ from 'jquery'
import desgin from '../Register/register.module.css'


export default function RegCompany() {

  $("#file1").on("change", function() {
    console.log(this.files.name);
    const fileName = this.files[0]?.name;
    const label = document.querySelector("label[for=file1]");
    label.innerText = fileName ?? "Choose File "
  })

$('#toCompanyInfo').click(function(){
  $('#Personal').addClass('d-none')
  $('#companyInfo').removeClass('d-none')
})
$('#backPersonal').click(function(){
  $('#companyInfo').addClass('d-none')
  $('#Personal').removeClass('d-none')
}) 
$('#toAddress').click(function(){
  $('#companyInfo').addClass('d-none')
  $('#Address').removeClass('d-none')
}) 
$('#backCompanyInfo').click(function(){
  $('#Address').addClass('d-none')
  $('#companyInfo').removeClass('d-none')
}) 
$('#toCommercial').click(function(){
  $('#Address').addClass('d-none')
  $('#commercial').removeClass('d-none')
})   
$('#backAddress').click(function(){
  $('#commercial').addClass('d-none')
  $('#Address').removeClass('d-none')
})   
$('#toBankAccountInfo').click(function(){
  $('#commercial').addClass('d-none')
  $('#bankAccountInfo').removeClass('d-none')
}) 
$('#backCommercial').click(function(){
  $('#bankAccountInfo').addClass('d-none')
  $('#commercial').removeClass('d-none')
}) 
$('#toIdentify').click(function(){
  $('#bankAccountInfo').addClass('d-none')
  $('#identify').removeClass('d-none')
}) 
$('#backBankAccountInfo').click(function(){
  $('#identify').addClass('d-none')
  $('#bankAccountInfo').removeClass('d-none')
}) 

$('#toSafety').click(function(){
  $('#identify').addClass('d-none')
  $('#safety').removeClass('d-none')
}) 
$('#backIdentify').click(function(){
  $('#safety').addClass('d-none')
  $('#identify').removeClass('d-none')
}) 



  const [errMsg, seterrMsg] = useState(null);
  const [successMsg, setsuccessMsg] = useState(null);
  const [isloading, setisloading] = useState(false)
  const navigate = useNavigate()
  let apiConutry = async () => {
    return await axios.get("https://khdmah.online/api/countries");
  }
  let { data } = useQuery("Allproduct", apiConutry,
    {
      // refetchOnMount:false ,
      //  refetchInterval : 2000 ,
      cacheTime: 10000
      // enabled:false
    })
  // apiConutry()


  let userCompany =
  {//-----m3lomat 
    first_name: "",
    last_name: "",
    nationality_id: "",//----
    phone: "",
    id_number: "",
    date_of_birth: "",
    //----------- address
    company_logo: "",
    company_name: "",
    company_phone: "",
    company_email: "",
    url: "",
    company_type: "",
    //===
    city_id: "",
    street: "",
    piece_number: "",
    building: "",
    automated_address_number: "",
    //===
    commercial_registration_number: "",
    tax_number: "",
    license_number: "",
    unified_number: "",
    commercial_license: "",
    articles_of_association: "",
    signature_authorization: "",
    signatureـofficial: "",
    //--------- bank
    bank_account_name: "",
    account_number: "",
    iban: "",
    //---------- sefety
    password: "",
    password_confirmation: "",
    //------------id
    identity_confirmation: '',
    passport_image: "",
    front_side_id_image: "",
    back_side_id_image: "",
    // --------------
    user_type: "company",
    checkBox: false,
  }

  const formikobj = useFormik({
    initialValues: userCompany,
    onSubmit: async (values) => {
      try {
        setisloading(true)
        const { data } = await axios.post('https://khdmah.online/api/register/company', values)

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
    validate: function (values) {

      const errors = {};
      if (values.last_name.length < 4 || values.last_name.length > 10) { errors.last_name = 'Name Should be from 4 to 10' }
      if (values.first_name.length < 4 || values.first_name.length > 10) { errors.last_name = 'Name Should be from 4 to 10' }
      // if (values.nationality_id < 0 ) { errors.nationality_id = 'nationality_id filled';}
      if (values.id_number < 0) { errors.id_number = 'Enter valid id_number' }
      if (!values.phone.match(/^(\01|01|00201)[0-2,5]{1}[0-9]{8}/)) { errors.phone = 'Enter Invalid Number' }
      if (!values.date_of_birth.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) { errors.date_of_birth = 'Enter Invalid date_of_birth' }
      //--------------
      // if (values.company_logo.includes('.') === false) { errors.email = 'company_logo is Invalid'}
      if (values.company_name.length < 2 || values.first_name.length > 20) { errors.company_name = 'Name Should be from 2 to 20' }
      if (!values.company_phone.match(/^(\01|01|00201)[0-2,5]{1}[0-9]{8}/)) { errors.company_phone = 'Enter Invalid Number' }
      if (values.company_email.includes('@') === false || values.company_email.includes('.') === false) { errors.company_email = 'E-mail is Invalid' }
      if (values.company_type === '..') { errors.company_type = 'Enter valid company_type' }
      //--------------
      if (values.city_id === '..') { errors.city_id = 'Enter valid city_id' }
      if (values.street === '..') { errors.street = 'Enter valid street' }
      if (values.piece_number === '..') { errors.piece_number = 'Enter valid piece_number' }
      if (values.building === '..') { errors.building = 'Enter valid building' }
      if (values.automated_address_number === '..') { errors.automated_address_number = 'Enter valid building' }
      //--------- 
      if (values.commercial_registration_number === '..') { errors.commercial_registration_number = 'Enter valid commercial_registration_number' }
      if (values.tax_number === '..') { errors.tax_number = 'Enter valid tax_number' }
      if (values.license_number === '..') { errors.license_number = 'Enter valid license_number' }
      if (values.unified_number === '..') { errors.unified_number = 'Enter valid unified_number' }
      //----------
      if (values.password.length < 6 || values.password.length > 12) { errors.password = 'Name Should be from 4 to 10' }
      if (values.password_confirmation !== values.password) { errors.password_confirmation = 'passwords do not match' }
      //----------
      if (values.bank_account_name === '..') { errors.bank_account_name = 'Enter valid bank_account_name' }
      if (values.account_number === '..') { errors.account_number = 'Enter valid account_number' }
      if (values.iban === '..') { errors.iban = 'Enter valid Iban' }
      //----------
      if (values.checkBox === true) { errors.checkBox = 'Accept terms and conditions' }
      console.log(errors)
      seterrMsg(null)

      return errors
    }
  })

  return <>

    <div className='d-flex justify-content-center align-items-center'>

      <form className={desgin.form_container} onSubmit={formikobj.handleSubmit}>
        <div className={desgin.logo_container}>
          <img className={desgin.logo_container + ' p-2'} src={logo} />
        </div>
        <div className={desgin.title_container}>
          <p className={desgin.title+" "+ font.font2 + ' ' + desgin.colTeal}>تسجيل حساب جديد </p>
          <span className={desgin.subtitle}>ابدا في حسابك معنا و تعرف علي مزايا الشركه معنا </span>
        </div>
        <div id='Personal' className='w-100 p-2'>
        <h5 className={ desgin.input_label + font.font2 +  ' text-center fs-3 text-dark'}>المعلومات الشخصية</h5>
        <div className={desgin.input_container}>
          
        <i className={desgin.icon +" fa-regular fa-user pb-4"}></i>
          <label htmlFor="first_name" className={desgin.input_label} >Frist Name :</label>
          <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.first_name} type="text" id="first_name" name="first_name" placeholder=' first_name' className={desgin.input_field} />
          {/* {formikobj.errors.first_name && formikobj.touched.first_name ? <div className="alert alert-success" role="alert">{formikobj.errors.first_name}</div> : ''} */}
      </div>

      <div className={desgin.input_container}>
      <i className={desgin.icon +" fa-regular fa-user pb-4"}></i>
      
          <label htmlFor="last_name" className={desgin.input_label}>Last Name :</label>
          <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.last_name} type="text" id="last_name" name="last_name" placeholder=' last_name' className={desgin.input_field} />
          {formikobj.errors.last_name && formikobj.touched.last_name ? <div className="alert alert-success" role="alert">{formikobj.errors.last_name}</div> : ''}
      </div>
      <div className={desgin.input_container}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 32 32" height="32" fill="none" className={desgin.icon}>
          <path strokeWidth="2" strokeLinecap="round" stroke="black" fillRule="evenodd" d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z" clipRule="evenodd">
          </path>
        </svg>
          <label htmlFor="phone" className={desgin.input_label}> Phone :</label>
          <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.phone} type="tel" id="phone" name="phone" className={desgin.input_field} placeholder=' Number' />
          {formikobj.errors.phone && formikobj.touched.phone ? <div className="alert alert-success" role="alert">{formikobj.errors.phone}!</div> : ''}
      </div>
      <div className={desgin.input_container}>
      <i className={desgin.icon + " fa-solid fa-earth-asia pb-4"}></i>
          <label htmlFor="nationality_id" className={desgin.input_label}>nationality_id :</label>
          <div className='w-100' id="company_type">
            <select onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.nationality_id} id='nationality_id' name='nationality_id' required className={desgin.input_field + " w-100 "}>
                                <option>.. </option>
              <option>.. </option>
              {
                data?.data?.data.map(function (item, index) {
                  // if ($("#nationality_idd").val()) 
                  // {
                  //   return <option selected key={index}>{item.id}</option>
                  // }else{
                  //  return <option key={index}>{item.id}</option>
                  // }
                  return <option value={item.id} key={index}>{item.nationality_en}</option>
                })
              }
            </select>
          </div>
          {/* {console.log(formikobj.values)} */}
      </div>
      <div className={desgin.input_container}>
      {/* <i className={desgin.icon +"fa-solid fa-id-card pb-4"} ></i> */}
      <i className={desgin.icon + " fa-solid fa-id-card pb-4"}></i>
          <label htmlFor="id_number" className={desgin.input_label} >id_number :</label>
          <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.id_number} type="text" id="id_number" name="id_number" placeholder=' id_number' className={desgin.input_field} />
          {formikobj.errors.id_number && formikobj.touched.id_number ? <div className="alert alert-success" role="alert">{formikobj.errors.id_number}</div> : ''}
      </div>

          <label htmlFor="date_of_birth" className={desgin.input_label}> Birth Date :</label>
          <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.date_of_birth} type="date" id="date_of_birth" name="date_of_birth" placeholder=' date_of_birth' className={desgin.input_field + ' w-100'} />
          {formikobj.errors.date_of_birth && formikobj.touched.date_of_birth ? <div className="alert alert-success" role="alert">{formikobj.errors.date_of_birth}</div> : ''}
          <button type='button' id='toCompanyInfo' title="Next"className={desgin.sign_in_btn + " w-25"}>
        <i className="fa-solid fa-angle-left"></i>
      </button>  
        </div>
          {/*-----company Info----------------------------------------------------------------------------------------- */}
          <div id='companyInfo' className=  ' w-100 p-5 rounded-4 mt-5 d-none'>
        <h5 className={ desgin.input_label + font.font2 +  ' text-center fs-3 text-dark'}>المعلومات الخاصه بالشركه</h5>
        <div className={desgin.input_container}>
        <label htmlFor="company_logo" className={desgin.input_label}> company_logo :</label>
          <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.company_logo} type="file" id="company_logo" name="company_logo" placeholder='Ex : user@gmail.com' className='form-control mb-3' />
          {formikobj.errors.company_logo && formikobj.touched.company_logo ? <div className="alert alert-success" role="alert">{formikobj.errors.company_logo}!</div> : ''}
      </div>
      <div className={desgin.input_container}>
      <i className={desgin.icon + " fa-solid fa-building pb-4"}></i>
          <label htmlFor="company_name" className={desgin.input_label}> company_name :</label>
          <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.company_name} type="text" id="company_name" name="company_name" placeholder=' company_name' className={desgin.input_field} />
          {formikobj.errors.company_name && formikobj.touched.company_name ? <div className="alert alert-success" role="alert">{formikobj.errors.company_name}!</div> : ''}
      </div>

      <div className={desgin.input_container}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 32 32" height="32" fill="none" className={desgin.icon}>
          <path strokeWidth="2" strokeLinecap="round" stroke="black" fillRule="evenodd" d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z" clipRule="evenodd">
          </path>
        </svg>
          <label htmlFor="company_phone" className={desgin.input_label}> company_phone :</label>
          <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.company_phone} type="tel" id="company_phone" name="company_phone" className={desgin.input_field} placeholder=' Number' />
          {formikobj.errors.company_phone && formikobj.touched.company_phone ? <div className="alert alert-success" role="alert">{formikobj.errors.company_phone}!</div> : ''}
      </div>  
      <div className={desgin.input_container}>
      <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className={desgin.icon}>
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
          <path strokeLinejoin="round" strokeWidth="1.5" stroke="#141B34" d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
        </svg>
          <label htmlFor="company_email" className={desgin.input_label}> company_email :</label>
          <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.company_email} type="email" id="company_email" placeholder='company_email' name="company_email" className={desgin.input_field} />
          {formikobj.errors.company_email && formikobj.touched.company_email ? <div className="alert alert-success" role="alert">{formikobj.errors.company_email}</div> : ''}
      </div>

      <div className={desgin.input_container}>
      <i className={desgin.icon + " fa-solid fa-earth-asia pb-4"}></i>
          <label htmlFor="url" className={desgin.input_label}> url :</label>
          <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.url} type="url" id="url" placeholder='url' name="url" className={desgin.input_field} />
      </div>

          <label htmlFor="company_type" className={desgin.input_label}> company_type :</label>
          <div className='form-control bg-light' id="company_type">
            <select required className=' form-select m-2 w-50'>
              <option value={''}>.. </option>
              <option value={'recruitment'}>recruitment </option>
              <option value={'cleaning'}>cleaning</option>
            </select>
          </div>
          {formikobj.errors.company_type && formikobj.touched.company_type ? <div className="alert alert-success" role="alert">{formikobj.errors.company_type}</div> : ''}
          <button type='button' id='toAddress' title="sure"  className={desgin.sign_in_btn + " w-25"}>
        <i className="fa-solid fa-angle-left"></i>        </button>  
        <button type='button' id='backPersonal' title="person"className={desgin.sign_in_btn + " w-25 ms-5"}>
        <i className="fa-solid fa-angle-right"></i>      </button> 
        </div>
        {/*---------------------------------------------------------------------------------------------- */}
        <div id='Address' className={' w-100 p-2 rounded-4 mt-5 d-none'}>
        <h5 className={ desgin.input_label + font.font2 +  ' text-center fs-3 text-dark'}>تفاصيل العنوان</h5>
       
          <div className='form-control my-4'>
            <label htmlFor="city_id" className={desgin.input_label}> city_id :</label>
            <select required id="city_id" className=' form-select m-2 w-100 bg-light'>
              <option value={''}>.. </option>
              <option value={'الأحمدي'}>الأحمدي </option>
              <option value={'حولي'}>حولي </option>
              <option value={'الفروانيه'}>الفروانيه </option>
              <option value={'العاصمه'}>العاصمه</option>
              <option value={'مبارك الكبيره'}>مبارك الكبيره </option>
            </select>
            {formikobj.errors.city_id && formikobj.touched.city_id ? <div className="alert alert-success" role="alert">{formikobj.errors.city_id}!</div> : ''}
          </div>
          <label htmlFor="street" className={desgin.input_label}> street :</label>
          <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.street} type="text" id="street" placeholder='street' name="street" className='form-control mb-3' />
          {formikobj.errors.street && formikobj.touched.street ? <div className="alert alert-success" role="alert">{formikobj.errors.street}!</div> : ''}

          <label htmlFor="piece_number" className={desgin.input_label}> piece_number :</label>
          <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.piece_number} type="text" id="piece_number" placeholder='Same Password' name="piece_number" className='form-control mb-3' />
          {formikobj.errors.piece_number && formikobj.touched.piece_number ? <div className="alert alert-success" role="alert">{formikobj.errors.piece_number}!</div> : ''}

          <label htmlFor="building" className={desgin.input_label}> building :</label>
          <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.building} type="text" id="building" placeholder='building' name="building" className='form-control mb-3' />
          {formikobj.errors.building && formikobj.touched.building ? <div className="alert alert-success" role="alert">{formikobj.errors.building}!</div> : ''}

          <label htmlFor="automated_address_number" className={desgin.input_label}> automated_address_number :</label>
          <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.automated_address_number} type="file" id="automated_address_number" placeholder=' automated_address_number' name="automated_address_number" className='form-control mb-3' />
          {formikobj.errors.automated_address_number && formikobj.touched.automated_address_number ? <div className="alert alert-success" role="alert">{formikobj.errors.automated_address_number}!</div> : ''}
          <button type='button' id='toCommercial' title="sure"  className={desgin.sign_in_btn + " w-25"}>
        <i className="fa-solid fa-angle-left"></i>        </button>  
        <button type='button' id='backCompanyInfo' title="person"className={desgin.sign_in_btn + " w-25 ms-5"}>
        <i className="fa-solid fa-angle-right"></i>      </button> 
        </div>
        {/*---------------------------------------------------------------------------------------------- */}
        <div id='commercial' className={' w-100 p-2 rounded-4 mt-5 d-none'}>

          <label htmlFor="commercial_registration_number" className={desgin.input_label}> commercial_registration_number :</label>
          <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.commercial_registration_number} type="text" id="commercial_registration_number" placeholder='commercial_registration_number' name="company_email" className='form-control mb-3' />
          {formikobj.errors.commercial_registration_number && formikobj.touched.commercial_registration_number ? <div className="alert alert-success" role="alert">{formikobj.errors.commercial_registration_number}</div> : ''}

          <label htmlFor="tax_number" className={desgin.input_label}> tax_number :</label>
          <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.tax_number} type="text" id="tax_number" placeholder=' tax_number' name="tax_number" className='form-control mb-3' />
          {formikobj.errors.tax_number && formikobj.touched.tax_number ? <div className="alert alert-success" role="alert">{formikobj.errors.tax_number}</div> : ''}

          <label htmlFor="license_number" className={desgin.input_label}> license_number :</label>
          <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.license_number} type="text" id="license_number" placeholder=' license_number' name="license_number" className='form-control mb-3' />
          {formikobj.errors.license_number && formikobj.touched.license_number ? <div className="alert alert-success" role="alert">{formikobj.errors.license_number}</div> : ''}

          <label htmlFor="unified_number" className={desgin.input_label}> unified_number :</label>
          <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.unified_number} type="text" id="unified_number" placeholder='unified_number' name="unified_number" className='form-control mb-3' />
          {formikobj.errors.unified_number && formikobj.touched.unified_number ? <div className="alert alert-success" role="alert">{formikobj.errors.unified_number}</div> : ''}

          <div className='form-control my-4 '>
            <div className='d-flex gap-4'>
              <div className='w-100'>

                <label htmlFor="commercial_license" className={desgin.input_label}> commercial_license :</label>
                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.commercial_license} type="file" id="commercial_license" placeholder=' commercial_license' name="commercial_license" className='form-control mb-3' />

              </div>
              <div className='w-100'>

                <label htmlFor="articles_of_association" className={desgin.input_label}> articles_of_association :</label>
                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.articles_of_association} type="file" id="articles_of_association" placeholder=' articles_of_association' name="articles_of_association" className='form-control mb-3' />

              </div>

            </div>
            <div className='d-flex gap-4'>
              <div className='w-100'>

                <label htmlFor="signature_authorization" className={desgin.input_label}> signature_authorization :</label>
                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.signature_authorization} type="file" id="signature_authorization" placeholder=' signature_authorization' name="signature_authorization" className='form-control mb-3' />

              </div>
              <div className='w-100'>

                <label htmlFor="signatureـofficial" className={desgin.input_label}> signatureـofficial :</label>
                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.signatureـofficial} type="file" id="signatureـofficial" placeholder=' signatureـofficial' name="signatureـofficial" className='form-control mb-3' />

              </div>
            </div>
          </div>
          <button type='button' id='toBankAccountInfo' title="sure"  className={desgin.sign_in_btn + " w-25"}>
        <i className="fa-solid fa-angle-left"></i>        </button>  
        <button type='button' id='backAddress' title="person"className={desgin.sign_in_btn + " w-25 ms-5"}>
        <i className="fa-solid fa-angle-right"></i>      </button> 
        </div>
        
        {/*---------------------------------------------------------------------------------------------- */}
        <div id='bankAccountInfo' className={' w-100 p-2 rounded-4 mt-5 d-none'}>

          <label htmlFor="bank_name" className={desgin.input_label}> bank_name :</label>
          <select id="bank_name" className=' form-select  w-100 bg-light'>
            <option value={''}>.. </option>
          </select>

          <label htmlFor="bank_account_name" className={desgin.input_label}> bank_account_name :</label>
          <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.bank_account_name} type="text" id="bank_account_name" placeholder=' bank_account_name' name="bank_account_name" className='form-control mb-3' />
          {formikobj.errors.bank_account_name && formikobj.touched.bank_account_name ? <div className="alert alert-success" role="alert">{formikobj.errors.bank_account_name}</div> : ''}

          <label htmlFor="account_number" className={desgin.input_label}> account_number :</label>
          <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.account_number} type="text" id="account_number" placeholder=' account_number' name="account_number" className='form-control mb-3' />
          {formikobj.errors.account_number && formikobj.touched.account_number ? <div className="alert alert-success" role="alert">{formikobj.errors.account_number}</div> : ''}

          <label htmlFor="iban" className={desgin.input_label}> iban :</label>
          <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.iban} type="text" id="iban" placeholder=' iban' name="iban" className='form-control mb-3' />
          {formikobj.errors.iban && formikobj.touched.iban ? <div className="alert alert-success" role="alert">{formikobj.errors.iban}</div> : ''}
          <button type='button' id='toIdentify' title="sure"  className={desgin.sign_in_btn + " w-25"}>
        <i className="fa-solid fa-angle-left"></i>        </button>  
        <button type='button' id='backCommercial' title="person"className={desgin.sign_in_btn + " w-25 ms-5"}>
        <i className="fa-solid fa-angle-right"></i>      </button> 
        </div>
         {/**----------------------------- ***************/}
         <div id='identify' className={' w-100 p-2 rounded-4 mt-5 d-none'}>
        <h5 className={ desgin.input_label + font.font2 +  ' text-center fs-3 text-dark'}>تأكيد الهوية </h5>
          <label htmlFor="identity_confirmation" className={desgin.input_label}> identity_confirmation_about :</label>
          <div className='form-control my-4'>
            <div className='d-flex gap-4'>
              <div className='d-flex gap-2'>
                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} defaultChecked type="radio" name='typeID' value='pass' id='pass' />
                <label htmlFor="identity_confirmation" id='identity' className='pb-1'>pass</label>
              </div>
              <div className='d-flex gap-2'>
                <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} type="radio" name='typeID' value='card_Id' />
                <label htmlFor="identity_confirmation" className={desgin.input_label}> card_Id </label>
              </div>
           
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
                    <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.front_side_id_image} type="file" id="front_side_id_image" placeholder=' front_side_id_image' name="front_side_id_image" className='form-control mb-3 ' />
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
            <button type='button' id='toSafety' title="sure"  className={desgin.sign_in_btn + " w-25"}>
        <i className="fa-solid fa-angle-left"></i>        </button>  
        <button type='button' id='backBankAccountInfo' title="person"className={desgin.sign_in_btn + " w-25 ms-5"}>
        <i className="fa-solid fa-angle-right"></i>      </button> 
        </div>



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
          
        {console.log(formikobj.values.typeID)}
       
        {/*---------------------------------------------------------------------------------------------- */}
        <div id='safety' className=  ' w-100 p-5 rounded-4 mt-5 d-none'>
        <h5 className={ desgin.input_label + font.font2 +  ' text-center fs-3 text-dark'}>الأمــان </h5>
       
          <label htmlFor="password" className={desgin.input_label}> password :</label>
          <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.password} type="password" id="password" placeholder=' password' name="password" className='form-control mb-3' />
          {formikobj.errors.password && formikobj.touched.password ? <div className="alert alert-success" role="alert">{formikobj.errors.password}</div> : ''}

          <label htmlFor="password_confirmation" className={desgin.input_label}> password_confirmation :</label>
          <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.password_confirmation} type="password" id="password_confirmation" placeholder=' password_confirmation' name="password_confirmation" className='form-control mb-3' />
          {formikobj.errors.password_confirmation && formikobj.touched.password_confirmation ? <div className="alert alert-success" role="alert">{formikobj.errors.password_confirmation}</div> : ''}
          <div className="form-check d-flex gap-3">
            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.checkBox} type="checkbox" className='form-check-input' name='checkBox' id='checkBox' />
            <p>Agree of <a href="https://www.khedmah.site/terms-of-use" className='text-decoration-none text-dark fw-bold'>Usage policy</a> and <a href="https://www.khedmah.site/terms-of-use" className=' text-decoration-none text-dark fw-bold'>terms of use</a></p>
          </div>
        
          <button title="Sign In" type= 'submit' disabled={ (formikobj.isValid === false || formikobj.dirty === false) && formikobj.values.checkBox === false } className={desgin.sign_in_btnn + " w-25"}>
        <span className={font.font2 + ' fw-bold '}> Sign Up</span>
      </button> 
        <button type='button' id='backIdentify' title="person"className={desgin.sign_in_btn + " w-25 ms-5"}>
        <i className="fa-solid fa-angle-right"></i>      </button> 
       
        {/* <div className='d-flex justify-content-center'>
          <button type='submit' disabled={(formikobj.isValid === false || formikobj.dirty === false) && formikobj.values.checkBox === false} className='btn btn-outline-success m-5 w-25'  >
          {isloading ? <ThreeDots
            height="25"
            width="50"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          /> : "Register"}

        </button>  </div> */}
        </div>
       
      </form>

    </div>

  </>
}
