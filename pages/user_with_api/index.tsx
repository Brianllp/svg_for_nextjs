import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import { getUserDataAction } from "./duck/action";
import { userDataReducer } from "./duck/reducers";
import { userDataFromApi } from "./duck/operation";

const UserData = () => {
  // const dispatch = useDispatch();
  const user_data = useSelector((state) => state.UserData.name);

  // const getUserData = () => {
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //     .then(res => dispatch(getUserDataAction(
  //       {
  //         name: (res.data.name),
  //         username: (res.data.username)
  //       }
  //     )))
  //     .catch(err => new Error(err))
  // }

  useEffect(() => {
    userDataFromApi
  }, [])

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //     .then(res => dispatch(getUserDataAction(
  //       {
  //         name: (res.data.name),
  //         username: (res.data.username)
  //       }
  //     )))
  //     .catch(err => new Error(err))
  // }, [])

  // const [users, setUsers] = useState(null)

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //     .then(res => setUsers(res.data))
  //     .catch(err => new Error(err))
  // }, [])

  // if (users === null) {
  //   return "Loading..."
  // }

  // return (
  //   <div>
  //     <ul>
  //       {users.map((user) => {
  //         return (
  //           <li key={user.id.toString()}>
  //             {user.name}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );

  return (
    <div>
      <ul>
        <li>
          {user_data}
        </li>
      </ul>
    </div>
  );
}

export default UserData
