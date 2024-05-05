import Pagination from 'react-bootstrap/Pagination';

export default function MyPagination({ pages, currentPage, setCurrentPage }) {
    return (
        <Pagination>
            {currentPage === 1 ? <Pagination.Prev disabled /> : <Pagination.Prev />}
            {[...Array(pages).keys()]
                .map(i => {
                    // FIXME: truncate pages to 1 ... 8,9,10,11,12 ... last, if page 10
                    if (currentPage === i + 1) {
                        return <Pagination.Item active key={i} onClick={() => setCurrentPage(i + 1)}>{i + 1}</Pagination.Item>
                    } else {
                        return <Pagination.Item key={i} onClick={() => setCurrentPage(i + 1)}>{i + 1}</Pagination.Item>
                    }
                })}
            {currentPage === pages ? <Pagination.Next disabled /> : <Pagination.Next />}
        </Pagination>
    )
}