import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'
const Pagination = ({ onChangePage, currentPage }) => {
    return (
        <ReactPaginate
            className={styles.Pagination}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
            forcePage={currentPage - 1}
        />
    );
}

export default Pagination;