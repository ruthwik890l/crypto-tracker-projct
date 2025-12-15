import React from "react";
import Pagination from "@mui/material/Pagination";
import "./Pagestyle.css";

const Pageindex = ({ page, handleChange }) => { // Ensure handleChange is correctly passed from props

    const handlePageChange = (event, value) => {
      handleChange(event, value); // Call handleChange function with event and value arguments
    };
  
    return (
      <div className="pagination">
        <Pagination
          count={10}
          page={page}
          onChange={(event, value) => handlePageChange(event,value)} // Pass handlePageChange function directly to onChange
          sx={{
            "& .MuiPaginationItem-text": {
              color: "var(--white) !important",
              border: "1px solid var(--white)",
            },
            "& .MuiPaginationItem-text:hover": {
              backgroundColor: "transparent !important",
            },
            "& .Mui-selected": {
              backgroundColor: "var(--blue)",
              borderColor: "var(--blue)",
            },
            "& .MuiPaginationItem-ellipsis": {
              border: "none",
            },
          }}
        />
      </div>
    );
  };
export default Pageindex;
