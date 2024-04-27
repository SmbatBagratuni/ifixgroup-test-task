import React from "react";
import styled from "styled-components";

export type SwitcherStatusType = "approved" | "pending" | "declined";

interface SwitcherLabelProps {
  htmlFor: string;
  status: SwitcherStatusType;
}
interface SwitcherProps {
  id: string;
  label: string;
  checked: boolean;
  status: SwitcherStatusType;
  onChange: (checked: boolean) => void;
}

const SwitcherContainer = styled.label`
  display: flex;
  position: relative;
  width: 100%;
  margin-right: 12px;
  align-items: center;
`;

const SwitcherWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 23px;
`;

const SwitcherSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border: 1px solid #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const SwitcherInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SwitcherSlider} {
    background-color: #2196f3;
  }

  &:focus + ${SwitcherSlider} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${SwitcherSlider}:before {
    -webkit-transform: translateX(17px);
    -ms-transform: translateX(17px);
    transform: translateX(17px);
  }
`;

const SwitcherLabel = styled.span<SwitcherLabelProps>`
  font-size: 14px;
  margin-left: 4px;
  color: ${(props) => {
    if (props.status === "approved") return "white";
    if (props.status === "pending") return "yellow";
    if (props.status === "declined") return "red";
    return "inherit";
  }};
`;

const Switcher: React.FC<SwitcherProps> = ({
  id,
  label,
  checked,
  onChange,
  status,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <SwitcherContainer>
      <SwitcherWrapper>
        <SwitcherInput
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleChange}
        />
        <SwitcherSlider />
      </SwitcherWrapper>
      <SwitcherLabel htmlFor={id} status={status}>
        {label}
      </SwitcherLabel>
    </SwitcherContainer>
  );
};

export default Switcher;
