import {combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactSlice';
import { persistStore, 
persistReducer,
FLUSH,
REHYDRATE,
PAUSE,
PERSIST,
PURGE,
REGISTER } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({

  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);




// import { configureStore } from "@reduxjs/toolkit";
// import filterSlice from "./filterSlice";
// import contactsSlice from "./contactSlice";
// import storage from 'redux-persist/lib/storage';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist';

// const persistConfig = { key: 'contacts', storage };

// const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// const store = configureStore({
//     reducer:{
//         contacts: persistedContactsReducer,
//         filter: filterSlice.reducer, 
//     },
//     middleware(getDefaultMiddleware) {
//         return getDefaultMiddleware({
//           serializableCheck: {
//             ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//         });
//       },
//   })
  
//   export default store
 
//   export const persistor = persistStore(store);
