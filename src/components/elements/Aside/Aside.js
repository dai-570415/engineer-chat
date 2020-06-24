import React from 'react';
import Anime from './Anime';
import News from './News';

const Aside = () => {
    return(
        <>
            <aside>
                <div className="aside">
                    <Anime />
                    <News />
                </div>
            </aside>
            <style jsx>{`
                aside {
                    width: 300px;
                    padding: 25px;
                }
                .aside {
                    background: #E9F1F2;
                }
            `}</style>
        </>
    );
}

export default Aside;