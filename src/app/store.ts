import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import creatSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import authReducer from "../features/auth/authSlice";
import homeReducer from "../features/home/homeSlice";
import appReducer from "../features/initialApp/appSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigApp = {
  key: "app",
  storage: storage,
  whitelist: ["language"],
};
const persistConfigAuth = {
  key: "auth",
  storage: storage,
  whitelist: ["isLoading", "data"],
};
const persistConfigHome = {
  key: "home",
  storage: storage,
  whitelist: ["isLogin"],
};
const rootReducer = combineReducers({
  counter: counterReducer,
  app: persistReducer(persistConfigApp, appReducer),
  auth: persistReducer(persistConfigAuth, authReducer),
  home: persistReducer(persistConfigHome, homeReducer),
});

const sagaMiddleware = creatSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware);
  },
});

//phai run saga
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
