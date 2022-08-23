import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import cartReducer from "../slices/cartSlice";
import userReducer from "../slices/userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "../storage";
// import { PersistGate } from "redux-persist/integration/react";




const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const userPersistConfig = {
  key: "user",
  version: 1,
  storage,
};


const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {user:persistedUserReducer, cart: persistedCartReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;