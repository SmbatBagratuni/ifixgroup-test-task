import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import "./App.css";
import { Table, Switcher, SearchInput, SwitcherStatusType } from "./components";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import data from "./__mocked_data.json";
import { selectFilteredData } from "./redux/tableState/tableSelector";
import {
  setData,
  setSearchQuery,
  toggleSwitcher,
} from "./redux/tableState/tableSlice";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 20px;
  flex-wrap: wrap;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  overflow: auto;
`;

const Main = styled.div`
  flex: 1;
  padding: 10px;
  background: black;
`;

const SwitcherWrapper = styled.div`
  display: flex;
`;

const App: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");

  const tableState = useAppSelector((state) => state.table);
  const filteredData = useSelector(selectFilteredData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setData(data));
  }, [dispatch]);

  const handleToggleSwitcher = (switcher: SwitcherStatusType) => {
    dispatch(toggleSwitcher(switcher));
  };

  const handleInputChange = (e: string) => {
    setSearchInput(e);
    dispatch(setSearchQuery(e));
  };

  return (
    <LayoutContainer>
      <Header>
        <SwitcherWrapper>
          <Switcher
            status={"approved"}
            checked={tableState.approved}
            id={"isApproved"}
            label={"Approved"}
            onChange={() => handleToggleSwitcher("approved")}
          />
          <Switcher
            status={"pending"}
            checked={tableState.pending}
            id={"isPending"}
            label={"Pending"}
            onChange={() => handleToggleSwitcher("pending")}
          />
          <Switcher
            status={"declined"}
            checked={tableState.declined}
            id={"isDeclined"}
            label={"Declined"}
            onChange={() => handleToggleSwitcher("declined")}
          />
        </SwitcherWrapper>
        <SearchInput
          value={searchInput}
          placeholder={"Search in result"}
          onChange={handleInputChange}
        />
      </Header>
      <Content>
        <Main>
          <Table data={filteredData} />
        </Main>
      </Content>
    </LayoutContainer>
  );
};

export default App;
