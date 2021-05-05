import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function Pages({page, setPage, nextPage}) {
    const addPage = (num) => {
       setPage(prevPage => prevPage + num)
    }
    return (
       <Pagination>
           {page !== 1 && <Pagination.Prev onClick={() => addPage(-1)}/> }
           {page !== 1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item> }
           {page > 2 && <Pagination.Ellipsis/>}
           {page > 2 && <Pagination.Item onClick={() => addPage(-1)}>{page - 1}</Pagination.Item>}
           <Pagination.Item active>{page}</Pagination.Item>
           {nextPage && <Pagination.Item onClick={() => addPage(1)}>{page + 1}</Pagination.Item>}
           {nextPage && <Pagination.Next onClick={() => addPage(1)}/>}
       </Pagination>
    )
}
