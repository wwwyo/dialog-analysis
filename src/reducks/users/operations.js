import {signInAction} from './actions';
import {push} from 'connected-react-router';
import {auth, FirebaseTimestamp, db} from '../../firebase/index';

export const signIn = (email, password) => {
  return (dispatch) => {
    if (email === "" || password === "") {
      alert("必須項目が未入力です")
      return false
    }

    return auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user;
        if (user) {
          const uid = user.uid

          db.collection("users").doc(uid).get()
            .then(snapshot => {
              const data = snapshot.data()
              dispatch(signInAction({
                isSignedIn: true,
                nickname: data.nickname,
                uid: uid,
              }))
              dispatch(push("/"))
            })
        }
      })
      .catch((error) => alert("メールアドレスまたはパスワードが間違っています"))
  }
  
}

export const signUp = (nickname, email, password, confirmPassword) => {
  return async (dispatch) => {
    // Validation
    if (nickname === ""  || email === "" || password === "" || confirmPassword === "" ) {
      alert("必須項目が未入力です")
      return false
    }
    if (password !== confirmPassword) {
      alert("パスワードが一致しません。もう一度お試しください")
      return false
    }

    return auth.createUserWithEmailAndPassword(email,password)
      .then((result) => {
        const user = result.user
        
        if (user) {
          const uid = user.uid
          const timestamp = FirebaseTimestamp.now()

          const userInitialData = {
            created_at: timestamp,
            email: email,
            nickname: nickname,
            uid: uid,
            updated_at: timestamp,
          }

        db.collection('users').doc(uid).set(userInitialData)
          .then(() => {
            dispatch(push('/'))
          })
        }
      })
      .catch((error) => alert(error))
  }
}