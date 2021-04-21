import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../../Images/carousel-1.png';
import carousel2 from '../../../Images/carousel-2.png';
import carousel3 from '../../../Images/carousel-3.png';
import carousel4 from '../../../Images/carousel-4.png';
import carousel5 from '../../../Images/carousel-5.png';
import './WorkCarousel.css';


const WorkCarousel = () => {
    return (
        <div className="container-carousel">
           <div>
           <h2 className="text-center" style={{color:'white'}} >Here are some of <span style={{ color: 'green' }}>our works</span></h2>
           </div>

<Carousel style={{marginTop:'100px'}} className="offset-md-1 row col-md-10">
           
           <Carousel.Item className="carousel-item">
                <img
                    className="d-block"
                    style={{height:'350px', width:'500px'}}
                    src={carousel1}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
                <img
                    className="d-block"
                    style={{height:'350px', width:'500px'}}
                    src={carousel2}
                    alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
                <img
                    className="d-block"
                    style={{height:'350px', width:'500px'}}
                    src={carousel3}
                    alt="Third slide"
                />

            </Carousel.Item>

            <Carousel.Item className="carousel-item">
                <img
                    className="d-block"
                    style={{height:'350px', width:'500px'}}
                    src={carousel4}
                    alt="fourth slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block"
                    style={{height:'350px', width:'500px'}}
                    src={carousel5}
                    alt="Fifth slide"
                />
            </Carousel.Item>
          
        </Carousel>

        </div>


    );
};

export default WorkCarousel;