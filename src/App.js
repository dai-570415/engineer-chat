import React from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
// components/elements
import Header from './components/elements/Header';
import Footer from './components/elements/Footer';
// components/FirebaseAuthHook
import PrivateRoute from './components/FirebaseAuthHook/PrivateRoute';
import { AuthProvider } from './components/FirebaseAuthHook/AuthProvider';
import SignInHook from './components/FirebaseAuthHook/SignIn';
import SignUpHook from './components/FirebaseAuthHook/SignUp';
import DrawerMail from './components/elements/DrawerMail';

const title = 'エンジニア向けコミュニティアプリ';
const description = '伝達力は世界を制す。エンジニア向けコミュニティアプリです';

// head情報
document.title = title;
const headData = document.head.children;
for (let i = 0; i < headData.length; i++) {
    const nameVal = headData[i].getAttribute('name');
    if (nameVal !== null) {
        if (nameVal.indexOf('description') !== -1) {
            headData[i].setAttribute('content', description);
        }
        // OGP(twitter)の設定
        if (nameVal.indexOf('twitter:title') !== -1) {
            headData[i].setAttribute('content', title);
        }
        if (nameVal.indexOf('twitter:description') !== -1) {
            headData[i].setAttribute('content', description);
        }
    }
}
// ここまでhead情報

document.ondragstart = () => { return false; }
document.oncontextmenu = () => { return false; }

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
          <main>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={ Home } />
              <PrivateRoute exact path="/user" component={ User } />
              <Route exact path="/signin" component={ SignInHook } />
              <Route exact path="/signup" component={ SignUpHook } />
            </Switch>
          </AuthProvider>
          <DrawerMail />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;