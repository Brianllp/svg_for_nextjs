import { UserConstants } from './constants';
// import { useDispatch } from 'react-redux';

// const dispatch = useDispatch();

export const getUserDataAction = (userState: any) => {
  return {
    type: UserConstants.USERS_DATA,
    payload: {
      name: userState.name,
      username: userState.username
    }
  }
};
