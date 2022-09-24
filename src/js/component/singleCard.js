import React, { Component } from "react";

export const SingleCard = (props) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr className="text-danger">
          <th scope="col">Name</th>
          <th scope="col">Birth Year</th>
          <th scope="col">Gender</th>
          <th scope="col">Height</th>
          <th scope="col">Skin Color</th>
          <th scope="col">Eye Color</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-danger">
          <td>{props.name}</td>
          <td>{props.birthYear}</td>
          <td>{props.gender}</td>
          <td>{props.height}</td>
          <td>{props.skinColor}</td>
          <td>{props.eyeColor}</td>
        </tr>
      </tbody>
    </table>
  );
};
