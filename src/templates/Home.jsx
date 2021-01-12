import React from 'react';
import {getUserId, getUserNickname} from '../reducks/users/selectors';
import {useSelector} from 'react-redux';

const Home = () => {
  const selector = useSelector(state => state)
  const uid = getUserId(selector);
  const nickname = getUserNickname(selector);
  return (
    <div>
      <div>home</div>
      <p>ユーザーId:{uid}</p>
      <p>ユーザー名：{nickname}</p>
    </div>
  )
}

export default Home;