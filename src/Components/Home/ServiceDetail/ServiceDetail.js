import React from 'react';

const ServiceDetail = ({ service }) => {

    return (
        
        
            <div class="col-md-4 services h-100 pt-5 g-4">
                
                    <img style={{ height: '70px', width: '70px', display:'block', marginLeft:'auto', marginRight:'auto' }} class="card-img-top" src={service.image}  alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">{service.title}</h5>
                        <p class="card-text text-center">{service.description}</p>
                    </div>
               
           
        </div>
    );
};

export default ServiceDetail;