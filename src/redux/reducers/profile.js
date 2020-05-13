import typeToReducer from 'type-to-reducer';

export const UPDATE_PROFILE = 'profile/UPDATE_PROFILE';

export const updateProfile = (payload) => ({
  type: UPDATE_PROFILE,
  payload,
});

const initialState = {
  fullName: 'John Doe',
  avatar: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple-300x277.jpg',
};

const reducer = typeToReducer({
  [UPDATE_PROFILE]: (state, action) => ({
    ...state,
    avatar: action.payload.avatar,
    fullName: action.payload.fullName,
  }),
}, initialState);

export default reducer;
