import React, { useContext } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Product from './Product/Product'
// import Reg from './Reg/Reg'
import Notfound from './Notfound/Notfound'
import Cat from './Catigores/Cat'
// import { Provider } from 'react-redux'
// import { myStore } from './Redux/Redex'
import Register from './Register/Register';
import Profile from './Profile/Profile'
import  AuthProvider, { authContext }  from './Context/authentication'
import ProtectedRoute from './Test/Test'
import Home from './General/General'
import ReqChoose from './ReqChoose/ReqChoose'
import RegCompany from './RegCompany/RegCompany'
import Company from './CompanyHome/Company'
import Recruitment from './CompanyHome/Recruitment'
import ShowCompany from './CompanyHome/ShowCompany'
import Service from './CompanyHome/Service'
import SubCompanyGeneral from './CompanyHome/SubCompanyGeneral'
import SubCompanyRecruitment from './CompanyHome/SubCompanyRecruitment'
import LoginUser from './LoginUser/LoginUser'
import { Toaster } from 'react-hot-toast'
import { Offline } from 'react-detect-offline';
import ConfirmEmail from './ConfirmEmail/ConfirmEmail'
import { QueryClient, QueryClientProvider } from 'react-query'
<<<<<<< HEAD
import ForgetPass from './ForgetPass/ForgetPass'
import UserHome from './UserHome/UserHome'
import CompanyHome from './CompanyHome/CompanyHome'
import ResetPass from './ForgetPass/ResetPass'
import Cart from './Cart/Cart'
import Setting from './Setting/Setting'
import ChangePass from './Setting/ChangePass'
import Curr from './Setting/Curr'
import SendUs from './Setting/SendUs'
import AboutUs from './Setting/AboutUs'
=======
import Company from './Company/Company'
import SubCompanyRecruitment from './Company/SubCompanyRecruitment'
import SubCompanyGeneral from './Company/SubCompanyGeneral'

// import Register from './RegCompany/Reg';
>>>>>>> e7290d2dbfc74fdcb9ec9324599fc69cd6fb5e98

// import Register from './RegCompany/Reg';
export default function App() 
{
  const route = createBrowserRouter([
<<<<<<< HEAD
    {   
      path : '',element :<AuthProvider><Layout/></AuthProvider> ,
      children:
      [
        {index : true ,element :<Home/> },
        {path : '/home',element : <Home/> },
        {path : '/product',element :<Product/>},
        {path : '/profile',element :<Profile/> },
        {path : '/userhome',element :<UserHome/> },
        {path : '/companyhome',element :<CompanyHome/> },
        {path : '/loguser',element : <LoginUser/>},
        {path : '/reqChoose',element : <ReqChoose/>},
        {path : '/reg',element : <Register/>},
        {path : '/regCom',element : <RegCompany/>},
        {path : 'cat',element : <Cat/> },
        {path : '/forgetPass',element : <ForgetPass/> },
        {path : '/resetpass',element : <ResetPass/> },
        {path : '/ConfirmEmail',element : <ConfirmEmail/> },
        {path : '/cart',element : <Cart/> },
        {path : 'Company',element : <Company/> },
        {path : 'Recruitment',element : <Recruitment/> },
        {path : 'ShowCompany',element : <ShowCompany/> },
        {path : 'Service',element : <Service/> },
        {path:'subCompany/Recruitment',element: < SubCompanyRecruitment /> },
        {path:'subCompany/General',element: < SubCompanyGeneral /> },
        {path : '/setting',element : <Setting/>},
        {path : '/changepass',element : <ChangePass/>},
        {path : '/curr',element : <Curr/>},
        {path : '/Sendus',element : <SendUs/>},
        {path : '/aboutus',element : <AboutUs/>},
    
        
        {path : '*',element : <Notfound/>},
      ]
    }
=======
  {   
    path : '',element :<AuthProvider><Layout/></AuthProvider> ,
        children:
          [
            {index : true ,element :<Home/> },
            {path : '/home',element : <Home/> },
            {path : '/product',element :<Product/>},
            {path : '/profile',element :<Profile/> },
            {path : '/log',element : <Login/>},
            {path : '/loguser',element : <LoginUser/>},
            {path : '/reqChoose',element : <ReqChoose/>},
            {path : 'reg',element : <Register/>},
            {path : 'regCom',element : <RegCompany/>},
            {path : 'cat',element : <Cat/> },
            {path : 'Company',element : <Company/> },
            {path:'subCompany/Recruitment',element: < SubCompanyRecruitment /> },
            {path:'subCompany/General',element: < SubCompanyGeneral /> },
            {path : 'ConfirmEmail',element : <ConfirmEmail/> },

            {path : '*',element : <Notfound/>},
          ]
  }
>>>>>>> e7290d2dbfc74fdcb9ec9324599fc69cd6fb5e98
  ])
  
  let clientQuery = new QueryClient();

  return<>
  <QueryClientProvider client={clientQuery}>
<<<<<<< HEAD
             <RouterProvider router={route}/>
        <Toaster  position="top-center" reverseOrder={false}/>
=======
    <AuthProvider > 
             <RouterProvider router={route}/>
        <Toaster  position="top-center" reverseOrder={false}/>
    </AuthProvider>
>>>>>>> e7290d2dbfc74fdcb9ec9324599fc69cd6fb5e98
  </QueryClientProvider>
    <Offline>
          <div className='position-fixed bottom-0 start-0 bg-dark text-white p-3 rounded-3'>
            <h2>Ooooooooops.. You are Offline now.</h2>
          </div>
        </Offline>
  </> 
  }

