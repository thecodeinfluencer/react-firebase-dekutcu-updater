import React from "react";

import { books } from "../db/library";

export default function Available() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Book Title</th>
          <th scope="col">Total Available</th>
        </tr>
      </thead>
      <tbody>
        {books.map(({ id, title, number, available }) => (
          <tr key={id}>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{available}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
