import { SwitcherStatusType } from "../Switcher/Switcher";
export interface PaginationButtonProps {
  isActive: boolean;
}
export interface ColorProps {
  status: SwitcherStatusType;
}

export interface ButtonProps {
  active?: boolean;
  children: string;
  onClick: () => void;
  disabled: boolean;
}
