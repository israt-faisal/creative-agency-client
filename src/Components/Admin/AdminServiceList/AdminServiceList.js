import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AdminServiceTable from './AdminServiceTable';


const AdminServiceList = () => {

    
    const [allOrder, setAllOrder] = useState([]) ;
    console.log(allOrder);
    

    useEffect (() =>{
        fetch('http://localhost:5000/allOrders')
        .then(res => res.json())
        .then(data => setAllOrder(data))
    }, []) 
   
    

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 ">
                <h3>Services List</h3>
                <div className="mt-5 w-100" style={{backgroundColor:'aliceblue', height:'100vh'}}>
               <AdminServiceTable allOrder={allOrder}></AdminServiceTable>
            </div>

            </div>
        </div>
    );
};

export default AdminServiceList;