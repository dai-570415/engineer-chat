import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AuthContext } from './AuthProvider';
import GoogleAuth from './GoogleAuth';
import TwitterAuth from './TwitterAuth';
import GoogleLogo from '../../assets/img/google_logo.png';
import TwitterLogo from '../../assets/img/twitter_logo.png';
import Slide from './Slide';

const Signup = ({ history }) => {
    const { signup } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        signup(email.value, password.value, history);
    }

    return (
        <>
            <div className="sign-page">
                <Slide />
                <div className="sign">
                    <h2>サインアップ</h2>
                    <div className="sns-button twitter" onClick={ TwitterAuth }>
                        <img src={TwitterLogo} className="sns-icon"alt="Twitterロゴ" />
                        Twitterでサインアップ
                    </div>
                    <div className="sns-button google" onClick={ GoogleAuth }>
                        <img src={GoogleLogo} className="sns-icon" alt="Googleロゴ" />
                        Googleでサインアップ
                    </div>
                    <div className="or">または</div>
                    <form onSubmit={ handleSubmit }>
                        <input className="create-input" name="email" type="email" placeholder="メールアドレス" />
                        <input className="create-input" name="password" type="password" placeholder="パスワード" />
                        <button className="create-button" type="submit">サインアップ</button>
                    </form>
                    <div className="link">
                        <Link to="/">登録ユーザーですか？ログイン</Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .sign-page {
                    display: flex;
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
                .create-input {
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
                .create-input:focus {
                    background: #C9E4E6;
                }
                ::placeholder {
                    color: #ccc;
                }
                .create-button {
                    display: block;
                    text-align: center;
                    font-size: 14px;
                    color: #fff;
                    width: 125px;
                    margin: 30px auto 90px;
                    padding: 12px 10px;
                    border: none;
                    border-radius: 5px;
                    background: #00AEBC;
                    transition: .5s;
                }
                .create-button:hover {
                    opacity: .5;
                }
                .link {
                    margin: 0 auto 90px;
                }
            `}</style>
        </>
    );
}

export default withRouter(Signup);