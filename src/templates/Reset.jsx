import React, {useState, useCallback} from 'react';
import {TextInput, PrimaryButton} from '../components/UIkit';
import {resetPassword} from '../reducks/users/operations';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';

const Reset = () => {

  const [email, setEmail] = useState();
        
  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [setEmail]);

  const dispatch = useDispatch();
  
  return(
    <div className="user-auth">
      <h2 className="user-auth__heading">パスワードリセット</h2>
      <div className="module-spacer"></div>
      <TextInput 
        fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
        rows={1} value={email} type={"email"} onChange={inputEmail}
      />
      
      <div className={"module-spacer"}/>
      <div className="user-auth__send-button">
        <PrimaryButton label={"パスワードをリセットする"} onClick={() => dispatch(resetPassword(email))} />
        <div className="module-spacer" />
        <p onClick={() => dispatch(push('signin'))}>ログイン画面に戻る</p>
      </div>
    </div>
  )
}

export default Reset;