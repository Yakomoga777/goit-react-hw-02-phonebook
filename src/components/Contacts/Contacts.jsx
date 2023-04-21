import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class Contacs extends Component {
  render() {
    const { title, items } = this.props;
    return (
      <>
        <h3>{title}</h3>
        <ul>
          {items.map(item => {
            return <li key={nanoid()}>{item}</li>;
          })}
        </ul>
      </>
    );
  }
}
