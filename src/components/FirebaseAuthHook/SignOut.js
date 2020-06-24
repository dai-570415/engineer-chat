import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../Firebase'
import { AuthContext } from './AuthProvider';
import LogoutIcon from '../../assets/img/logout.png';

const SignOut = () => {
    const user = firebase.auth().currentUser;

    const { signout } = useContext(AuthContext);
    const onSignOut = () => {
        signout();
        window.history.pushState(null, null, '/')
    }

    return(
        <React.Fragment>
            {user != null &&
                <div className="sign-out" onClick={ onSignOut }>
                    <img src={LogoutIcon} alt="icon" />
                </div>
            }
            <style jsx>{`
                .sign-out {
                    font-size: 15px;
                    color: #000;
                    margin: 0 0 20px 0;
                }
                .sign-out img {
                    width: 20px;
                    margin: 0 5px 0 0;
                    bottom: 2px;
                    position: relative;
                }
            `}</style>
        </React.Fragment>
    );
}

export default withRouter(SignOut);