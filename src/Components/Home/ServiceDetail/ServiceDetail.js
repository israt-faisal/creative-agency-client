import React from 'react';



const ServiceDetail = (props) => {
    const {image, title, description} = props.serviceDetail;
    console.log(props);
   

    return (
        
        
            <div class="services h-100 pt-5 g-4">
                
                    <img style={{ height: '70px', width: '70px', display:'block', marginLeft:'auto', marginRight:'auto' }} class="card-img-top" src={image} alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">{title}</h5>
                        <p class="card-text text-center">{description}</p>
                        
                    </div>
                   
           
        </div>
    );
};

export default ServiceDetail;