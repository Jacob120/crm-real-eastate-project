import { configureStore } from '@reduxjs/toolkit';
import ownersReducer from './ownersReducer';

export const store = configureStore({
  reducer: {
    owners: ownersReducer,

    // Add your reducers here
  },
  middleware: (customizedMiddleware) =>
    customizedMiddleware({
      serializableCheck: false,
    }),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
