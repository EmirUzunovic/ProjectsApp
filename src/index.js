import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebaseConfi from './config/firebaseConfig'
import App from './App';
import './index.css';

import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore })),
    reduxFirestore(firebaseConfi),
    reactReduxFirebase(firebaseConfi, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true})
)
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
