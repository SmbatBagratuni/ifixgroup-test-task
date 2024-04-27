import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../createStore";
import { IDataItem, SwitchersState } from "../../types";
export const selectData = (state: RootState) => state.table.data;
export const selectFilteredData = createSelector(
  [
    selectData,
    (state: RootState) => state.table,
    (state: RootState) => state.table.searchQuery,
  ],
  (data: IDataItem[], switchers: SwitchersState, searchQuery: string) => {
    if (!switchers.approved && !switchers.pending && !switchers.declined) {
      return data.filter((item: any) =>
        item.username.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    return data.filter((item: any) => {
      const matchesSwitchers =
        (switchers.approved && item.status === "approved") ||
        (switchers.pending && item.status === "pending") ||
        (switchers.declined && item.status === "declined");
      const matchesSearchQuery = item.username
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesSwitchers && matchesSearchQuery;
    });
  },
);
