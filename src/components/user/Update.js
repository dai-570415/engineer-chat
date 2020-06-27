import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import firebase, { db } from '../../Firebase';
import { useCollectionData } from "react-firebase-hooks/firestore";

const Update = () => {
    const { register, handleSubmit, errors } = useForm();

    const user = firebase.auth().currentUser;
    let authId;
    let authName;

    if (user != null) {
        user.providerData.forEach(() => {
            authId = user.uid;
            authName = user.displayName;
        });
    }
    
    // Update
    const [name, setName] = useState();
    const [pending,setPending] = useState(false);
    const updatedAt = firebase.firestore.FieldValue.serverTimestamp();
    
    const OnSubmit = async (uid) => {
        setName('');
        setPending(true);
        try {
            await firebase
                db
                .collection('users')
                .doc(uid)
                .update({
                    updatedAt,
                    authId,
                    authName,
                });
        } finally {
            setPending(false);
        }
    }
    
    // Render
    const [ list, loading, error ] = useCollectionData(db.collection('users').orderBy('createdAt', 'desc'), { idField: 'docId' });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;
    
    return (
        <>
            <h2>Update</h2>

            {list.map(item => (
                <div key={item.docId + String(new Date())}>
                {authId === item.authId ? (
                    <>
                        <form onSubmit={handleSubmit(OnSubmit)} className="">
                            <input
                                className=""
                                value={ name }
                                onChange={ e => setName(e.target.value) }
                                placeholder=""
                                name="authName"
                                ref={register({ required: true })}
                            />
                            <button type="submit" onClick={ () => OnSubmit(item.docId) } className="post-button">Update</button>
                            { pending && 'Pendeing...' }  
                        </form>
                    </>
                ) : (
                    <>
                        ...省略
                    </>
                )}
                </div>
            ))}
        </>
    );
}

export default Update;