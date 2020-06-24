import React from 'react';

const Loading = () => {
    return(
        <>
            <div className="loading">
                <div className="spinner">
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                </div>
            </div>
            
            <style jsx>{`
                .spinner {
                    width: 50px;
                    height: 50px;
                    top: 45vh;
                    left: 50vw;
                    position: fixed;
                    -webkit-animation: sk-rotate 2.0s infinite linear;
                    animation: sk-rotate 2.0s infinite linear;
                }
                
                .dot1, .dot2 {
                    width: 60%;
                    height: 60%;
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    border-radius: 100%;
                    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
                    animation: sk-bounce 2.0s infinite ease-in-out;
                }
                .dot1 {
                    background: #1DA1F2;
                }
                .dot2 {
                    background: #00AEBC;
                    top: auto;
                    bottom: 0;
                    -webkit-animation-delay: -1.0s;
                    animation-delay: -1.0s;
                }
                
                @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
                @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}
                
                @-webkit-keyframes sk-bounce {
                    0%, 100% { -webkit-transform: scale(0.0) }
                    50% { -webkit-transform: scale(1.0) }
                }
                
                @keyframes sk-bounce {
                    0%, 100% { 
                    transform: scale(0.0);
                    -webkit-transform: scale(0.0);
                    } 50% { 
                    transform: scale(1.0);
                    -webkit-transform: scale(1.0);
                    }
                }
            `}</style>
        </>
    );
}

export default Loading;