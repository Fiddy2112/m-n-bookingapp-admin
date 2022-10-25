export const actionType = {
  SET_LIGHT: "SET_LIGHT",
  SET_DARK: "SET_DARK",
  SET_TOGGLE: "SET_TOGGLE",
};
const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_LIGHT:
      return {
        darkMode: false,
      };

    case actionType.SET_DARK:
      return {
        darkMode: true,
      };

    case actionType.SET_TOGGLE:
      return {
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};

export default DarkModeReducer;
