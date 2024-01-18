import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

// THIS HOLDS AUTH INFO, DQASHBOARD INFO AND ALERT COMPONENT INFO
export interface MainStoreState {
  value: number;
  alert: {
    type: 'success' | 'warning' | 'info' | 'loading',
    messageTitle: string,
    messageBody: string
  };
  showAlert: boolean,
  jwtToken: string | null,
  sample: any;
}

const initialState: MainStoreState = {
  value: 0,
  alert: {
    type: 'info',
    messageBody: 'Please select',
    messageTitle: 'Please select the sample'
  },
  showAlert: false,
  sample: {},
  jwtToken: ''
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    hideAlert: (state) => {
      state.showAlert = false;
    },
    setAlert: (state, action: PayloadAction<MainStoreState['alert']>) => {
      state.alert = action.payload;
      state.showAlert = true;
    },
    updateTokenStatus: (state, action) => {
      state.jwtToken = action.payload;
      if (action.payload) {
        localStorage.setItem('talenvoJwToken', action.payload);
      } else {
        localStorage.removeItem('talenvoJwToken')
      }
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, hideAlert, updateTokenStatus, setAlert } = mainSlice.actions;


export const selectCount = (state: RootState) => (state.main as any).value;
export const showingAlert = (state: RootState) => (state.main as any).showAlert;
export const alertData = (state: RootState) => (state.main as any).alert;
export const userToken = (state: RootState) => (state.main as any).jwtToken;



export default mainSlice.reducer;
