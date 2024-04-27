import { PaginationButton } from "./Tables.styled";
import React, { JSX } from "react";

type PaginationType = {
  pagSize: number;
  length: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  pagSize,
  length,
  currentPage,
  onPageChange,
}: PaginationType) => {
  const buttons: JSX.Element[] = [];
  const totalPages = Math.ceil(length / pagSize);
  const maxVisibleButtons = 3;
  if (totalPages <= maxVisibleButtons) {
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <PaginationButton
          key={i}
          isActive={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PaginationButton>,
      );
    }
  } else {
    let start = currentPage - Math.floor(maxVisibleButtons / 2);
    let end = currentPage + Math.floor(maxVisibleButtons / 2);

    if (start < 1) {
      start = 1;
      end = maxVisibleButtons;
    }
    if (end > totalPages) {
      end = totalPages;
      start = totalPages - maxVisibleButtons + 1;
    }

    if (start > 1) {
      buttons.push(
        <PaginationButton
            isActive={currentPage === 1}
          key={1}
          onClick={() => onPageChange(1)}
        >
          1
        </PaginationButton>,
      );
      if (start > 2) {
        buttons.push(
          <PaginationButton isActive={false} key="ellipsis1">
            ...
          </PaginationButton>,
        );
      }
    }

    for (let i = start; i <= end; i++) {
      buttons.push(
        <PaginationButton
          key={i}
          isActive={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PaginationButton>,
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        buttons.push(
          <PaginationButton isActive={false} key="ellipsis2">
            ...
          </PaginationButton>,
        );
      }
      buttons.push(
        <PaginationButton
          key={totalPages}
          isActive={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </PaginationButton>,
      );
    }
  }

  return buttons as unknown as JSX.Element;
};

export default Pagination;
