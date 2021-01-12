import {createSelector} from 'reselect';

const usersSelector = (state) => state.users;

export const getIsSignedIn = createSelector(
  [usersSelector],
  state => state.isSignedIn
)
export const getUserId = createSelector(
  [usersSelector],
  state => state.uid
)

export const getUserNickname = createSelector(
  [usersSelector],
  state => state.nickname
)