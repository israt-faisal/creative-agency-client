import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Link} from 'react-router-dom';
import headerpic from '../../../Images/logos/headerphoto.png';
import './Header.css';
const Header = () => {
    return (
        <div className="mb-5">
            <div className="header">
            <Navbar></Navbar>
           
           <div className="mt-5 row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
               <h1><strong>Let's Grow Your <br/>
                   Brand To The <br/> Next Level</strong></h1>
               <h5>Lorem, ipsum dolor sit amet consectetur <br/> adipisicing elit. Distinctio eius nam, <br/> sequi esse sed quasi! Quas modi.</h5>
               <br/>
               <Link to="/sidebar"><button className="btn btn-dark me-5" style={{width:'150px'}} type="button">Hire us</button></Link>
               

           </div>
           <div className="col-md-6">
               <img style={{marginLeft:'100px',height:'400px'}} src={headerpic} alt=""/>
           </div>
           </div>
           </div>
           
        </div>
    );
};

export default Header;