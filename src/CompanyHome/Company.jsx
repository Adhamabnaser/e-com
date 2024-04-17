
import axios from 'axios';
import React from 'react'
import logo from '../image/logo.png'
import company from '../image/company.jpg'
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export default function Company() {

    const {data,isLoading} = useQuery('Allcompanies',getAllcompanies)

    
    async function  getAllcompanies() {
        return await axios.get('https://khdmah.online/api/homePageUser')
        // .then(response => {
        //     console.log(response.data);    
        // });
  
      }
      console.log(data?.data.companies);
      console.log(data?.data.logoUrlCompany);

    function toste (){
        toast('Good Job!', {
            icon: '👏',
          });
          console.log("success");
    }

    if (isLoading) {
        return <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="loader">
          <ColorRing
            visible={true}
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
        </div>
      }
    

    
    console.log(data?.data.companies.company_information);

      console.log('helo');

  return <>


<div className='container pt-5 ' style={{  marginTop: '150px' }}>

            <div className='row g-4'>

             {data?.data.companies.map(function (companyItems, idx) {
          const createdAtDate = new Date(companyItems.created_at);
          const formattedDate = createdAtDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          });

          return (
            <div key={idx} className='col-md-6 px-5'>
              <div className='border rounded shad'>
              <Link to={`/subCompany/${companyItems.name_en} `}>
                
                <img className='w-100' style={{ width: '100%', height: '300px' }} src={company} alt="company" />
                <div className='border '>
                  <h1 className='text-center main-color'>{companyItems.name_en}</h1>
                  <h3 className='text-center main-color2'>{companyItems.name_ar}</h3>
                  <p className='text-muted text-center'>{formattedDate}</p>
              

                </div>
                </Link>
              </div>
            </div>
          );
        })}


            </div>

    </div>
  
  
  
  </>
  
}

