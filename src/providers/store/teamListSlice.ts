/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTeamList } from '../../utils/types';

interface ITeamListState {
  teamList: TTeamList;
}

const initialState: ITeamListState = {
  teamList: [],
};

export const teamListSlice = createSlice({
  initialState,
  name: 'teamList',
  reducers: {
    setTeamList(state, action: PayloadAction<TTeamList>) {
      state.teamList = action.payload;
    },
    updateTeamList(state, action: PayloadAction<TTeamList>) {
      state.teamList = { ...state.teamList, ...action.payload };
    },
  },
});

export default teamListSlice.reducer;
export const { setTeamList, updateTeamList } = teamListSlice.actions;
