# engineer-chat

## Core function
- Firebase Authentication

- Post a comment

- API acquisition/display

## Data download & construction

```bash
$ git clone https://github.com/dai-570415/engineer-chat.git

$ cd engineer-chat

$ npm install

# Below, please set.

$ npm start
```

```js
// Firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "Your_Key",
    authDomain: "Your_Key",
    databaseURL: "Your_Key",
    projectId: "Your_Key",
    storageBucket: "Your_Key",
    messagingSenderId: "Your_Key",
    appId: "Your_Key",
    measurementId: "Your_Key"
};

firebase.initializeApp(firebaseConfig);

export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerTwitter = new firebase.auth.TwitterAuthProvider();
export const db = firebase.firestore();
export default firebase;
```

```jsx
// elemenys/Aside/News

const keyId = 'Your_Key'; // Insert your key
const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${keyId}`;
```

```jsx
// elemenys/Aside/Anime

// GAS
const URL = 'Your_Key'; // Insert your key
```