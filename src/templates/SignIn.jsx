import React, {useState, useCallback} from 'react';
import {TextInput, PrimaryButton} from '../components/UIkit';
import {signIn} from '../reducks/users/operations';
import {useDispatch} from 'react-redux';

const SignIn = () => {

  const [email, setEmail] = useState(),
        [password, setPassword] = useState();
        
  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [setEmail]);

  const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [setPassword]);

  const dispatch = useDispatch();
  
  return(
    <div className="user-auth">
      <h2 className="user-auth__heading">SIGN IN</h2>
      <div className="module-spacer"></div>
      <TextInput 
        fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
        rows={1} value={email} type={"email"} onChange={inputEmail}
      />
      <TextInput 
        fullWidth={true} label={"パスワード"} multiline={false} required={true}
        rows={1} value={password} type={"password"} onChange={inputPassword}
      />
      <div className={"module-spacer"}/>
      <div className="user-auth__send-button">
      <PrimaryButton label={"sign in"} onClick={() => dispatch(signIn(email, password))} />
      </div>
    </div>
  )
}

export default SignIn;