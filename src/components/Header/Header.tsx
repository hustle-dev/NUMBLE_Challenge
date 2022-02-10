import React from 'react';
import HeaderProps from './Header.types';

export default function Header({ children }: HeaderProps): JSX.Element {
  return <header className="header">{children}</header>;
}
