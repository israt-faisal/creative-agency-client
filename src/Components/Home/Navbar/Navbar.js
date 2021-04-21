import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logos/logo.png';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <img className="offset-md-1" style={{height:'80px'}} src={logo} alt=""/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" style={{marginRight:"100px"}} id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <Link class="nav-link active me-5" to="/home" aria-current="page"> <strong> Home</strong></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5" to="/portfolio"><strong>Our Portfolio</strong></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5" to="/team"><strong>Our Team</strong></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5" to="/contact"><strong>Contact Us</strong></Link>
                        </li>
                    </ul>
                    <Link to="/login"><button style={{width:'100px'}} className="btn btn-dark">Login</button></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;