import React, { useState } from 'react';
import logo from '../../../Images/logos/logo.png';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faUserPlus, faHdd } from '@fortawesome/free-solid-svg-icons';
import {faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import './Sidebar.css';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useEffect } from 'react';

const Sidebar = () => {
  
  const [loginUser, setLoginUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
      fetch('http://localhost:5000/isAdmin', {
          method: 'POST',
          headers: { 'content-type': 'application/json'},
          body: JSON.stringify({email: loginUser.email})

      })
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, [])

    return (
       <div className="d-flex justify-content-between">
            <div className="col-md-3 ms-4 mb-5 py-5 px-4 flex-column">
            <img style={{height:'50px'}} src={logo} alt=""/>
            <br/>
            <br/>
            <br/>
          <ul className="list-unstyled sidebar" style={{textDecoration:"none"}}> 
          
          {isAdmin ?
          <div>
              <div className="row">

              <li className="mb-3"> 
             <h5> <Link to="/adminServiceList" className="text-dark" style={{textDecoration:'none'}}>
                  <FontAwesomeIcon className="icon" icon={faHdd}/><span className="ms-1"> Admin's Service List</span></Link></h5>
              </li>

              <li className="mb-3"> 
             <h5> <Link to="/addService" className="text-dark" style={{textDecoration:'none'}}>
                  <FontAwesomeIcon className="icon" icon={faPlus}/><span className="ms-1"> Add Service</span></Link></h5>
              </li>

              <li className="mb-3"> 
             <h5> <Link to="/makeAdmin" className="text-dark" style={{textDecoration:'none'}}>
                  <FontAwesomeIcon className="icon" icon={faUserPlus}/><span className="ms-1"> Make Admin</span></Link></h5>
              </li>
              </div>
              
              </div> 
              :
         <div>
             <div className="row">
            <li className="mb-3">  
            <h5><Link to="/order" className="text-dark" style={{textDecoration:'none'}}>
            <FontAwesomeIcon className="icon" icon={faShoppingCart}/><span className="ms-1"> Order</span> 
            </Link></h5>
                </li>

          <li className="mb-3"> 
             <h5> <Link to="/serviceList" className="text-dark" style={{textDecoration:'none'}}>
                  <FontAwesomeIcon className="icon" icon={faHdd}/><span className="ms-1"> Service List</span></Link></h5>
              </li>

          <li className="mb-3"> 
             <h5> <Link to="/review" className="text-dark" style={{textDecoration:'none'}}>
              <FontAwesomeIcon className="icon" icon={faCommentAlt}/><span className="ms-1"> Review</span></Link></h5>
              </li>
              </div> 
             
          </div> 
       
}

              

            </ul>

        </div>
       </div>
    );
};

export default Sidebar;