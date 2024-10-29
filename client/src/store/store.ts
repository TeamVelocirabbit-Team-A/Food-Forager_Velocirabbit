import { configureStore } from "@reduxjs/toolkit";

import registerReducer from "./registerSlice";
import loginReducer from "./loginSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    search: searchReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
