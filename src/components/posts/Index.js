import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import firebase, { db } from '../../Firebase';
import { useCollectionData } from "react-firebase-hooks/firestore";
import ThumbImage from '../../assets/img/thumb.png';
import SpeechIcon from '../../assets/img/speech_icon.png';

const Index = () => {
    const { register, handleSubmit, errors } = useForm();

    // Firebese Auth uid, email取得
    const user = firebase.auth().currentUser;
    let authId;
    let email;
    let name;
    let photoURL;

    if (user != null) {
        user.providerData.forEach(() => {
            authId = user.uid;
            email = user.email;
            name = user.displayName;
            photoURL = user.photoURL;
        });
    }
    
    // Create
    const [msg, setMsg] = useState('');
    const [pending,setPending] = useState(false);
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    
    const OnSubmit = async () => {
        setMsg('');
        setPending(true);
        try {
            await firebase
                .firestore()
                .collection('posts')
                .add({
                    msg,
                    createdAt,
                    // 以下firebase.auth().currentUser情報
                    authId,
                    email,
                    name,
                    photoURL
                });
        } finally {
            setPending(false);
        }
    }
    
    // Render
    const [ list, loading, error ] = useCollectionData(db.collection('posts').orderBy('createdAt', 'desc'), { idField: 'docId' });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;
    // const result = Object.keys(list).length; // Countを数える

    // Delete
    // const handleDelete = (uid) => {
    //     if (window.confirm('削除しますか？')) {
    //         db.collection('posts').doc(uid).delete();
    //     }
    // }
    
    return (
        <>
                <div className="post">
                    <div className="post-set">
                        <h2>ホーム</h2>
                        <form onSubmit={handleSubmit(OnSubmit)} className="post-form">
                            <div className="speech">
                                <img src={SpeechIcon} alt="近況を報告しよう。" />
                                <textarea
                                    className="post-input"
                                    value={ msg }
                                    onChange={ e => setMsg(e.target.value) }
                                    placeholder="近況を報告しよう。"
                                    name="msg"
                                    ref={register({ required: true })}
                                >
                                </textarea>
                            </div>
                            <div className="error">{errors.msg && 'コメントが入力されていません'}</div>
                            <button type="submit" className="post-button">つながる</button>
                            { pending && 'Pendeing...' }  
                        </form>

                        <div className="post-list">
                            {list.map(item => (
                                <div key={item.docId + String(new Date())}>
                                {authId === item.authId ? (
                                    <>
                                        <div className="auth-inner-post-list">
                                            <div className="left">
                                                {item.name ? (
                                                    <div className="auth-post-name">{item.name}</div>
                                                ) : (
                                                    <div className="auth-post-name">ゲストユーザー</div>
                                                )}
                                                <div className="auth-inner-post-text">
                                                    <div className="post-msg">{item.msg}</div>
                                                    {/* <div className="delete"  onClick={() => handleDelete(item.docId)}>けす...</div> */}
                                                </div>
                                            </div>
                                            {item.photoURL ? (
                                                <img src={ item.photoURL } className="auth-user-icon" alt="User" />
                                                // <Link to="/user"><img src={ item.photoURL } className="auth-user-icon" alt="User" /></Link>
                                            ) : (
                                                <img src={ThumbImage} className="auth-user-icon" alt="guest" />
                                                // <Link to="/user"><img src="" className="auth-user-icon" alt="guest" /></Link>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="inner-post-list">
                                            {item.photoURL ? (
                                                <img src={ item.photoURL } className="user-icon" alt="User" />
                                            ) : (
                                                <img src={ThumbImage} className="user-icon" alt="guest" />
                                            )}
                                            <div className="right">
                                                {item.name ? (
                                                    <div className="post-name">{item.name}</div>
                                                ) : (
                                                    <div className="post-name">ゲストユーザー</div>
                                                )}
                                                <div className="inner-post-text">
                                                    <div className="post-msg">{item.msg}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            <style jsx>{`
                .post {
                    border-right: 1px solid #ccc;
                }
                .post-set {
                    width: 500px;
                    max-width: 500px;
                    margin: 0 auto;
                    background: rgba(255,255,255,.4);
                }
                h2 {
                    font-size: 18px;
                    font-weight: bold;
                    padding: 10px 25px;
                    border-bottom: 1px solid #ccc;
                }
                .post-list {
                    padding: 25px;
                    background: #f7f7f7;
                }
                .auth-inner-post-list,
                .inner-post-list {
                    display: flex;
                    align-items: flex-start;
                    margin: 0 0 15px 0;
                }
                .auth-inner-post-list {
                    justify-content: flex-end;
                }
                .inner-post-list {
                    justify-content: flex-start;
                }
                .auth-user-icon,
                .user-icon {
                    width: 40px;
                    height: 40px;
                    object-fit: cover;
                    border-radius: 50%;
                    background: #fff;
                }
                .auth-user-icon {
                    margin: 0 0 0 10px;
                }
                .user-icon {
                    margin: 0 10px 0 0;
                }
                .auth-inner-post-text,
                .inner-post-text {
                    width: 70%;
                    min-width: 150px;
                    font-size: 15px;
                    color: #fff;
                    padding: 10px 15px;
                }
                .auth-inner-post-text {
                    margin: 0 0 0 auto;
                    border-radius: 15px 0 15px 15px;
                    background: #1DA1F2;
                }
                .inner-post-text {
                    border-radius: 0 15px 15px 15px;  
                    background: #00AEBC; 
                }
                .auth-post-name,
                .post-name {
                    font-size: 10px;
                    font-weight: 100;
                    color: #696969;
                    margin: 0 0 2px 0;
                }
                .auth-post-name {
                    text-align: right;
                }
                .post-name {
                    text-align: left;
                }
                .post-form {
                    padding: 25px;
                    border-bottom: 4px solid #eee;
                }
                .speech {
                    display: flex;
                }
                .speech img {
                    width: 20px;
                    height: 20px;
                    object-fit: cover;
                    top: 13px;
                    position: relative;
                }
                .post-input {
                    display: block;
                    font-size: 16px;
                    width: 100%;
                    height: 50px;
                    margin: 0 0 10px 0;
                    padding: 10px;
                    border: none;
                    outline: none;
                    resize: none;
                }
                ::placeholder {
                    color: #ccc;
                }
                .post-button {
                    display: block;
                    font-size: 14px;
                    color: #fff;
                    margin: 0 0 0 auto;
                    padding: 5px 20px 4px;
                    border: none;
                    border-radius: 30px;
                    background: #00AEBC;
                    transition: .5s;
                }
                .post-button:hover {
                    background: #1DA1F2;
                }
                .error {
                    font-size: 14px;
                    font-weight: bold;
                    color: #dc143c;
                    margin: 0 0 5px 0;
                }
                .post-icon {
                    width: 40px;
                    right: 20px;
                    top: 20px;
                    position: fixed;
                }
                .delete {
                    text-align: right;
                    font-size: 25px;
                }
                @media screen and (max-width: 768px) {

                }
            `}</style>
        </>
    );
}

export default Index;