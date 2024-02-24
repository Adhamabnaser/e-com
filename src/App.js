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
            {path : '/product',element :<ProtectedRoute><Product/></ProtectedRoute> },
            {path : '/profile',element :<ProtectedRoute><Profile/></ProtectedRoute> },
            {path : '/log',element : <Login/>},
            {path : '/loguser',element : <LoginUser/>},
            {path : '/reqChoose',element : <ReqChoose/>},
            {path : 'reg',element : <Register/>},
            {path : 'regCom',element : <RegCompany/>},
            {path : 'cat',element : <ProtectedRoute><Cat/></ProtectedRoute> },
            {path : '*',element : <Notfound/>},
          ]
  }
  ])
  return<>
    <AuthProvider> 
             <RouterProvider router={route}/>
    </AuthProvider>
  </> 
  }

