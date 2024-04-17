// import React, { useState } from 'react';
// import desgin from './setting.module.css';
// import axios from 'axios';
// import font from '../Navbar/nav.module.css';
// import { useQuery } from 'react-query';
// import { useFormik } from 'formik';
// import ChangePass from './ChangePass';
// import Curr from './Curr';
// import SendUs from './SendUs';
// import AboutUs from './AboutUs';
// import DeleteAccount from './DeleteAccount';
// import LogOut from './LogOut';

// export default function Setting() {
//     const [activeSection, setActiveSection] = useState('');

//     let apiConutry = async ()=>
//             {
//             return await axios.get("https://khdmah.online/api/countries");
//             }
//             let country =  useQuery("Allproduct", apiConutry , 
//             {
//              // refetchOnMount:false ,
//              //  refetchInterval : 2000 ,
//                cacheTime:10000
//              // enabled:false
//             })
//     // Fetch user profile data
//     const { data: profileData } = useQuery("profileEdit", async () => {
//         const response = await axios.get("https://khdmah.online/api/me", {
//             headers: { Authorization: localStorage.getItem('tkn') }
//         });
//         return response.data;
//     });

//     const formikObj = useFormik({
//         initialValues: {
//             phone: profileData?.data?.data?.user_information?.phone || '',
//             nationality_id: profileData?.data?.data?.user_information?.nationality_id || '',
//             job_name: profileData?.data?.data?.user_information?.job_name || '',
//             city_id: profileData?.data?.data?.user_information?.city_id || '',
//             region_id: profileData?.data?.data?.user_information?.region_id || '',
//             piece_number: profileData?.data?.data?.user_information?.piece_number || '',
//             street: profileData?.data?.data?.user_information?.street || '',
//             building: profileData?.data?.data?.user_information?.building || '',
//             automated_address_number: profileData?.data?.data?.user_information?.automated_address_number || '',
//         },
//         onSubmit: async (values) => {
//             try {
//                 await axios.put("https://khdmah.online/api/update/profile/user", values, {
//                     headers: { Authorization: localStorage.getItem('tkn') }
//                 });
//             } catch (error) {
//                 console.log(error);
//             }
//         },
//         validate: (values) => {
//             const errors = {};
//             console.log(values);
//             return errors;
//         }
//     });

//     const toggleSection = (sectionName) => {
//         setActiveSection(sectionName === activeSection ? '' : sectionName);
//     };

