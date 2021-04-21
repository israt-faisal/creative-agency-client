import React from 'react';
import slack from '../../../Images/logos/slack.png';
import google from '../../../Images/logos/google.png';
import uber from '../../../Images/logos/uber.png';
import netflix from '../../../Images/logos/netflix.png';
import airbnb from '../../../Images/logos/airbnb.png';

const LogoPictures = () => {
    return (
        <div className="container-fluid d-flex justify-content-evenly" >
            <img style={{height:"50px"}} src={slack} alt=""/>
            <img style={{height:"50px"}} src={google} alt=""/>
            <img style={{height:"50px"}} src={uber} alt=""/>
            <img style={{height:"60px"}} src={netflix} alt=""/>
            <img style={{height:"60px"}} src={airbnb} alt=""/>
        </div>
    );
};

export default LogoPictures;