import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../image/color.png'
import desgin from '../Navbar/nav.module.css'
import { authContext } from '../Context/authentication'
 
export default function Nav() 
{
  const {token , setToken} = useContext(authContext)
  const usenav = useNavigate()
  const logout = () => 
  {
    console.log('log out');
    localStorage.removeItem('tkn')
    setToken(null)
    usenav('/loguser')
  }
  return <>
  <nav className={desgin.bg_nav +" navbar navbar-expand navbar-light py-3 bg-light"}>
    <div className="container">
      {token?<>
       <Link className="navbar-brand fw-bold fs-4 text-success" to="/userhome">
          <img className={`${desgin.size}`} src={logo} alt='Fresh Cart Logo'/>
      </Link>
      </>:<>
      <Link className="navbar-brand fw-bold fs-4 text-success" to="/home">
          <img className={`${desgin.size}`} src={logo} alt='Fresh Cart Logo'/>
      </Link>
      </>}
     
      
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto align-items-center"> 
       
          {token? <>
            <li className="nav-item">
              <div className={desgin.signn1}>
                <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="m1.5 13v1a.5.5 0 0 0 .3379.4731 18.9718 18.9718 0 0 0 6.1621 1.0269 18.9629 18.9629 0 0 0 6.1621-1.0269.5.5 0 0 0 .3379-.4731v-1a6.5083 6.5083 0 0 0 -4.461-6.1676 3.5 3.5 0 1 0 -4.078 0 6.5083 6.5083 0 0 0 -4.461 6.1676zm4-9a2.5 2.5 0 1 1 2.5 2.5 2.5026 2.5026 0 0 1 -2.5-2.5zm2.5 3.5a5.5066 5.5066 0 0 1 5.5 5.5v.6392a18.08 18.08 0 0 1 -11 0v-.6392a5.5066 5.5066 0 0 1 5.5-5.5z" fill="#7D8590"></path></svg>
                <Link className={`${desgin.l} nav-link active`} to="/profile">Profile</Link>
              </div>
            </li>
            <li>
                <span onClick={logout} style={{cursor:'pointer'}}className={`${desgin.Red} nav-link active d-flex gap-1 fw-bold`}>
                <div className={desgin.signn1}>
                  <svg viewBox="0 0 512 512">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>
                   LogOut</span>
              {/* <span className={desgin.Btnn1}>
                <div className={desgin.signn1}><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
              <div className={desgin.text1}> الخروج</div>
            </span> */}
            </li>
            </> :<>  
            <li className="nav-item">
              <Link className={`${desgin.l} nav-link active`}  to="/loguser">تسجيل الدخول</Link>
            </li>
            {/* <li className="nav-item">
              <Link className={`${desgin.l} nav-link active`} to="/reqChoose">Register</Link>
            </li> */}
            </> }
            {
              token?<>
              </> :<>
                <li className="nav-item">
                  <Link className={`${desgin.l} nav-link active`}  to="#"> تواصل معنا</Link>
                </li>
                <li className="nav-item">
                  <Link className={`${desgin.l} nav-link active`}  to="/#aboutUs"> من نحن  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${desgin.l} nav-link active`}  to="/# "> الرئيسية</Link>
                </li> 
              </>
            }
           
        </ul>
      </div>
    </div>
</nav>


  </>
}