//     return (
//         <div className={desgin.form_group + ' container d-flex'}>
//             <div className={desgin.setting}>
//                 <div className={desgin.container}>
//                     <button className={desgin.butt} onClick={() => toggleSection('profile')}>
//                         <div className={desgin.svg_wrapper}>
//                             <div className={desgin.svg_wrapper}>
//                                 <i className="fa-regular fa-pen-to-square"></i>
//                             </div>
//                         </div>
//                         <span>Edit Profile</span>
//                     </button>
//                 </div>
//                 {/* Add buttons for other sections similarly */}
//             </div>
//             <form onSubmit={formikObj.handleSubmit} className={`${desgin.container1} ${activeSection === 'profile' ? '' : 'd-none'}`}>
//             <h1 className={font.font2 +' fs-2 fw-bold text-center pt-5 pb-5'}>تعديل الملف الشخصي</h1>
//          <div className={desgin.form1}>
//             <div className='row'>
//                  <div className='col-lg-6'>
//                      <div className={desgin.input1_group}>
//                         <label className={desgin.lebal1}>Phone</label>
//                         <input onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.phone} autoComplete="off" name="phone" id="phone" className={desgin.input1} type="text"/>
//                     </div>
//                 </div>
//                  <div className='col-lg-6'>
//                      <div className={desgin.input1_group}>
//                          <label className={desgin.lebal1}>Nationality</label>
//                         {/* <input onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.nationality_id} autoComplete="off" name="nationality_id" id="nationality_id" className={desgin.input1} type="text"/> */}
//                              <select className={desgin.input1} onChange={formikObj.handleChange} onBlur={formikObj.onBlur} value={formikObj.values.nationality_id} id='nationality_id' name='nationality_id' required >
//                                  <option>.. </option>
//                                 {
//                                 country?.data?.data?.data.map(function(item,index)
//                                 {
//                                   return <option value={item.id} key={index}>{item.nationality_en}</option> 
//                                 })
//                                }
//                             </select>
//                     </div>
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-lg-6'>
//                     <div className={desgin.input1_group}>
//                         <label className={desgin.lebal1}>Job Name</label>
//                         <input onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.job_name} autoComplete="off" name="job_name" id="job_name" className={desgin.input1} type="text"/>
//                     </div>
//                 </div>
//                 <div className='col-lg-6'>
//                     <div className={desgin.input1_group}>
//                         <label className={desgin.lebal1}>ٌRegion</label>
//                         <input onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.region_id} autoComplete="off" name="region_id" id="region_id" className={desgin.input1} type="text"/>
//                     </div>
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-lg-6'>
//                     <div className={desgin.input1_group}>
//                         <label className={desgin.lebal1}>Piece Number</label>
//                         <input onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.piece_number} autoComplete="off" name="piece_number" id="piece_number" className={desgin.input1} type="text"/>
//                     </div>
//                 </div>
//                 <div className='col-lg-6'>
//                     <div className={desgin.input1_group}>
//                         <label className={desgin.lebal1}>Street</label>
//                         <input onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.street} autoComplete="off" name="street" id="street" className={desgin.input1} type="text"/>
//                     </div>
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-lg-6'>
//                     <div className={desgin.input1_group}>
//                         <label className={desgin.lebal1}>Building</label>
//                         <input onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.building} autoComplete="off" name="building" id="building" className={desgin.input1} type="text"/>
//                     </div>
//                 </div>
//                 <div className='col-lg-6'>
//                     <div className={desgin.input1_group}>
//                         <label className={desgin.lebal1}>Automated Address Number</label>
//                         <input onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.automated_address_number} autoComplete="off" name="automated_address_number" id="automated_address_number" className={desgin.input1} type="text"/>
//                     </div>
//                 </div>
//             </div>
//             <div className='row'>
//                <div className='col-lg-6'>
//                     <div className={desgin.input1_group}>
//                         <label className={desgin.lebal1}>City</label>
//                         {/* <input onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.city_id} autoComplete="off" name="city_id" id="city_id" className={desgin.input1} type="text"/> */}
//                         <select name='city_id'  required id="city_id" className={desgin.input1} onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.city_id}>
//                                   <option value={'0'}>.. </option>
//                                   <option value={'1'}>الأحمدي </option>
//                                   <option value={'2'}>حولي </option>
//                                   <option value={'3'}>الفروانيه </option>
//                                   <option value={'4'}>العاصمه</option>
//                                   <option value={'5'}>مبارك الكبيره </option>
//                               </select>
//                     </div>
//                 </div>
//                 <div className='col-lg-6'>
//                     <div className={desgin.input1_group}>
//                         <button type='submit' className='btn btn-outline-dark w-100 mt-4 pb-2'>
                    
                          
//                              'Save'
                           
                             
//                         </button>
//                     </div>
//                 </div>             
//             </div>
//         </div>
//             </form>


//             {/* Render other sections based on activeSection state */}
//             {activeSection === 'password' && <ChangePass />}
//             {activeSection === 'curr' && <Curr />}
//             {activeSection === 'contact' && <SendUs />}
//             {activeSection === 'about' && <AboutUs />}
//             {activeSection === 'logout' && <LogOut />}
//             {activeSection === 'del' && <DeleteAccount />}
//         </div>
//     );
// }





import React, { useContext, useEffect, useMemo, useState } from 'react'
import $ from 'jquery'
import desgin from './setting.module.css'
import axios from 'axios'
import font from '../Navbar/nav.module.css'
import { authContext } from '../Context/authentication'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useFormik } from 'formik'
import { InfinitySpin } from 'react-loader-spinner'
import ChangePass from './ChangePass'
import Curr from './Curr'
import SendUs from './SendUs';
import AboutUs from './AboutUs'
import DeleteAccount from './DeleteAccount'
import LogOut from './LogOut'

