import React, { Suspense }from 'react';
import { withRouter } from 'react-router';
import GoogleAuth from './GoogleAuth';
import TwitterAuth from './TwitterAuth';
import Loading from '../elements/Loading';
import Typical from 'react-typical';
import GoogleIcon from '../../assets/img/google.png';
import TwitterIcon from '../../assets/img/twitter.png';
import Chara from '../../assets/img/chara.png';
import Logo from '../../assets/img/logo.png';
import { Container } from 'nes-react';console.log(Container);

// メール認証
// import { useContext } from 'react';
// import { AuthContext } from './AuthProvider';

let result = null;
const timeout = (msec) => new Promise(resolve => {
  setTimeout(resolve, msec)
});
const LazyComponent = () => {
  if (result !== null) {
    return (
        <>
            <img src={Logo} className="logo" alt="タイトルロゴ" />
            <img src={Chara} className="chara" alt="キャライメージ" />
            <div className="sns-button">
                <img src={GoogleIcon} className="google-button" onClick={ GoogleAuth } alt="Googleアカウントで認証" />
                <img src={TwitterIcon} className="twitter-button" onClick={ TwitterAuth } alt="Twitterアカウントで認証" />
            </div>
            <div className="typical-wrapper">
                <Typical
                    steps={[
                        '○ーキド博士 > ポケラボへよく来たのう！GoogleかTwitterアカウントで入室するのじゃ。エンジ二ア同士仲良くするのじゃぞ。', 1000,
                    ]}
                    wrapper="div"
                    className="typical"
                />
            </div>
        </>
    )
  }
  throw new Promise(async(resolve) => {
    await timeout(3000);
    result = 'lazy';
    resolve();
  })
};

const Signin = ({ history }) => {
    //　メール認証
    // const { signin } = useContext(AuthContext);
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const { email, password } = e.target.elements;
    //     signin(email.value, password.value, history);
    // }

    return (
        <React.Fragment>
            <div className="sign-page">
                {/* メール認証
                <form onSubmit={ handleSubmit }>
                    <input name="email" type="email" placeholder="Email"/>
                    <input name="password" type="password" placeholder="Password"/>
                    <button type="submit">Sign in</button>
                </form> */}
                <div className="navigation-set">
                    <Suspense fallback={<Loading />}>
                        <LazyComponent/>
                    </Suspense>
                </div>
            </div>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300&display=swap');
                body {
                    font-family: 'M PLUS 1p', sans-serif;
                    background: #CFCEAF;
                }
                .typical-wrapper {
                    padding: 10px;
                    border-radius: 20px;
                    background: #000;
                }
                .typical {
                    font-size: 22px;
                    line-height: 1.25em;
                    color: #CFCEAF;
                    padding: 70px 50px;
                    border: 5px ridge #CFCEAF;
                    border-radius: 10px;
                }
                .sns-button {
                    margin: 0 0 30px 0;
                }
                .sns-button .google-button,
                .sns-button .twitter-button {
                    display: block;
                    height: 60px;
                    margin: 0 0 10px auto;
                    transition: .5s;
                }
                .sns-button .google-button:hover,
                .sns-button .twitter-button:hover {
                    height: 80px;
                }
                .logo {
                    width: 200px;
                    top: 40px;
                    left: 40px;
                    position: fixed;
                    z-index: -1;
                }
                .chara {
                    width: 250px;
                    bottom: 30vh;
                    left: 37vw;
                    position: fixed;
                    z-index: -1;
                }
            `}</style>
        </React.Fragment>
    );
}

export default withRouter(Signin);