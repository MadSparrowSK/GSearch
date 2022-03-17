import React from 'react';

import classes from './Pagination.module.css';

const Pagination = ({changePage, arrayPages, page}) => {
    return (
        <div className={classes.paginationBlock}>
            {
                arrayPages.map(p =>
                    <div className={[classes.block, p == page ? classes.currentPage : ''].join(' ')} onClick={e => changePage(p)}>
                        <span>{p}</span>
                    </div>
                )
            }
        </div>
    );
};

export default Pagination;