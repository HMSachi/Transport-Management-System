import { COLORS, TYPOGRAPHY } from '../constants/theme';
import { SET_THEME } from '../constants/ThemeConstants';


export const setTheme = (mode = 'light') => {
  return (dispatch) => {
    // In the future, this can dispatch different COLORS depending on 'mode'
    // For now, it sets the central theme.
    dispatch({ type: SET_THEME, payload: { mode, colors: COLORS, typography: TYPOGRAPHY } });
  };
};
