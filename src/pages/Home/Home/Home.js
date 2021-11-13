import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation/Navigation';
import ExploreWatchesSection from '../ExploreWatchesSection/ExploreWatchesSection';
import HeroSection from '../HeroSection/HeroSection';
import NewsLetter from '../NewsLetter/NewsLetter';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HeroSection></HeroSection>
            <ExploreWatchesSection></ExploreWatchesSection>
            <Reviews></Reviews>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;