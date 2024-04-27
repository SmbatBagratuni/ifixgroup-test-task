import { SwitcherStatusType } from "./components";

export interface SwitchersState {
  approved: boolean;
  pending: boolean;
  declined: boolean;
}

export interface IDataItem {
  id: string;
  status: SwitcherStatusType;
  username: string;
  email: string;
  reason: string;
  case: number;
  submissionDate: string;
}
