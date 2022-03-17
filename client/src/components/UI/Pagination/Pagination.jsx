import React, {useEffect, useState} from 'react';

import classes from './Pagination.module.css'

const Pagination = ({totalCount}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {

    }, [])

    return (
        <div className={classes.paginationBar}>

        </div>
    );
};

export default Pagination;