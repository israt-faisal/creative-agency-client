import React from 'react';
import service1 from '../../../Images/icons/service1.png';
import service2 from '../../../Images/icons/service2.png';
import service3 from '../../../Images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const serviceInfo= [
    {
        image: service1 ,
        title:'Web & Mobile Design',
        description:'We craft stunning and amazing web UI, using a well drafted UX to fit your product.'
    },
    {
        image: service2 ,
        title:'Graphic Design',
        description:'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        image: service3 ,
        title:'Web Development',
        description:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
]

const Services = () => {
    return (
        <section className="service-container" style={{marginTop:'150px'}}>
            <h1 className="text-center"><strong>Provide awesome <span style={{color:'green'}}>services</span></strong></h1>
            <br/>
            <div className="d-flex justify-content-around">
                <div className="w-75 row pt-5">
            {
               serviceInfo.map(service => <ServiceDetail service={service}> </ServiceDetail>)
           }
           </div>
           </div>
           </section>
    );
};

export default Services;