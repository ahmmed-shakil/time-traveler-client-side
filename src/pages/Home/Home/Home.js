import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation/Navigation';
import ExploreWatchesSection from '../ExploreWatchesSection/ExploreWatchesSection';
import HeroSection from '../HeroSection/HeroSection';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HeroSection></HeroSection>
            <ExploreWatchesSection></ExploreWatchesSection>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;