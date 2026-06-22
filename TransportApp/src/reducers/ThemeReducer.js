import { SET_THEME } from '../constants/ThemeConstants';
import { COLORS, TYPOGRAPHY } from '../constants/theme';


const initialState = {
  mode: 'light',
  colors: COLORS,
  typography: TYPOGRAPHY,
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { 
        ...state, 
        mode: action.payload.mode,
        colors: action.payload.colors,
        typography: action.payload.typography
      };
    default:
      return state;
  }
};

export default ThemeReducer;
