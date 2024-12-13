import React from "react";

const Pagination =(props)=>{
    const handlePageChange =(pagenum)=>{
        props.onPageChange(pagenum);
    }
    return(<div className="pagination">
        <button onClick={()=>handlePageChange(props.currentPage - 1)}
            disabled={props.currentPage === 1}>
            Previous
        </button>
        {Array.from({length: props.totalPages}, (_, index) => (
            <button
            key={index} onClick={() => handlePageChange(index + 1)}
            className={props.currentPage === index + 1 ? 'active' : ''}>
                {index + 1}
            </button>))}
        <button onClick={() => handlePageChange(props.currentPage + 1)}
            disabled={props.currentPage === props.totalPages}>
            Next
        </button>
    </div>)
}
export default Pagination;