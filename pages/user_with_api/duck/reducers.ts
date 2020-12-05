import { UserConstants } from './constants';

interface State {
  UserData: {
    name: string
    username: string
  }
}

const initialState: State = {
  UserData: {
    name: '',
    username: '',
  }
}

// export const USES_DATA = 'USES_DATA'
// const getUsersData = () => {
//   return {
//     type: USES_DATA
//   }
// }

// export const getUsers = () => {
//   return (dispatch) => {
//     dispatch(getUsersData())
//     return axios.get(`https://jsonplaceholder.typicode.com/users/1`)
//       .then(res =>
//         dispatch(getPostsSuccess(res.data))
//       ).catch(err =>
//         dispatch(getPostsFailure(err))
//       )
//   }
// }

const userDataReducer = {
  userData(state = initialState.UserData, action: any) {
    switch (action.type) {
      case UserConstants.USERS_DATA:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  }
}

export default userDataReducer;
