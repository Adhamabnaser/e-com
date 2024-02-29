import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../image/logo.png'
import tittle from '../image/tittle.png'
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
    usenav('/log')
  }
  return <>
  {/* <nav className="navbar navbar-expand-lg  mb-5 navbar-light bg-nav">
    <div className="container d-flex justify-content-around">
      <div>
        
      <Link className="navbar-brand fw-bold fs-4 text-success" to="/home">
        <img className={`w-5`} src={logo} alt='Khdemah Logo'/>
          <img className={`w-10 `} src={tittle} alt='Khdemah Logo'/>
      </Link>
      
      </div>
      <div>
        
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
         
            <li className="nav-item">
            <Link className={`${desgin.l} nav-link active text-white`} aria-current="page" to="/subCompany/Recruitment">Recruitment</Link>
          </li>
          <li className="nav-item">
            <Link className={`${desgin.l} nav-link active text-white`} to="/subCompany/General">General</Link>
          </li>
          
        </ul>

        <ul className="navbar-nav ms-auto align-items-center">  
          {token? <>
            <li className="nav-item">
              <Link className={`${desgin.l} nav-link active text-white`} to="/profile">profile</Link>
            </li>
            <li>
              <p onClick={logout} style={{cursor:'pointer'}}className={`${desgin.Red} nav-link active text-white pt-3`}>LogOut</p>
            </li>
            </> :<>  
            <li className="nav-item">
              <Link className={`${desgin.l} nav-link active text-white`}  to="/loguser">Login</Link>
            </li>
            <li className="nav-item">
              <Link className={`${desgin.l} nav-link active text-white`} to="/reqChoose">Register</Link>
            </li>
            </> }
        </ul>
      </div>
      </div>
    </div>
</nav> */}

<nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 ">
  <div className="container">
    {//---------------------------
    token? <>    <Link className="navbar-brand fs-3 fw-medium" to="/Product"><i className="fa-solid fa-cart-shopping main-color"></i> Fresh Cart</Link></>  : <>    <Link className="navbar-brand fs-3 fw-medium" to="/log"><i className="fa-solid fa-cart-shopping main-color"></i> Fresh Cart</Link> </>
    //----------------------------
    }
    
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
       {
        //------------------------
       token?  <> <li className="nav-item">
          <Link className="nav-link" to="Product">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">Categories</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/allorders">All Orders</Link>
        </li> </>  : "" 
        //===========================
      }
      </ul>
      
      <ul className="navbar-nav ms-auto">
        {
        //
        token?<>
         
                <li className="nav-item">
                <Link className="nav-link" to="profile">Profile</Link>
              </li>
              <li className="nav-item">
              <span onClick={logout} style={{cursor : "pointer"}} className="nav-link ">Log Out</span>
              </li>
        </>:
        <>        
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="reg">Register</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/log">Log In</Link>
              </li>

        </>
        //-----------------------------------------
      }
       
      </ul>
    </div>
  </div>
</nav>
  </>
}


// <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
