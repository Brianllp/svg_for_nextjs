import { getUserDataAction } from "./action"

export const userDataFromApi = (name, username) => {
  return async (dispatch, getState) => {
    const state = getState()
    const url = "https://jsonplaceholder.typicode.com/users/1"

    const response
      = await fetch(url)
        .then(res => res.json())
        .catch(() => null)

    const name = response.name

    dispatch(getUserDataAction({
      name: name
    }))
  }
}
