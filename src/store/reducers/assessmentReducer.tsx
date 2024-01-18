import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// THIS HOLDS ASSESSMENT INFO
export interface AssessStoreState {
    namesake: string;
}

const initialState: AssessStoreState = {
    namesake: 'namsake',
};

export const assessmentSlice = createSlice({
  name: 'assessment',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateLabel: (state, action:PayloadAction<string>) => {
        state.namesake = action.payload;
    }
  },
});

export const { updateLabel } = assessmentSlice.actions;


export const label = (state: RootState) => (state.assessment as any).namesake;
// export const showingAlert = (state: RootState) => (state.main as any).showAlert;
// export const alertData = (state: RootState) => (state.main as any).alert;


export default assessmentSlice.reducer;
