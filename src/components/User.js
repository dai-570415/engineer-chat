import React from 'react';
import Nav from '../components/elements/Nav';
import Aside from '../components/elements/Aside/Aside';
import UserCreate from './user/Create';
// import UserUpdate from './user/Update';

const User = () => {      
    return(
        <>
            <section className="user-page">
                <Nav />
                <div className="user">
                    <div className="user-set">
                        <UserCreate />
                        {/* <UserUpdate /> */}
                    </div>
                </div>
                <Aside />
            </section>
            <style jsx>{`
                .user-page {
                    display: flex;
                    justify-content: center;
                    width: 1280px;
                    margin: 0 auto;
                }
                .user {
                    border-right: 1px solid #ccc;
                }
                .user-set {
                    width: 500px;
                    max-width: 500px;
                    margin: 0 auto;
                    background: rgba(255,255,255,.4);
                }
            `}</style>
        </>
    );
}

export default User;