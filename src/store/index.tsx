import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mainReducer from './reducers/mainReducer';
import assessmentReducer from './reducers/assessmentReducer';

export const store = configureStore({
  reducer: {
    main: mainReducer,
    assessment: assessmentReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
