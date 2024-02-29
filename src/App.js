import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Product from './Product/Product'
// import Reg from './Reg/Reg'
import Login from './Login/Login'
import Notfound from './Notfound/Notfound'
import Cat from './Catigores/Cat'
// import { Provider } from 'react-redux'
// import { myStore } from './Redux/Redex'
import Register from './Register/Register';
import Profile from './Profile/Profile'
import  AuthProvider  from './Context/authentication'
import ProtectedRoute from './Test/Test'
import Home from './General/General'
import ReqChoose from './ReqChoose/ReqChoose'
import RegCompany from './RegCompany/RegCompany'
import LoginUser from './LoginUser/LoginUser'
import { Toaster } from 'react-hot-toast'
import { Offline } from 'react-detect-offline';
import ConfirmEmail from './ConfirmEmail/ConfirmEmail'
import { QueryClient, QueryClientProvider } from 'react-query'
import Company from './Company/Company'
import SubCompanyRecruitment from './Company/SubCompanyRecruitment'
import SubCompanyGeneral from './Company/SubCompanyGeneral'

// import Register from './RegCompany/Reg';

export default function App() 
{
  const route = createBrowserRouter([
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
  ])
  
  let clientQuery = new QueryClient();

  return<>
  <QueryClientProvider client={clientQuery}>
    <AuthProvider > 
             <RouterProvider router={route}/>
        <Toaster  position="top-center" reverseOrder={false}/>
    </AuthProvider>
  </QueryClientProvider>
    <Offline>
          <div className='position-fixed bottom-0 start-0 bg-dark text-white p-3 rounded-3'>
            <h2>Ooooooooops.. You are Offline now.</h2>
          </div>
        </Offline>
  </> 
  }

