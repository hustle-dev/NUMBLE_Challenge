import React, { memo } from 'react';
import HeaderProps from './Header.types';

export default memo(function Header({ children }: HeaderProps): JSX.Element {
  return <header className="header">{children}</header>;
});
