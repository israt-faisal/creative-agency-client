import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import AdminServiceList from '../../Admin/AdminServiceList/AdminServiceList';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {
    const [clientOrder, setClientOrder] = useState([]) ;
    console.log(clientOrder);
    const [loginUser, setLoginUser] = useContext(UserContext);

    useEffect (() =>{
        fetch(`http://localhost:5000/clientOrder?email=${loginUser.email}`)
        .then(res => res.json())
        .then(data => setClientOrder(data))
    }, []) 

    return (
        <div className= "d-flex ms-3 me-5 justify-content">
            <div className="col-md-3">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 ms-5 mt-5">
            <h3>Service Order List</h3>
            <h5>Here's the order detail of yours...<span className="text-success"> {loginUser.name}</span></h5>
            <div style={{ background: 'aliceBlue' }}>
                <br/>
            {
                clientOrder.map(services => <div className="row justify-content-center" >
                <div className="card col-md-4 p-3 m-3" style={{ borderRadius: '20px', height: '25vh' }}>
                    <div className="card-body">
                      
                        <div>
                        <h5 className="card-title text-success ">{services.service}</h5>
                        <p className="card-text text-warning">{services.details}</p>
                        </div>
                        </div>
                        </div>
                    </div>)
            }
            </div>
           

        </div>
        </div>
    );
};

export default ServiceList;