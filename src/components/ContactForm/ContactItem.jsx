import React, { Component } from 'react';

export function ContactItem({ id, name, number, handleDelete }) {
  return (
    <>
      <li key={id}>
        {name}: {number}
        {/* <button type="button" onClick={() => handleDelete(id)}> */}
        <button
          type="button"
          onClick={() => {
            handleDelete(id);
            // const buttonId = id;
            // console.log(buttonId);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
}
