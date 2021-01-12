import React, {useState, useCallback} from 'react';
import {TextInput, PrimaryButton} from '../components/UIkit';
import {signUp} from '../reducks/users/operations';
import {useDispatch} from 'react-redux';

const SignUp = () => {

  const [nickname, setNickname] = useState(),
        [email, setEmail] = useState(),
        [password, setPassword] = useState(),
        [confirmPassword, setConfirmPassword] = useState();
        
  const inputNickname = useCallback((event) => {
    setNickname(event.target.value)
  }, [setNickname]);

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [setEmail]);

  const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [setPassword]);

  const inputConfirmPassword = useCallback((event) => {
    setConfirmPassword(event.target.value)
  }, [setConfirmPassword]);

  const dispatch = useDispatch();
  return(
    <div className="user-auth">
      <h2 className="user-auth__heading">アカウント登録</h2>
      <div className="module-spacer"></div>
      <TextInput 
        fullWidth={true} label={"ユーザー名"} multiline={false} required={true}
        rows={1} value={nickname} type={"text"} onChange={inputNickname}
      />
      <TextInput 
        fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
        rows={1} value={email} type={"email"} onChange={inputEmail}
      />
      <TextInput 
        fullWidth={true} label={"パスワード"} multiline={false} required={true}
        rows={1} value={password} type={"password"} onChange={inputPassword}
      />
      <TextInput 
        fullWidth={true} label={"パスワード（再確認）"} multiline={false} required={true}
        rows={1} value={confirmPassword} type={"password"} onChange={inputConfirmPassword}
      />
      <div className={"module-spacer"}/>
      <div className="user-auth__send-button">
        <PrimaryButton label={"アカウントを登録する"} onClick={() => dispatch(signUp(nickname, email, password, confirmPassword))} />
      </div>
    </div>
  )
}

export default SignUp;