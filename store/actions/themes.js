export const SELECT_THEME = 'SELECT_THEME';

export const selectTheme = theme => {
  return dispatch => {
    dispatch({
      type: SELECT_THEME,
      theme: theme,
    });
  };
};
