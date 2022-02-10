import React from 'react';
import './A11yHidden.css';
import A11yHiddenProps from './A11yHidden.types';

export default function A11yHidden({ as: Tag = 'span', children }: A11yHiddenProps): JSX.Element {
  return <Tag className="a11yHidden">{children}</Tag>;
}
