import React, { useContext, Suspense }from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { withRouter } from 'react-router';
import GoogleAuth from './GoogleAuth';
import TwitterAuth from './TwitterAuth';
import Loading from '../elements/Loading';
import GoogleLogo from '../../assets/img/google_logo.png';
import TwitterLogo from '../../assets/img/twitter_logo.png';
import Mainback from '../../assets/img/mainback.jpg';
import LogoWh from '../../assets/img/logo_wh.png';

let result = null;
const timeout = (msec) => new Promise(resolve => {
  setTimeout(resolve, msec)
});
const LazyComponent = ({ history }) => {
    const { signin } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        signin(email.value, password.value, history);
    }
  if (result !== null) {
    return (
        <>
            <div className="main">
                <h1>伝達力は世界を変える</h1>
                <img src={LogoWh} className="main-logo" alt="メインロゴ" />
                <img src={Mainback} className="main-img" alt="メインイメージ" />
            </div>
            <div className="sign">
                <h2>サインイン</h2>
                <div className="sns-button twitter" onClick={ TwitterAuth }>
                    <img src={TwitterLogo} className="sns-icon"alt="Twitterロゴ" />
                    Twitterでサインイン
                </div>
                <div className="sns-button google" onClick={ GoogleAuth }>
                    <img src={GoogleLogo} className="sns-icon" alt="Googleロゴ" />
                    Googleでサインイン
                </div>
                <div className="or">または</div>
                <form onSubmit={ handleSubmit }>
                    <input name="email" type="email" placeholder="メールアドレス"/>
                    <input name="password" type="password" placeholder="パスワード"/>
                    <button type="submit">サインイン</button>
                </form>
                <div className="link">
                    <Link to="/signup">新規ユーザーですか？登録</Link>
                </div>
            </div>

            <style jsx>{`
                .sign-page {
                    display: flex;
                }
                .main {
                    width: 60%;
                    position: fixed;
                    z-index: -1;
                }
                .main h1 {
                    text-align: center;
                    font-size: 23px;
                    font-family: 'Noto Serif JP', serif;
                    letter-spacing: 0.5em;
                    color: #fff;           
                    position: absolute;
                    top: 10%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    -webkit-transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                    filter: drop-shadow(0 0 5px #000E7C);
                }
                .main h1::before {
                    content: "クリエイティブ";
                    display: block;
                    text-align: left;
                    font-size: 8px;
                    letter-spacing: 0.25em;
                    color: #fff;
                    left: 7px;
                    position: relative;
                }
                .main .main-img {
                    width: 100%;
                    height: 100vh;
                    object-fit: cover;
                    vertical-align: bottom;
                }
                .main .main-logo {
                    width: 60px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    -webkit-transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                }
                .sign {
                    text-align: center;
                    width: 40%;
                    margin: 0 0 0 60%;
                    padding: 175px 0 0 0;
                }
                .sign h2 {
                    font-size: 18px;
                    font-weight: 100;
                    margin: 0 0 30px 0;
                }
                .sns-button {
                    text-align: center;
                    font-size: 14px;
                    color: #fff;
                    width: 300px;
                    margin: 0 auto 10px;
                    padding: 10px 20px;
                    border-radius: 5px;
                    transition: .5s;
                }
                .sns-button:hover {
                    opacity: .5;
                }
                .sns-button .sns-icon {
                    width: 20px;
                    margin: 0 10px 0 0;
                    top: 2px;
                    position: relative;
                }
                .twitter {
                    background: #1DA1F2;
                }
                .google {
                    background: #DE4A39;
                }
                .or {
                    font-size: 14px; 
                    margin: 0 0 8px 0;
                }
                .or::before {
                    content: "";
                    display: inline-block;
                    width: 10px;
                    border-bottom: 1px solid #000;
                    right: 5px;
                    bottom: 5px;
                    position: relative;
                }
                .or::after {
                    content: "";
                    display: inline-block;
                    width: 10px;
                    border-bottom: 1px solid #000;
                    left: 5px;
                    bottom: 5px;
                    position: relative;
                }
                input {
                    display: block;
                    text-align: left;
                    font-size: 14px;
                    width: 300px;
                    margin: 0 auto 10px;
                    padding: 12px 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    transition: .5s;
                }
                input:focus {
                    background: #C9E4E6;
                }
                ::placeholder {
                    color: #ccc;
                }
                button {
                    display: block;
                    text-align: center;
                    font-size: 14px;
                    color: #fff;
                    width: 100px;
                    margin: 30px auto 90px;
                    padding: 12px 10px;
                    border: none;
                    border-radius: 5px;
                    background: #00AEBC;
                    transition: .5s;
                }
                button:hover {
                    opacity: .5;
                }
                .link {
                    margin: 0 auto 90px;
                }
            `}</style>
        </>
    )
  }
  throw new Promise(async(resolve) => {
    await timeout(1000);
    result = 'lazy';
    resolve();
  })
};

const Signin = () => {
    return (
        <React.Fragment>
            <div className="sign-page">
                <Suspense fallback={<Loading />}>
                    <LazyComponent/>
                </Suspense>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Signin);