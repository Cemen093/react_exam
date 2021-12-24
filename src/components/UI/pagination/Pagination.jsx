import React from 'react';
import {usePagination} from "../../hooks/usePagination";
import cl from './pagination.module.css'

const Pagination = ({totalPages, page, changePage}) => {
  const pagesArray = usePagination(totalPages);

  return (
    <div className={cl.page_wrapper}>
      {pagesArray.map(p =>
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? [cl.page, cl.page_current].join(' ') : cl.page}>
            {p}
          </span>)}
    </div>
  );
};

export default Pagination;