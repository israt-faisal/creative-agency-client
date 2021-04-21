import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LogoPictures from '../LogoPictures/LogoPictures';
import Services from '../Services/Services';
import WorkCarousel from '../WorkCarousel/WorkCarousel';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <LogoPictures></LogoPictures>
            <Services></Services>
            <WorkCarousel></WorkCarousel>
            <ClientsFeedback></ClientsFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;