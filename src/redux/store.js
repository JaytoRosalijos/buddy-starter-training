import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice'
import userReducer from '../features/userSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
  }
});

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
