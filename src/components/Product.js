import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function Product(props) {
  const { product, handlePageChange } = props;
  return (
    <tr>
      <th scope="row">{product.id}</th>
      <td>{product.name}</td>
    </tr>
  );

  
}
