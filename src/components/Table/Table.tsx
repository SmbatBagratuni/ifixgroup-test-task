import React, { useState } from "react";
import { TABLE_HEADER_LIST } from "../../constants/constants";
import { IDataItem } from "../../types";
import {
  Button,
  Status,
  StyledPagination,
  StyledTable,
  TableCell,
  TableHeader,
  TableHeaderWrapper,
  TableHeadWrapper,
  TableRow,
  TableWrapper,
} from "./Tables.styled";
import Pagination from "./Pagination";

interface TableProps {
  data: IDataItem[];
}
const pageSize = 6;

const TableWithPagination: React.FC<TableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, data.length - 1);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [data])
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1));
  };

  return (
    <TableWrapper>
      <TableHeadWrapper>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAd0lEQVR4nO3Uuw2AIBSF4b9wAZdwEqfRdXQaOolDsAQLUFwbKkNAHrGBL7kVl3MSCmDIdANSOTpWoBsUXHThLHiaI6dgAlRGuPJ3ssyA+RBu/G6RBbCRcOt3qqyAC4Q7f9bEHijYaExe05yMghQZT5Si+/vz+cMDaMt4H3TYi8EAAAAASUVORK5CYII="
          alt={""}
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABGElEQVR4nO2UTWoCQRSEP+JOiOABXEcCwUXIIWKy8Bomgj83ECFbz5GVe01yAk8h+ENINFFQA4LSUJHBxTD9WnBjwcBU1etXMz2vB87wxPZI1+kCHDoBjTskQA6YG5rPtTYRaoaAGh5IAX2P5n2t8cItsEnQfKNaE9oJAlyNGZfAIKb5QDVBKMUEOO8o2Fpn3hrwClzIuwe6wDcwBXrSzAFfQEZ6M2b7mtaAF2lF8T8dsonCq8BKXtEScCetJ94QvwYKun+S924JyEr7Ef8EbiK1V8Aw8n/yDkhLm4lPD06yCxjJ+7UEFKS9idfF85E3Kcv7IAAParIGKsBY2/UMLOU9hgQ4tGLG9H/aguHexE2L+6ALbcv+yXeQ9NNcy3+YGwAAAABJRU5ErkJggg=="
          alt={""}
        />
      </TableHeadWrapper>
      <StyledTable>
        <thead>
          <tr>
            {TABLE_HEADER_LIST.map((headerItem) => (
              <TableHeader key={headerItem.id}>
                <TableHeaderWrapper>
                  {headerItem.title}
                  <div>
                    <img
                      style={{ filter: "invert(1)" }}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqElEQVR4nO3UPQ6BQRSF4SeULIA1oCFhLYQdsMKpKShsQUs0ShoimULjizE+iZ83uTnN5J7kzsnhzwtpooeqEpjghDNWqD+7KNyZA+aYRpN1wdvwrMECs1yDe4xxjMuXqCmBBrqoeCN1DHI+vYgOdvFsV217gJAwG+wxjLrJSVEoMBilGKTQxjae6KotJVBDPye2zY/on1ty+iekpii1f0Jqir63f36MC9zPZXPS4LCxAAAAAElFTkSuQmCC"
                      alt={""}
                    />
                    <img
                      style={{ filter: "invert(1)" }}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO2UsQqDMBRFj99a7C+4ZtN28YPcHPoHfoFDV90LrwReoYPxJSoorRfukLxcDrmBwAF0BUZAAn4BtzWAEXgAVcAfUL0UIIAz5s81EIkA+Hn5BclS+3YGoAEKoNf1PaVvMQBd4OFnr2vtzclpZlInwOusyNQfVjQArX4FMW41Ew3INSCR9mcvKYDFdewCGLbse0qb9s1P6A2iFooMUuPbMQAAAABJRU5ErkJggg=="
                      alt={""}
                    />
                  </div>
                </TableHeaderWrapper>
              </TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(startIndex, endIndex + 1).map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                {item.username} <Status status={item?.status} />
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.case}</TableCell>
              <TableCell>{item.reason}</TableCell>
              <TableCell>{item.submissionDate}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      {totalPages && (
        <StyledPagination>
          <Button onClick={goToPreviousPage} disabled={currentPage === 1}>
            Prev
          </Button>
          <Pagination
            length={data.length}
            currentPage={currentPage}
            pagSize={pageSize}
            onPageChange={handlePageChange}
          />
          <Button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next
          </Button>
        </StyledPagination>
      )}
    </TableWrapper>
  );
};

export default TableWithPagination;
