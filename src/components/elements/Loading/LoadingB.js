import React from 'react';

const LoadingB = () => {
    return(
        <>
            <div className="loading">
                <div className="spinner"></div>
            </div>
            
            <style jsx>{`
                .loading {
                    width: 100vw;
                    height: 100vh;
                    transition: all 1s;
                    background-color: #00AEBC;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    position: fixed;
                }
                .spinner {
                    width: 100px;
                    height: 100px;
                    background-color: #fff;
                    border-radius: 100%;
                    animation: sk-scaleout 1.0s infinite ease-in-out;
                    top: 45vh;
                    left: 50vw;
                    position: fixed;
                }
                /* ローディングアニメーション */
                @keyframes sk-scaleout {
                    0% {
                        transform: scale(0);
                    } 100% {
                        transform: scale(1.0);
                        opacity: 0;
                    }
                }
            `}</style>
        </>
    );
}

export default LoadingB;