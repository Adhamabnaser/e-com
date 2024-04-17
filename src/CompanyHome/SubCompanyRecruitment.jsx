
import axios from 'axios';
import React from 'react';
import hire from '../image/hire.jpg';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';


export default function SubCompanyRecruitment() {
  const { data, isLoading } = useQuery('Allcompanies', getAllcompanies);

  async function getAllcompanies() {
    return await axios.get('https://khdmah.online/api/homePageUser');
  }

  console.log(data?.data.companies);
  console.log(data?.data.logoUrlCompany);

  function toste() {
    toast('Good Job!', {
      icon: '👏',
    });
    console.log('success');
  }

  if (isLoading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
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
    );
  }

  console.log(data?.data.companies.company_information);
  console.log('helo');

  const firstCompany = data?.data.companies[0];
  const secondCompany = data?.data.companies[2];

  return (
    <>
    
      <div className="container pt-5 " style={{ marginTop: '150px' }}>
        <div className="row g-4">
          <div key={0} className="col-md-1 px-5"></div>
          <div key={1} className="col-md-9 px-5">
            <div className="">
              {/* <div className="border ">
                <img className="w-100" style={{ width: '100%', height: '300px' }} src={hire} alt="" />
                <h1 className="text-center main-color">{firstCompany.name_en}</h1>
                <h3 className="text-center main-color2">{firstCompany.name_ar}</h3>
              </div> */}
              {firstCompany.sub_company_type.slice(0, 3).map((subCompany) => (
                <div key={subCompany.id} className=" my-5 border rounded shad">
                  <img className="w-100" style={{ width: '100%', height: '300px' }} src={hire} alt="" />
                  <h1 className="text-center main-color">{subCompany.name_en}</h1>
                  <h3 className="text-center main-color2">{subCompany.name_ar}</h3>
                  {subCompany.company_information.map((companyInfo) => (
                    <div key={companyInfo.id} className="border ">
                      {/* <span>
                        {' '}
                        'company_id'<p className="text-danger text-center">{companyInfo.company_id}</p>{' '}
                      </span>
                      <span>
                        {' '}
                        company_type_id<p className="text-dark text-center">{companyInfo.company_type_id}</p>{' '}
                      </span>
                      <img src={companyInfo.company_logo} alt="" />
                      <p>{companyInfo.busy}</p> */}
                      <div className="border p-3 ">
                        {companyInfo.user && (
                          <div>
                            <h2 className='main-color'>user info</h2>
                            <li className='list-unstyled'>
                              <span className='main-color2 h5'> Name : </span> {companyInfo.user.full_name}{' '}
                            </li>
                            <li className='list-unstyled'>
                              <span className='main-color2 h5'> Email : </span> {companyInfo.user.email}{' '}
                            </li>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
