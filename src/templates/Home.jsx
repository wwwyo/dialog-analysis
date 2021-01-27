import React from 'react';
import {getUserId, getUserNickname} from '../reducks/users/selectors';
import {useSelector, useDispatch} from 'react-redux';
import { signOut } from '../reducks/users/operations';

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state)
  const uid = getUserId(selector);

  return (
    <>
      <section>
        <h1 className="section__top">
          大学生
        </h1>
        
      </section>
    </>
  )
}

export default Home;