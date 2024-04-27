import styled from "styled-components";
import { ButtonProps, ColorProps, PaginationButtonProps } from "./types";

export const TableWrapper = styled.div`
  margin: 10px;
  background-color: #282c34e0;
  border-radius: 12px;
  overflow-x: auto;
`;

export const TableHeadWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 12px;
`;

export const Status = styled.div<ColorProps>`
  display: ${(props) =>
    props.status === "approved" ? "none" : "inline-block"};
  background-color: ${(props) =>
    props.status === "pending" ? "yellow" : "red"};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 5px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: #10486a;
  padding: 20px 14px;
  text-align: left;
  color: #f5f5f5b8;
  div {
    display: flex;
    align-items: center;
  }
`;

export const TableHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #2b1e2b;
  }
`;

export const TableCell = styled.td`
  padding: 20px 8px;
  color: #f5f5f594;
  border-left: 1px solid #f5f5f594;
  border-right: 1px solid #f5f5f594;

  &:first-child {
    border-left: none;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }

  &:last-child {
    border-right: none;
  }
  &:nth-child(2) {
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const StyledPagination = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: end;
  height: 30px;
  background: black;
`;

export const PaginationButton = styled.button<PaginationButtonProps>`
  margin-right: 10px;
  border-radius: 100%;
  cursor: pointer;
  font-weight: bold;
  background-color: black;
  color: ${(props) => (props.isActive ? "#10486a" : "white")};
  border: ${(props) =>
    props.isActive ? "1px solid #10486a" : "1px solid black"};
  padding: 5px 10px;
`;

export const Button = styled.button<ButtonProps>`
  margin-right: 10px;
  border-radius: 100%;
  font-weight: bold;
  background-color: transparent;
  color: ${(props) => (!props.disabled ? "#2c8bc5" : "white")};
  border: none;
  padding: 5px 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
