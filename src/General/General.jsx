<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react';
import logo from '../image/logo.png'
import desgin from '../Navbar/nav.module.css'
import toast from 'react-hot-toast'
import SvgDesgin from './../Svg/SvgDesgin';
import { useNavigate } from 'react-router-dom';
>>>>>>> e7290d2dbfc74fdcb9ec9324599fc69cd6fb5e98

import React, { useContext, useEffect ,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  Element } from 'react-scroll';
import { authContext } from '../Context/authentication'
import desgin from '../Navbar/nav.module.css'
import './General.css'
import pic from './../image/001 (1).png'
import pic1 from './../image/004.png'
import pic2 from './../image/Screenshot 2024-03-02 050453.png'
import pic3 from './../image/Screenshot 2024-03-02 063811.png'
import pic4 from './../image/Screenshot 2024-03-02 063850.png'
import pic5 from './../image/fatooo.png'
import pic6 from './../image/download.png'
import pic7 from './../image/mastercard.png'
import pic8 from './../image/a700e6eae0.png'
import logo from '../image/color.png'
import logo1 from '../image/White.png'
import android from '../image/WhatsApp Image 2024-03-05 at 17.46.38_611baa94.jpg'
import ios from '../image/WhatsApp Image 2024-03-05 at 17.47.00_893d933a.jpg'
import desgin2 from './general.module.css'

import $ from 'jquery'

// let boxMessage = document.getElementById('boxMessage')
// let buttON = document.getElementById('buttON')
// buttON.addEventListener('click', () => {
//    boxMessage.classList.remove('d-none')
//    buttON.classList.add('d-none')
// })

