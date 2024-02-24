import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../image/خدمه.png'
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
  <nav className="navbar navbar-expand navbar-light bg-light py-3">
    <div className="container">
      <Link className="navbar-brand fw-bold fs-4 text-success" to="/home">
          <img className={`${desgin.size} `} src={logo} alt='Fresh Cart Logo'/>
      </Link>
      
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {token?<>
            <li className="nav-item">
            <Link className={`${desgin.l} nav-link active`} aria-current="page" to="/product">Product</Link>
          </li>
          <li className="nav-item">
            <Link className={`${desgin.l} nav-link active`} to="/cat">Catigories</Link>
          </li>
          </> : ''}
        </ul>

        <ul className="navbar-nav ms-auto align-items-center">  
          {token? <>
            <li className="nav-item">
              <Link className={`${desgin.l} nav-link active`} to="/profile">profile</Link>
            </li>
            <li>
              <span onClick={logout} style={{cursor:'pointer'}}className={`${desgin.Red} nav-link active`}>Log Out</span>
            </li>
            </> :<>  <li className="nav-item">
              <Link className={`${desgin.l} nav-link active`}  to="/log">Log In</Link>
            </li>
            <li className="nav-item">
              <Link className={`${desgin.l} nav-link active`}  to="/loguser">Log user</Link>
            </li>
            <li className="nav-item">
              <Link className={`${desgin.l} nav-link active`} to="/reqChoose">Register</Link>
            </li>
            </> }
        </ul>
      </div>
    </div>
</nav>


  </>
}
