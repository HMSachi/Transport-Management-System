# TransportApp — React Native (Expo)

A Transport Management System mobile app built with **React Native (Expo)**, **React Navigation (Stack)**, and **Redux**.

---

## 📁 Folder Structure

```
TransportApp/
├── App.js                          # Root entry — Redux Provider + Navigator
├── app.json                        # Expo config
├── babel.config.js                 # Babel config
├── package.json
└── src/
    ├── store.js                    # Redux store (mirrors sample-React-project)
    │
    ├── constants/                  # Action type constants
    │   ├── AuthConstants.js
    │   └── ProfileConstants.js
    │
    ├── actions/                    # Redux action creators
    │   ├── AuthActions.js
    │   └── ProfileActions.js
    │
    ├── reducers/                   # Redux reducers
    │   ├── index.js                # Root reducer (combineReducers)
    │   ├── AuthReducer.js
    │   └── ProfileReducer.js
    │
    ├── services/                   # Service layer (mock/static)
    │   ├── AuthService.js
    │   └── ProfileService.js
    │
    ├── components/                 # Reusable UI components
    │   └── HeaderComponent.js
    │
    ├── navigation/                 # Stack navigation setup
    │   └── AppNavigator.js
    │
    └── screens/                    # All screens (each in own subfolder)
        ├── SplashScreen/
        │   └── SplashScreen.js
        ├── LoginScreen/
        │   └── LoginScreen.js
        ├── RegisterScreen/
        │   └── RegisterScreen.js
        ├── HomeScreen/
        │   └── HomeScreen.js
        └── ProfileScreen/
            └── ProfileScreen.js
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd TransportApp
npm install
```

### 2. Start the App
```bash
npx expo start
```

### 3. Run on Device
- Press `a` for Android emulator
- Press `i` for iOS simulator
- Scan the QR code with **Expo Go** app on your phone

---

## 📱 Screens & Navigation Flow

```
SplashScreen (2.5s) → LoginScreen → HomeScreen → ProfileScreen
                           ↕
                     RegisterScreen
```

| Screen          | Description                             |
|-----------------|-----------------------------------------|
| SplashScreen    | Auto-navigates to Login after 2.5 sec   |
| LoginScreen     | Email + Password → navigates to Home    |
| RegisterScreen  | Name + Email + Password → back to Login |
| HomeScreen      | Dashboard with stats + quick actions    |
| ProfileScreen   | User info from Redux state              |

---

## 🗂️ Redux Architecture (mirrors sample-React-project)

| Layer       | File                          | Purpose                        |
|-------------|-------------------------------|--------------------------------|
| Constants   | `constants/AuthConstants.js`  | Action type string constants   |
| Actions     | `actions/AuthActions.js`      | Async action creators (thunk)  |
| Reducers    | `reducers/AuthReducer.js`     | State shape management         |
| Services    | `services/AuthService.js`     | Mock API/data layer            |
| Store       | `store.js`                    | createStore + combineReducers  |

---

## 📦 Key Dependencies

| Package                        | Version  | Purpose              |
|-------------------------------|----------|----------------------|
| expo                           | ~51.0.0  | React Native runtime |
| @react-navigation/native       | ^6.x     | Navigation container |
| @react-navigation/native-stack | ^6.x     | Stack navigator      |
| react-redux                    | ^9.x     | Redux bindings       |
| @reduxjs/toolkit               | ^2.x     | Redux toolkit        |
| redux-thunk                    | ^3.x     | Async middleware     |
