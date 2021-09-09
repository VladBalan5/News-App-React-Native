import Colors from '../../constants/Colors';
import {SELECT_THEME} from '../actions/themes';

const initialState = {
  theme: Colors.Blue,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_THEME:
      return {theme: action.theme};
  }
  return state;
};

export default themeReducer;
