const registrationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTRATION_SUCCESS':
      return { ...state, action };
    default:
      return state;
  }
};

export default registrationReducer;
