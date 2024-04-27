import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IDataItem } from "../../types";
import { SwitcherStatusType } from "../../components";
interface TableState {
  approved: boolean;
  pending: boolean;
  declined: boolean;
  data: IDataItem[];
  searchQuery: string;
}

const initialState: TableState = {
  approved: false,
  pending: false,
  declined: false,
  data: [],
  searchQuery: "",
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    toggleSwitcher(state, action: PayloadAction<SwitcherStatusType>) {
      const switcher = action.payload;
      switch (switcher) {
        case "approved":
          state.approved = !state.approved;
          break;
        case "pending":
          state.pending = !state.pending;
          break;
        case "declined":
          state.declined = !state.declined;
          break;
        default:
          break;
      }
    },
    setData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },

    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { toggleSwitcher, setData, setSearchQuery } = tableSlice.actions;

export default tableSlice.reducer;