export default function Home() 
{
<<<<<<< HEAD
   const [isVisibleFirst, setIsVisibleFirst] = useState(true);
   const [isVisibleSecond, setIsVisibleSecond] = useState(false);
 
   

   const [imgClass, setImgClass] = useState(desgin.imgMobile1);

   useEffect(() => {

      const timeout = setTimeout(() => {
         setImgClass(desgin.imgMobile2);
       }, 550); 
   
      const firstTimer = setTimeout(() => {
         setIsVisibleFirst(false);
         setIsVisibleSecond(true);
       }, 500);
   
       
  
      return () => {
      
         clearTimeout(timeout);
         clearTimeout(firstTimer);
      };

      
    }, []);

   $(() => {
      $('#buttON').click(() => {
         $('#boxMessage').removeClass('d-none')
         $('#buttON').addClass('d-none')
      })
   })
   $(() => {
      $('.fa-xmark').click(() => {
         $('#boxMessage').addClass('d-none')
         $('#buttON').removeClass('d-none')
      })
   })
   const {token , setToken} = useContext(authContext)
   const usenav = useNavigate()
  const logout = () => 
  {
    console.log('log out');
    localStorage.removeItem('tkn')
    setToken(null)
    usenav('/loguser')
  }
 // de --=> دي يعتبر صفحه الهوم 

 //usless comment
 return<>
{isVisibleFirst && (
   <div className='first mt-5 fullscreenStyle' style={fullscreenStyle}>
     <img className='mt-5 imageStyle' src={logo} alt="FullScreenImage" style={imageStyle} />
   </div>
 )}

{isVisibleSecond && (

 <section>

 
<div id='boxMessage' className={desgin.container + ' d-none'}>
      <div className={desgin.nav_bar}>
      	<p className='pt-2 ps-2'>Chat</p>
        <div className={desgin.close}>
            <i className="fa-solid fa-xmark"></i>
         	<div className={desgin.one}></div>
         	<div className={desgin.two}></div>
        </div>
      </div>
      <div className={desgin.messages_area}>
        
        <div className={desgin.message + desgin.one}></div>
        <div className={desgin.message + desgin.two}></div>
        <div className={desgin.message + desgin.three}></div>
        <div className={desgin.message + desgin.four}></div>
        <div className={desgin.message + desgin.five}></div>
        <div className={desgin.message + desgin.six}></div>
      </div>
      <div className={desgin.sender_area}>
        <div className={desgin.input_place}>
        	<input placeholder="Send a message." className={desgin.send_input} type="text"/>
            <div className={desgin.send}>
            <svg className={desgin.send_icon} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
               <path fill="#6B6C7B" d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"></path>
            </svg>
        	</div>
      	</div>
      </div>
    <div></div></div>

      <div id='buttON' className={desgin.fixedMessage}>
             <i className="fa-solid fa-comment"></i>
      </div>

      <nav className={desgin.bg_nav +" navbar navbar-expand navbar-light py-3 bg-light fixed-top"}>
    <div className="container">
    {token?<>
       <Link className="navbar-brand fw-bold fs-4 text-success" to="/userhome">
          <img className={`${desgin.size}`} src={logo} alt='Fresh Cart Logo'/>
      </Link>
      </>:<>
      <a className="navbar-brand fw-bold fs-4 text-success" href="#">
          <img className={`${desgin.size}`} src={logo} alt='Fresh Cart Logo'/>
      </a>
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
                  <a className={`${desgin.l} nav-link active`}  href="#contact"> تواصل معنا</a>
                </li>
                <li className="nav-item">
                  <a className={`${desgin.l} nav-link active`}  href="#aboutUs"> من نحن  </a>
                </li>
                <li className="nav-item">
                  <a className={`${desgin.l} nav-link active`}  href="#"> الرئيسية</a>
                </li> 
              </>
            }
           
        </ul>
      </div>
    </div>
</nav>



    <header id='home' className={' d-flex flex-column justify-content-center align-items-center ' +  desgin.home}>
      <div className={desgin.darkHome + ' d-flex justify-content-center align-items-center gap-5'}>
         <div className='w-50 d-flex'>
            <div className='w-50 d-flex'>
               <img src={pic} className={ desgin.imgMobile+" rounded-5 "} alt="mobile" />
            </div>
            <div className='w-50 d-flex'>
               <img src={pic1} className={ ` ${imgClass} rounded-5 `} alt="mobile" />
            </div>
         </div>
         <div className='w-50'>
            <h1 className={desgin.font_style + ' fs-1 text-white text-center pb-5'}>خدمة للخدمات العامة</h1>
            <p className={desgin.font_style + ' fs-5 text-white text-center pb-4' }>التوظيف العمالة باسلوب جديد</p>
            <div className={'d-flex gap-3 justify-content-center' }>
               <div>
                  <a href="https://play.google.com/store/apps/details?id=com.dropidea.khedma"><img className=' border rounded-3 ' style={{width:"200px"}} src={android} alt="googleplay" /></a> 
               </div>
               <div>
               <img className='border rounded-3 ' style={{width:"200px"}} src={ios} alt="Appstore" /></div>
            </div>
         </div>
      </div>
    </header>
         {/*/////////////////////////////////////////////////////////////////////*/}
    <div className='mt-5 pt-5 container' id='aboutUs'>
      <div >
         <div className=' row' >
            <div className='col-lg-6 col-sm-12'>
               <div className=''>
                  <h2 className={desgin.right}>نبذة عن الشركة</h2>
                  <p className={desgin.right}>تطبيق "خدمة" للخدمات العامة ولاستقدام وتشغيل العمالة بكافة انواعها هو احد مشاريع شركة تسهيلات للدعاية وتسويق (ش.ش.و) ومقرها في منطقة القرين دولة الكويت ومرخصة تحت سجل تجارى رقم 481216 التي تتشكل من جهات وطنية تهتم بالصالح العام وتحقق نقلة نوعية في هذا النوع من الأعمال.</p>
                  <div className='d-flex flex-column text-decoration-none'>
                     <p className={desgin.right}> نحمل رؤية ورسالة وطنية وإنسانية في إدارة سوق العمل </p>
                     <p className={desgin.right}> نتولى كل الإجراءات بدءًا من دولة المصدر إلى الفحوصات والإقامة في دولة الكويت وذلك بأسعار تنافسية ورمزية وبأعلى قدر من الكفاءة وسرعة الإنجاز.</p>
                     <p className={desgin.right}>نعمل على تأهيل العمالة سواء كانت العمالة في المجال الطبي او المنزلي او التنظيف او اي مجال اخر المرشحة للعمل بالبلاد وإكسابها قدرًا من المعلومات عن ثقافة وتقاليد وعادات مجتمعنا والأسر الكويتية من خلال دورات تأهيلية في بلدها.</p>
                     <p className={desgin.right}>نضمن سلامة العمالة المستقدمة وخلوها من الأمراض قبل قدومها للبلاد وذلك بفحصها في المراكز المعتمدة من وزارة الصحة في الدولة المصدرة.</p>
                     <p className={desgin.right}>لدينا قاعدة بيانات وأرشيف يدار بأحدث وسائل التكنولوجيا ويضم معلومات وبيانات العمالة وطرق تحديد هويتها. نتفرد بخدمات المتابعة إلكترونيًا حيث يمكنك متابعة خطوات الاستقدام منذ تقديم الطلب وحتى حضور العمالة لحظة بلحظة.</p>
                     <p className={desgin.right}>لدينا فروع في كل محافظات الكويت بالجمعيات التعاونية، ولدينا مكاتب في عدد من دول العالم. "سوق الخدمة" يقدم لك باقة متنوعة من اليونيفورم وكافة احتياجات العمالة.</p> 
                     <p className={desgin.right}>من خلال موقعنا هذا يمكن تحميل تطبيق خدمة وإنهاء كافة الإجراءات إلكترونيًا (أون لاين) .</p> 
                  </div>
               </div>
            </div>
            <div className='col-lg-6 col0sm-12'>
            <img className={desgin.pic345} src={pic2} alt="num"/>
         </div>
         </div>
         {/*---------------------------------------------------------------------*/}
         <div className=' row  mt-5 py-5' >
               <div className='col-lg-6 col-sm-12'>
                 <img className={desgin.pic345} src={pic3} alt="num"/>
               </div>
            <div className='col-lg-6 col-sm-12'>
               <div className=''>
                  <h2 className={desgin.left}>الرسالة</h2>
                  <p className={desgin.right}>تطبيق "خدمة" للخدمات العامة ولاستقدام وتشغيل العمالة بكافة انواعها هو احد مشاريع شركة تسهيلات للدعاية وتسويق (ش.ش.و) ومقرها في منطقة القرين دولة الكويت ومرخصة تحت سجل تجارى رقم 481216 التي تتشكل من جهات وطنية تهتم بالصالح العام وتحقق نقلة نوعية في هذا النوع من الأعمال.</p>
                  <div className='d-flex flex-column '>
                     <p className={desgin.right}>نحن نسعى إلى تقديم تجربة استثنائية لعملائنا، حيث يكمن التميز في تأمين عمالة عالية الكفاءة في جميع المجالات سواء كانت في المجالات الطبية او المنزلي او التنظيف او اية خدمات اخرى والتي تلبي بدقة احتياجات أصحاب الأعمال. نسعى أيضًا إلى تعزيز ثقافة احترام حقوق العمال وأصحاب الأعمال، وذلك من خلال التركيز على المصلحة المشتركة ومبادئ حقوق الإنسان. بالإضافة إلى ذلك، نتعاون بفعالية في تنظيم النشاط وتعزيزه، ونسعى لتقديم صورة إيجابية عن الكويت في الساحة الدولية.</p>
                  </div>
               </div>
            </div>
         </div>
         {/*/////////////////////////////////////////////////////////////////////*/}
         <div className=' row  mt-5 py-5' >
            <div className='col-lg-6 col-sm-12'>
               <div className=''>
                  <h2 className={desgin.right}>الرؤية</h2>
                  <div className='d-flex flex-column '>
                      <p className={desgin.left}>تطبيق خدمة للخدمات العامة يعمل جاهدا ليكون الرائد في دولة الكويت في مجال خدماته. نحن نهدف إلى أن نكون الخيار الأول لكم في رحلة البحث عن العمالة في كافة المجالات المناسبة والماهرة، حيث نقدم أعلى مستويات الكفاءة والاحترافية لتلبية احتياجاتكم بشكل شامل وموثوق.</p>                      </div>
               </div>
            </div>
            <div className='col-lg-6 col-sm-12'>
            <img className={desgin.pic345} src={pic4} alt="num"/>
         </div>
         </div>
      </div>
    </div>
         {/*/////////////////////////////////////////////////////////////////////*/}
          <div className='container py-5'>
         <div>
            <div className='py-5'>
               <h1 className={desgin.font2 + ' text-center'}>شركاء النجاح</h1>
            </div>
            <div className='row'>
               <div className='col-lg-4'>
                  <div className={desgin.card + ' m-auto'}>
                     <img className={desgin.card+ ' w-100 h-100'} src={pic5} alt="fatoorh"/>
                  </div>
               </div>
               <div className='col-lg-4'>
                  <div className={desgin.card + ' m-auto'}>
                     <img className={desgin.card+ ' w-100 h-100'} src={pic6} alt="visa"/>
                  </div>
               </div>
               <div className='col-lg-4'>
                  <div className={desgin.card + ' m-auto'}>
                     <img className={desgin.card+ ' w-100 h-100'} src={pic7} alt="master card"/>
                  </div>
               </div>
            </div>
            <div className='row py-5 mt-5'>
            <div className='col-lg-6'>
                  <img src={pic8} alt="map" />
               </div>
               <div className='col-lg-6' id='contact'>
                  <h3 className={desgin.right1 + ' fw-bold'}>اهدافنا</h3>
                  <div className='d-flex flex-column '>
                     <p className={desgin.right1}>نحن نسعى جاهدين لتحقيق العديد من الأهداف الهامة والضرورية في مجال خدمتنا</p>
                     <p className={desgin.right1}>توفير عمالة طبية او منزلية مدربة ومؤهلة او في اي مجال اخر يتطلبة السوق الكويتي .</p>
                     <p className={desgin.right1}>كسر الممارسات الاحتكارية والمبالغة في رسوم الاستقدام</p>
                     <p className={desgin.right1}>تصويب مسار سوق استقدام وتشغيل العمالة وإعادة الثقة إليه</p>
                     <p className={desgin.right1}>تذليل عقبات وإجراءات الاستقدام وتحقيق سرعة العمل والإنجاز.</p>
                     <p className={desgin.right1}>خلق علاقات إنسانية سليمة بين رب العمل والعامل وضمان رضا كافة الأطراف</p>
                     <p className={desgin.right1}>توفير قاعدة بيانات إلكترونية تشمل الأيدي العاملة المتاحة والتي تم استقدامها ومصادر تصدير العمالة</p>
                     <p className={desgin.right1}>تحسين صورة الكويت في المنظمات الدولية ذات العلاقة بهذا المجال.</p>
                     <p className={desgin.right1}>بناء علاقات متينة مع الدول المصدرة للعمالة</p>
                     <p className={desgin.right1}>نحن نعمل جاهدين على تحقيق هذه الأهداف من خلال جهودنا المستمرة والشفافية في العمل والتزامنا بتقديم أفضل الخدمات لزبائننا في دولة الكويت وخارجها</p>
                   </div>
               </div>
            </div>
         </div>
        </div>
         {/*/////////////////////////////////////////////////////////////////////*/}
         <footer className={ desgin2.bgMainColor +' text-white pb-2 mb-0 '}  >
          <div className='container px-5'>
            <div className='row'>
               {/*/////////////////////////////////////////////////////////////////////*/}
              <div className='col-lg-4 my-3'>
                <h2 className='py-2 text-white'> تواصل معنا</h2>
                <input type="text" required placeholder='أسمك' className=' customInput form-control bg-transparent my-2  p-2 '/>
                <input type="email" required placeholder='البريد الالكترونى' className=' customInput form-control bg-transparent my-2  p-2 '/>
                <input type="text" required placeholder='الهاتف' className=' customInput form-control bg-transparent my-2 p-2 '/>
                <textarea  className="border border-1 w-100 p-2 bg-transparent" required id=""  rows="5" placeholder="يهمنا سماع رأيك"></textarea>
              </div >
               {/*/////////////////////////////////////////////////////////////////////*/}
              <div  className='col-lg-4 my-3'>
                <img className={desgin2.footerImage} src={logo1} alt="" />
              </div>
               {/*/////////////////////////////////////////////////////////////////////*/}
              <div  className='col-lg-4 my-3'>
               <h2 className='py-2 text-white'>حمل التطبيق الان</h2>
               <div className={'d-flex gap-3 justify-content-center py-2' }>
               <div className='d-flex gap-2'>
                  {/* <button >GooglePlay</button> */}
                  <a href="https://play.google.com/store/apps/details?id=com.khedmah"><img className='border rounded-3 ' style={{width:"170px"}} src={android} alt="googleplay" /></a>
                  <img className='border rounded-3  ' style={{width:"170px"}} src={ios} alt="Appstore" />
               </div>
               <div>
               {/* <img className=' w-50' src={ios} alt="Appstore" /> */}
               </div>
            </div>
            <div>
              <h2 className='py-2'>روابط مهمة</h2>
              <hr />
              <h6 className='py-1'><a className='text-white  py-1'  href="https://www.khedmah.site/terms-of-use">شروط الاستخدام </a></h6>
              <h6 className='py-1'><a className='text-white py-1' href="https://www.khedmah.site/privacy-terms"> شروط الخصوصية </a></h6>
              <h6 className='py-1'><a  className='text-white  py-1'href="https://www.khedmah.site/cookie-terms"> شروط الكوكيز </a></h6>
              <h6 className='py-1'><a  className='text-white  py-1'  href=""> من نحن </a></h6>
              <h6 className='py-1'><a className='text-white py-1'   href="https://www.khedmah.site/privacy-terms"> المعلومات التي نجمعها </a></h6>
            </div>
              </div>
                 {/*/////////////////////////////////////////////////////////////////////*/}
            </div>
              {/* <p className='p-2'>Footer</p>
              <p className='pb-0'>Copyright 2022</p> */}

          </div>
        </footer>
        </section>
      
      	)}
         </>
=======

  const [isVisibleFirst, setIsVisibleFirst] = useState(true);
  const [isVisibleSecond, setIsVisibleSecond] = useState(false);
let navigate = useNavigate()
  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setIsVisibleFirst(false);
      setIsVisibleSecond(true);
    }, 500);

    return () => clearTimeout(firstTimer);
  }, []);

  const aboutUs =  (() => 
  {
    toast.success('Welcome to Khedma web site.', {
      style: {
        border: '1px solid #1acaaa',
        padding: '16px',
        color: '#1acaaa',
      },
      iconTheme: {
        primary: '#1acaaa',
        secondary: '#FFFAEE',
      },
    });
  })
  // <SvgDesgin/>

 //usless comment
 return <>
 {isVisibleFirst && (
   <div className='first mt-5' style={fullscreenStyle}>
     <img className='mt-5' src={logo} alt="FullScreenImage" style={imageStyle} />
   </div>
 )}

 {isVisibleSecond && (
  
  <div >
    <SvgDesgin/>
        <div  className={desgin.home + ''}>
            <div>
             <a href="https://www.khedmah.site/"> <button onClick={()=>{aboutUs()}} className={desgin.btn}>More About us</button></a>
            </div>  
      </div>
 </div>
 )}
</>
>>>>>>> e7290d2dbfc74fdcb9ec9324599fc69cd6fb5e98
}


const fullscreenStyle = {
<<<<<<< HEAD
   position: 'fixed',
   top: '10%',
   left: 0,
   width: '100%',
   height: '70%',
   backgroundColor: 'white',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
 };
 
 const imageStyle = {
   maxWidth: '100%',
   maxHeight: '100%',
   objectFit: 'cover',
 };
 
=======
  position: 'fixed',
  top: '10%',
  left: 0,
  width: '100%',
  height: '70%',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
};

>>>>>>> e7290d2dbfc74fdcb9ec9324599fc69cd6fb5e98
