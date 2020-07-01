import React, { useState }from 'react';
import { useForm } from 'react-hook-form';
import firebase from '../../Firebase';
import MailIcon from '../../assets/img/mail.png';
import CloseIcon from '../../assets/img/close.png';

const DrawerMail = () => {
    // Drawer
    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(false);

    console.log(close);

    const openFunc = () => {
        setOpen(true);
        setClose(false);
    }
    const closeFunc = () => {
        setOpen(false);
        setClose(true);
    }

    // Mail
    const { register, handleSubmit, errors } = useForm();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [pending,setPending] = useState(false);
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    
    const OnSubmit = async () => {
        setName('');
        setEmail('');
        setMsg('');
        setPending(true);
        try {
            await firebase
                .firestore()
                .collection('contact')
                .add({
                    name,
                    email,
                    msg,
                    createdAt,
                });
        } finally {
            setPending(false);
        }
    }

    return (
        <>
            {!open && 
                <div onClick={openFunc}>
                    <img src={MailIcon} className="mail-icon" alt="お問い合わせ" />
                </div>
            }
            {open && (
                <div className="modal">
                    <div className="modal-form-set">
                        <div className="modal-head">
                            <div className="modal-title">お問い合わせ</div>
                            <div className="modal-close"onClick={closeFunc}>
                                <img src={CloseIcon} alt="閉じる" />
                            </div>
                        </div>
                        
                        <form className="modal-form" onSubmit={handleSubmit(OnSubmit)}>
                            <div className="modal-error">{errors.name && 'お名前が入力されていません'}</div>
                            <div class="name">
                                <label>お名前</label>
                                <input
                                    className="mail-input"
                                    value={ name }
                                    onChange={ e => setName(e.target.value) }
                                    name="name"
                                    type="text"
                                    placeholder="入力してください"
                                    ref={register({ required: true })}
                                />
                            </div>
                            <div className="modal-error">{errors.email && 'メールアドレスが入力されていません'}</div>
                            <div class="email">
                                <label>メールアドレス</label>
                                <input
                                    className="mail-input"
                                    value={ email }
                                    onChange={ e => setEmail(e.target.value) }
                                    name="email"
                                    type="email"
                                    placeholder="入力してください"
                                    ref={register({ required: true })}
                                />
                            </div>
                            <div className="modal-error">{errors.msg && 'コメントが入力されていません'}</div>
                            <div class="msg">
                                <label>お問い合わせ内容</label>
                                <textarea
                                    className="mail-area"
                                    value={ msg }
                                    onChange={ e => setMsg(e.target.value) }
                                    placeholder="入力してください"
                                    name="msg"
                                    ref={register({ required: true })}
                                ></textarea>
                            </div>                   
                            <button type="submit" className="mail-button">送信する</button>
                            { pending && 'Pendeing...' }
                        </form>
                    </div>
                </div>
            )}
            <style jsx>{`
                .mail-icon {
                    width: 40px;
                    height: 40px;
                    right: 25px;
                    bottom: 25px;
                    position: fixed;
                    transition: .5s;
                }
                .mail-icon:hover {
                    opacity: .5;
                }
                .modal {
                    background: rgba(0, 0, 0, .7);
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    position: fixed;
                    z-index: 10;
                }
                .modal-form-set {
                    width: 600px;
                    margin: 15vh auto;
                    background: #fff;
                }
                .modal-head {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    font-weight: 700;
                    padding: 15px 15px 10px;
                    border-bottom: 1px solid #ccc;
                }
                .modal-form {
                    text-align: left;
                    padding: 50px 50px 90px;
                    background: #fcfcfc;
                }
                .name,
                .email,
                .msg {
                    display: flex;
                    margin: 0 0 25px 0;
                }
                label {
                    display: block;
                    font-size: 15px;
                    font-weight: 600;
                    color: #707F89;
                    width: 200px;
                }
                .mail-input, 
                .mail-area {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #CDD6DD;
                    border-radius: 5px;
                    transition: .5s;
                }
                .mail-input:focus,
                .mail-area:focus {
                    background: #C9E4E6;
                }
                .mail-area {
                    height: 150px;
                    resize: none;
                }
                .mail-button {
                    display: block;
                    text-align: center;
                    font-size: 14px;
                    color: #fff;
                    width: 220px;
                    margin: 70px auto 0;
                    padding: 12px 10px;
                    border: none;
                    border-radius: 5px;
                    background: #00AEBC;
                    transition: .5s;
                }
                .mail-button:hover {
                    opacity: .5;
                }
                .modal-error {
                    font-size: 14px;
                    font-weight: bold;
                    color: #dc143c;
                    margin: 0 0 5px 0;
                }
            `}</style>
        </>
    );
}

export default DrawerMail;