export default function Setting() 
{       
    const [isloading , setisloading] = useState(false)

         const [activeSection, setActiveSection] = useState('');

        let apiConutry = async ()=>
        {
          return await axios.get("https://khdmah.online/api/countries");
        }
        let country =  useQuery("Allproduct", apiConutry , 
        {
         // refetchOnMount:false ,
         //  refetchInterval : 2000 ,
           cacheTime:10000
         // enabled:false
        })
            let profileEdit = async()=>
            {
                return await axios.get("https://khdmah.online/api/me",{headers:{Authorization:localStorage.getItem('tkn')}}).catch((err)=>console.log(err))
            }
            let {data} =  useQuery("profileEdit",profileEdit,
            {
                cacheTime:10000,
                refetchOnWindowFocus:false,
                refetchOnMount:false
            })
            // console.log(data?.data?.data?.user_information);
        
            let update = 
            {
                phone : data?.data?.data?.user_information?.phone || '',
                nationality_id : data?.data?.data?.user_information?.nationality_id || '',
                job_name : data?.data?.data?.user_information?.job_name || '',
                city_id : data?.data?.data?.user_information?.city_id || '',
                region_id: data?.data?.data?.user_information?.region_id || '',
                piece_number : data?.data?.data?.user_information?.piece_number || '',
                street: data?.data?.data?.user_information?.street || '',
                building: data?.data?.data?.user_information?.building  || '',
                automated_address_number : data?.data?.data?.user_information?.automated_address_number || '',
            } 
            let formikobj = useFormik({
                initialValues : update,
                onSubmit: async(values) => 
                {
                    try
                    {   
                        let apiUpdate = await axios.put("https://khdmah.online/api/update/profile/user",values,
                        {headers:{Authorization:localStorage.getItem('tkn')}},
                        {
                            caches:10000
                        })
                    }   
                    catch(error)
                    {
                        console.log(error);
                    } 
                },
                validate: async(values) =>{
                    const errors = {};
                    console.log(values);
                }
            })
        //  $('#profile').click(function () 
        //  {
        //     $('#profile1').toggleClass('d-none')
        //  }) 
        //  $('#password').click(function () 
        //  {
        //     $('#password1').toggleClass('d-none')
        //  }) 
        //  $('#curr').click(function () 
        //  {
        //     $('#curr1').toggleClass('d-none')
        //  }) 
        //  $('#contact').click(function () 
        //  {
        //     $('#contact1').toggleClass('d-none')
        //  }) 
        //  $('#about').click(function () 
        //  {
        //     $('#about1').toggleClass('d-none')
        //  }) 
        //  $('#logout').click(function () 
        //  {
        //     $('#logout1').toggleClass('d-none')
        //  }) 
        //  $('#del').click(function () 
        //  {
        //     $('#del1').toggleClass('d-none')
        //  }) 
        const toggleSection = (sectionName) => {
        setActiveSection(sectionName === activeSection ? '' : sectionName)}

    return <>
  <div className={desgin.form_group  + ' container  d-flex'}>
     <div className={desgin.setting}>
    <div id='profile'  className={desgin.container}>
        <button className={desgin.butt} onClick={() => toggleSection('profile')}>
            <div className={desgin.svg_wrapper}>
                <div className={desgin.svg_wrapper}>
                     <i className ="fa-regular fa-pen-to-square"></i>
                </div>
            </div>
                <span>Edit Profile</span>
        </button>
    </div>
    <div id='password' className={desgin.container}>
    <button className={desgin.butt} onClick={() => toggleSection('password')}>
            <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                    <i className="fa-solid fa-key"></i>
                </div>
            </div>
            <span>Change Password</span>
        </button>
    </div>
    <div id='curr' className={desgin.container}>
    <button className={desgin.butt} onClick={() => toggleSection('curr')}>
            <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                    <i className="fa-solid fa-hand-holding-dollar"></i>
                </div>
            </div>
            <span>Currency</span>
        </button>
    </div>
    <div id='contact' className={desgin.container}>
    <button className={desgin.butt} onClick={() => toggleSection('contact')}>
            <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                    <i className="fa-solid fa-comment-dots"></i>    
                </div>
            </div>
            <span>Contact Us</span>
        </button>
    </div>
    <div id='about' className={desgin.container}>
    <button className={desgin.butt} onClick={() => toggleSection('about')}>
            <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                     <i className="fa-solid fa-user-tie"></i>
                </div>
            </div>
            <span>About Us</span>
        </button>
    </div>
    <div id='logout' className={desgin.container}>
    <div className={desgin.butt} onClick={() => toggleSection('logout')}>
            <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
            </div>
            <span>Log Out</span>
        </div>
    </div> 
    <div id='del' className={desgin.container}>
    <button className={desgin.butt + ' bg-light'} onClick={() => toggleSection('del')}>
            <div className="svg-wrapper-1 ">
                <div className="svg-wrapper">
                     <i className="fa-regular fa-trash-can text-danger"></i>
                </div>
            </div>
            <span className='text-danger'>Delete Account</span>
        </button>
    </div> 
  </div>
    <form id='profile1' onSubmit={formikobj.handleSubmit} className={`${desgin.container1} ${activeSection === 'profile' ? '' : 'd-none'}`}>
             <h1 className={font.font2 +' fs-2 fw-bold text-center pt-5 pb-5'}>تعديل الملف الشخصي</h1>
        <div className={desgin.form1}>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className={desgin.input1_group}>
                        <label className={desgin.lebal1}>Phone</label>
                        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.phone} autoComplete="off" name="phone" id="phone" className={desgin.input1} type="text"/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className={desgin.input1_group}>
                        <label className={desgin.lebal1}>Nationality</label>
                        {/* <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.nationality_id} autoComplete="off" name="nationality_id" id="nationality_id" className={desgin.input1} type="text"/> */}
                            <select className={desgin.input1} onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.nationality_id} id='nationality_id' name='nationality_id' required >
                                <option>.. </option>
                               {
                                country?.data?.data?.data.map(function(item,index)
                                {
                                  return <option value={item.id} key={index}>{item.nationality_en}</option> 
                                })
                               }
                            </select>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className={desgin.input1_group}>
                        <label className={desgin.lebal1}>Job Name</label>
                        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.job_name} autoComplete="off" name="job_name" id="job_name" className={desgin.input1} type="text"/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className={desgin.input1_group}>
                        <label className={desgin.lebal1}>ٌRegion</label>
                        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.region_id} autoComplete="off" name="region_id" id="region_id" className={desgin.input1} type="text"/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className={desgin.input1_group}>
                        <label className={desgin.lebal1}>Piece Number</label>
                        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.piece_number} autoComplete="off" name="piece_number" id="piece_number" className={desgin.input1} type="text"/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className={desgin.input1_group}>
                        <label className={desgin.lebal1}>Street</label>
                        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.street} autoComplete="off" name="street" id="street" className={desgin.input1} type="text"/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className={desgin.input1_group}>
                        <label className={desgin.lebal1}>Building</label>
                        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.building} autoComplete="off" name="building" id="building" className={desgin.input1} type="text"/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className={desgin.input1_group}>
                        <label className={desgin.lebal1}>Automated Address Number</label>
                        <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.automated_address_number} autoComplete="off" name="automated_address_number" id="automated_address_number" className={desgin.input1} type="text"/>
                    </div>
                </div>
            </div>
            <div className='row'>
               <div className='col-lg-6'>
                    <div className={desgin.input1_group}>
                        <label className={desgin.lebal1}>City</label>
                        {/* <input onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.city_id} autoComplete="off" name="city_id" id="city_id" className={desgin.input1} type="text"/> */}
                        <select name='city_id'  required id="city_id" className={desgin.input1} onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.city_id}>
                                  <option value={'0'}>.. </option>
                                  <option value={'1'}>الأحمدي </option>
                                  <option value={'2'}>حولي </option>
                                  <option value={'3'}>الفروانيه </option>
                                  <option value={'4'}>العاصمه</option>
                                  <option value={'5'}>مبارك الكبيره </option>
                              </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className={desgin.input1_group}>
                        <button type='submit' className='btn btn-outline-dark w-100 mt-4 pb-2'>
                         {
                             isloading ?  <InfinitySpin
                                visible={true}
                                width="200"
                                color="#4fa94d"
                                ariaLabel="infinity-spin-loading"
                                /> :
                             'Save'
                         }   
                             
                        </button>
                    </div>
                </div>             
            </div>
        </div>
    </form>
    <div id='password1' className={`${desgin.container2} ${activeSection === 'password' ? '' : 'd-none'}`}>
        <ChangePass/>
    </div>
    <div id='curr1' className={`${desgin.container2} ${activeSection === 'curr' ? '' : 'd-none'}`}>
          <Curr/>               
    </div>
    <div id='contact1' className={`${desgin.container4} ${activeSection === 'contact' ? '' : 'd-none'}`}>
        <SendUs/>
    </div>
    <div id='about1' className={`${desgin.container2} ${activeSection === 'about' ? '' : 'd-none pt-5'}`}>
        <   AboutUs/>
    </div>  
    <div id='logout1' className={`${desgin.container3} ${activeSection === 'logout' ? '' : 'd-none'}`}>
        <LogOut/>
    </div>               
    <div id='del1' className={`${desgin.container3} ${activeSection === 'del' ? '' : 'd-none'}`}>
        <DeleteAccount/>
    </div>               
  </div>
 
  </>
}
