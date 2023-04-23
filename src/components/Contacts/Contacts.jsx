import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

export class Contacs extends Component {
  render() {
    const { title, items, onFilterInput, valuefilter } = this.props;
    return (
      <>
        <h3>{title}</h3>
        <input
          type="text"
          name="filter"
          required
          value={valuefilter}
          onChange={onFilterInput}
        />
        <ul>
          {items.map(item => {
            return (
              <li key={item.id}>
                {item.name}: {item.number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
