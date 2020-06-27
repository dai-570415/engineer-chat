import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import firebase, { db } from '../../Firebase';

const Create = () => {
    const { register, handleSubmit } = useForm();

    // Firebese Auth uid, email取得
    const user = firebase.auth().currentUser;
    let authId;
    let authName;

    if (user != null) {
        user.providerData.forEach(() => {
            authId = user.uid;
            authName = user.displayName;
        });
    }
    
    // Create
    const [name, setName] = useState(authName);
    const [pending,setPending] = useState(false);
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    
    const OnSubmit = async () => {
        setName('');
        setPending(true);
        try {
            await firebase
                db
                .collection('users')
                .add({
                    createdAt,
                    authId,
                    authName,
                });
        } finally {
            setPending(false);
        }
    }
    
    return (
        <>
            <h2>Create</h2>
            <form onSubmit={handleSubmit(OnSubmit)} className="">
                <input
                    className=""
                    value={ name }
                    onChange={ e => setName(e.target.value) }
                    placeholder=""
                    name="authName"
                    ref={register({ required: true })}
                />
                <button type="submit" className="">Create</button>
                { pending && 'Pendeing...' }  
            </form>
        </>
    );
}

export default Create;