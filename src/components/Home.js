import React from 'react';
import Nav from '../components/elements/Nav';
import Aside from '../components/elements/Aside/Aside';
import PostsIndex from './posts/Index';

const Home = () => {      
    return(
        <>
            <section className="home-page">
                <Nav />
                <PostsIndex />
                <Aside />
            </section>
            <style jsx>{`
                .home-page {
                    display: flex;
                    justify-content: center;
                    width: 1280px;
                    margin: 0 auto;
                }
            `}</style>
        </>
    );
}

export default Home;