import React,{useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../image/color.png'
import desgin from '../Navbar/nav.module.css'
import { authContext } from '../Context/authentication'
import { useQuery } from 'react-query'
import axios from 'axios'
import $ from 'jquery'
 
export default function Nav() 
{
  // $(".fa-bell").click(function(){
  //   $("#notification1").toggleClass('d-none')
  // })  
    // $(".fa-comment").click(function(){
    //   $("#massge1").toggleClass('d-none')
    // })  
    const [activeSection, setActiveSection] = useState('');
    const toggleSection = (sectionName) => {
      setActiveSection(sectionName === activeSection ? '' : sectionName)}
  //=========================
  const {token , setToken} = useContext(authContext)
  const {role} = useContext(authContext)
  const usenav = useNavigate()

  let notifications = async ()=>
  {
    return await axios.get("https://khdmah.online/api/notifications",{headers:{Authorization:localStorage.getItem('tkn')}})
    .catch(error => console.log(error.message))
  }

        let Noti = useQuery("AllNotifications",notifications ,
          {
            // refetchOnMount:false ,
            //  refetchInterval : 2000 ,
              cacheTime:10000
            // enabled:false
        })
    console.log(Noti.data?.data?.data.length)
  let messages  = async ()=>
  {
    return await axios.get("https://khdmah.online/api/chat",{headers:{Authorization:localStorage.getItem('tkn')}})
    .catch(error => console.log(error.message))
  }

        let messagE = useQuery("AllMeassge",messages ,
          {
            // refetchOnMount:false ,
            //  refetchInterval : 2000 ,
              cacheTime:10000
            // enabled:false
        })
    // console.log(messagE);



  const logout = () => 
  {
    console.log('log out');
    localStorage.removeItem('tkn')
    setToken(null)
    usenav('/loguser')
  }

  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const handleDropdownToggle = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };
  //======================================
  console.log(role);
 
  return <>





  {
    token?<>
         <Link className='text-decoration-none' to="/cart">
            <div style={{cursor:'pointer'}} className={desgin.cart }>
               <i className="fa-solid fa-cart-shopping p-4 rounded-circle"></i>
            </div>
         </Link>
    </>:<>
    </>
  }
      
      <nav className={desgin.bg_nav +" navbar navbar-expand-lg navbar-light bg-light pe-3"}>
        <div className='container'>
          <div className="ps-2">

          {token?<>
            <Link className="navbar-brand fw-bold fs-4 text-success" to=
            {
                role == "user" ? "/userhome" :  "/companyhome"
             }>
                <img className={`${desgin.size}`} src={logo} alt='Fresh Cart Logo'/>
            </Link>
            </>:<>
            <Link className="navbar-brand fw-bold fs-4 text-success" to="/home">
                <img className={`${desgin.size}`} src={logo} alt='Fresh Cart Logo'/>
            </Link>
            </>}
          </div>
        
        
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}

          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
            <ul className={" navbar-nav m-auto"}>
              {
                token?<>
                <div className='d-flex gap-3'>
                  <li className="nav-item active">
                    <Link to=
                    {
                      role == "user" ? "/userhome" :  "/companyhome"
                    } className="nav-link"><i className={desgin.iconNav+" fa-solid fa-house fa-2x"}></i>  <span className="sr-only"></span></Link>
                  </li>
                  <li className="nav-item active">
                    <Link to='/profile' className="nav-link"><i className={desgin.iconNav+" fa-regular fa-user fa-2x"}></i> <span className="sr-only"></span></Link>
                  </li>
                  {/* <li className="nav-item active">
                    <Link className="nav-link"><i className={desgin.iconNav+" fa-solid fa-gear fa-2x"}></i> <span className="sr-only"></span></Link>
                  </li> */}
                </div>
            
                </>:
                <></>
              }

            </ul>
            
            <div className=" my-2 my-lg-0 d-flex gap-3">
              {
                token?<>
                <span id='notification1' style={{cursor:'pointer'}} onClick={() => toggleSection('notification1')} className={`nav-link active d-flex gap-1 fw-bold text-dark `}>
                    <i className={desgin.iconNav1+" fa-regular fa-bell fa-2x"}></i>
                </span>  
                <div className={`${desgin.dropdown} ${activeSection === 'notification1' ? '' : 'd-none'}`}>
                  <div >
                     {
                      Noti.data?.data?.data?.length === 0 ?<div className='text-center d-flex justify-content-center align-items-center py-5 my-5'> <i className="pe-3 fa-solid fa-exclamation"></i>لا يوجد اشعارات</div> :<>{Noti.data?.data?.data?.map((noti)=>{return <p className='m-0 '>{noti.message}</p>})}</> 
                     }
                    </div>
                </div>       
                <span id='massge1'style={{cursor:'pointer'}} onClick={() => toggleSection('massge1')} className={`nav-link active d-flex gap-1 fw-bold text-dark`}>
                     <i className={desgin.iconNav1+ " fa-regular fa-comment fa-2x"}></i>
                </span>
                <div  className={`${desgin.dropdown} ${activeSection === 'massge1' ? '' : 'd-none'}`}>
                  <div >
                     {
                      messagE.data?.data?.data?.length === 0 ?<div className='text-center d-flex justify-content-center align-items-center py-5 my-5'> <i className="pe-3 fa-solid fa-exclamation"></i>لا يوجد رسائل</div> :<>{messagE.data?.data?.data?.map((message)=>{return <p className='m-0 '>{message.message}</p>})}</> 
                     }
                    </div>
                </div> 
                {/* <span onClick={logout} style={{cursor:'pointer'}}className={`${desgin.Red} nav-link active d-flex gap-1 fw-bold `}>
                    <i className="fa-solid fa-right-from-bracket fa-2x"></i>
                </span> */}
                <span>
                  <Link to={'/setting'} className="nav-link active d-flex gap-1"><i className={desgin.iconNav+" fa-solid fa-gear fa-2x"}></i> <span className="sr-only"></span></Link>
                </span> 
                </>:<>
                  <span style={{cursor:'pointer'}}className={`${desgin.l} nav-link active d-flex gap-1`}>
                    <Link className={'text-dark '+desgin.l} to={'/loguser'}>
                          تسجيل الدخول
                    </Link>
                  </span> 
                  <Link className='text-decoration-none text-dark' to='/home'>
                    <span style={{cursor:'pointer'}}className={`${desgin.l} nav-link active d-flex gap-1`}>
                        تواصل معنا
                    </span>           
                  </Link>
                <span  style={{cursor:'pointer'}}className={`${desgin.l} nav-link active d-flex gap-1`}>
                  <Link className='text-decoration-none text-dark' to={'/home'}>                  
                    من نحن
                  </Link>
                </span> 
                <Link to={'/home'} style={{cursor:'pointer'}}className={`${desgin.l} nav-link active d-flex gap-1`}>
                    الرئيسية
                </Link> 
                </>
              }
              </div>
          {/* </div> */}
        </div>
      </nav>
    </>
}
