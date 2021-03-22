import React from "react";

import { books } from "../db/library";

export default function All() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Book Title</th>
          <th scope="col">Total Books</th>
          <th scope="col">Available</th>
        </tr>
      </thead>
      <tbody>
        {books.map(({ id, title, number, available }) => (
          <tr key={id}>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{number}</td>
            <td>{available}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
