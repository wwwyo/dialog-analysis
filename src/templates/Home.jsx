import React from 'react';
import {getUserId, getUserNickname} from '../reducks/users/selectors';
import {useSelector, useDispatch} from 'react-redux';
import { signOut } from '../reducks/users/operations';

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state)
  const uid = getUserId(selector);
  const nickname = getUserNickname(selector);
  return (
    <div>
      <div>home</div>
      <p>ユーザーId:{uid}</p>
      <p>ユーザー名：{nickname}</p>
      <button onClick={() => dispatch(signOut())}>
        signout
      </button>
    </div>
  )
}

export default Home;