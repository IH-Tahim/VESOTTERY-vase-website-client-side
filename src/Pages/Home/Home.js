import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import HomeBlogs from './HomeBlogs/HomeBlogs';
import HomeProduct from './HomeProduct/HomeProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProduct></HomeProduct>
            <Reviews></Reviews>
            <HomeBlogs></HomeBlogs>
            <Feature></Feature>
        </div>
    );
};

export default Home;