import { configureStore } from "@reduxjs/toolkit";
import sportList from "./slices/sportList";
import tournamentEvents from "./slices/tournamentEvents";
import betslip from "./slices/betslip";

export const store = configureStore({
  reducer: {
    sportList,
    tournamentEvents,
    betslip,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
