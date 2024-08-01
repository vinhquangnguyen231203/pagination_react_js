import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table } from "reactstrap";
import { getProductThunk } from "../redux/productSlice";
import Product from "./Product";


import './products.css'
import Pagination from "react-js-pagination";

export default function Products() {
  const { products, status, error, totalPage } = useSelector((state) => state.products);
  const dispath = useDispatch();

  // State
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispath(getProductThunk(currentPage));
  }, [currentPage]);

  // Function handler
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  if (status === "error") {
    return (
      <div>
        <h1>Error: {error}</h1>
      </div>
    );
  }

  return (
    <Container>
      <h1>Hiển thị phân trang</h1>
      <Container className="mt-3">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
            </tr>
          </thead>
          <tbody>
            {status === "loading" ? (
              <div>
                <h1>....loading</h1>
              </div>
            ) : (
              products &&
              products.map((item, index) => (
                <Product
                  key={index}
                  product={item}
                  handlePageChange={handlePageChange}
                />
              ))
            )}
          </tbody>
        </Table>
      </Container>
      <Container>
        <Pagination
            activePage={currentPage}
            itemsCountPerPage={6}
            totalItemsCount={totalPage}
            pageRangeDisplayed={3}
            onChange={handlePageChange}
        />
        
      </Container>
    </Container>
  );
}
