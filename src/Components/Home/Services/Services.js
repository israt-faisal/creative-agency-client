import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

// const serviceInfo= [
//     {
//        "image" : 'https://i.ibb.co/NtFg9TM/service1.png' ,
//        "title":'Web & Mobile Design',
//        "description":'We craft stunning and amazing web UI, using a well drafted UX to fit your product.',
//     },
//     {
//         "image": 'https://i.ibb.co/6WSRMQp/service2.png' ,
//         "title":'Graphic Design',
//         "description":'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//     },
//     {
//         "image": 'https://i.ibb.co/2dhq0gR/service3.png' ,
//         "title":'Web Development',
//         "description":'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//     },
//     {
//         "image":' https://i.ibb.co/7jDt1z7/service4.png ',
//         "title":' Software Testing ',
//         "description":' With well written codes, we test amazing apps and software for all platforms, mobile and web apps in general.',
//     },
//     {
//         "image": 'https://i.ibb.co/DMfmns1/service5.png' ,
//         "title":'Web Design with WordPress',
//         "description":'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//     },
// ]

const Services = () => {
    
    const [allServices, setAllServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setAllServices(data))
    }, [])
  

   
  
  
    return (
        <section className="service-container" style={{marginTop:'150px'}}>
            <h1 className="text-center"><strong>Provide awesome <span style={{color:'green'}}>services</span></strong></h1>
            <br/>
           <div className="d-flex flex-wrap justify-content-around alignment">
                <div className="w-75 row pt-5">
            {
               allServices.map(serviceDetail => <Link style={{textDecoration: 'none', color:'black'}} className="col-md-4" to="/sidebar"><ServiceDetail serviceDetail={serviceDetail} key={serviceDetail.title}> </ServiceDetail></Link> )
               }
           
           </div>
           </div>
           
           
           </section>
    );
};

export default Services;