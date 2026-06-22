import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import DashboardReducer from './DashboardReducer';
import SettingsReducer from './SettingsReducer';
import ThemeReducer from './ThemeReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  dashboard: DashboardReducer,
  settings: SettingsReducer,
  theme: ThemeReducer,
});

export default rootReducer;
