let initialState = {
  id: null,
  username: "",
  profile_pic: ""
};

const UPDATE_USER = "UPDATE_USER";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return Object.assign({}, state, {
        id: action.payload.id,
        username: action.payload.username,
        profile_pic: action.payload.profilePicture
      });
    default:
      return state;
  }
}

export function updateUser(id, username, profilePicture) {
  return {
    type: UPDATE_USER,
    payload: {
      id,
      username,
      profilePicture
    }
  };
}
