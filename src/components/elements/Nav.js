import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import HomeIcon from '../../assets/img/home.png';
import SignOut from '../../components/FirebaseAuthHook/SignOut';
import Logo from '../../assets/img/logo.png';

const Nav = () => {
    return(
        <React.Fragment>
            <div className="nav">
                <img src={Logo} className="logo" alt="メインロゴ" />
                <Link to="/" className="link"><img src={HomeIcon} alt="icon" /></Link>
                <SignOut />
            </div>
            <style jsx>{`
                .nav {
                    width: 65px;
                    padding: 20px;
                    border-right: 1px solid #ccc;
                }
                .logo {
                    width: 40px;
                    margin: 0 0 20px 0;
                    right: 10px;
                    position: relative;
                }
                .link {
                    display: block;
                    font-size: 15px;
                    color: #000;
                    margin: 0 0 20px 0;
                    transition: .5s;
                }
                .link:hover {
                    text-decoration: none;
                }
                .link img {
                    width: 20px;
                    margin: 0 5px 0 0;
                }
            `}</style>
        </React.Fragment>
    );
}

export default withRouter(Nav);