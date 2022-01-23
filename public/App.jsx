import React, { useRef, useState } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import './App.css'

firebase.initializeApp({
  apiKey: "AIzaSyBsXa5K_avDSs6HrvdCSHgMTdT7JmKytwQ",
  authDomain: "pulgueta-chat.firebaseapp.com",
  projectId: "pulgueta-chat",
  storageBucket: "pulgueta-chat.appspot.com",
  messagingSenderId: "703821653237",
  appId: "1:703821653237:web:5604793872821c2add11bc",
  measurementId: "G-ZDP2RMQESC"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

//
const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <div className='init'>
      <h1>Chat anónimo, hable con libertad.</h1>
      <button className='ingresa-btn' onClick={signInWithGoogle}>Ingresa con <span className='google'>Google</span></button>
    </div>
    
  );
};
//
const SignOut = () => {
  return auth.currentUser && (
    <button className='salir-btn' onClick={() => {
      auth.signOut()
    }}>Despegarla</button>
  )
}
//
const ChatRoom = () => {
  const tick = useRef();
  const msgRef = firestore.collection('message');
  const query = msgRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    await msgRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid
    })

    setFormValue('');
    tick.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={tick}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => {
          setFormValue(e.target.value)
        }} placeholder="Hable pues!" />
        <button className='enviar-btn' type="submit">Enviar</button>
      </form>
    </>
  )
}
//
const ChatMessage = (props) => {
  const { text, uid, photoUrl } = props.message

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

  return (
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  )
}
//
const App = () => {
  const [user] = useAuthState(auth)

  return (
    <div className='App'>
      <header>
        <h1>Chat Barrancabermeja</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
};

export default App;
