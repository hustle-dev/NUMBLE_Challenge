import React from 'react';
import './Board.css';
import BoardProps from './Board.types';

export default function Board({ children }: BoardProps): JSX.Element {
  return <div className="wrapper">{children}</div>;
}
