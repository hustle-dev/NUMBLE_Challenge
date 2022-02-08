import { ReactNode } from 'react';

export default interface A11yHiddenProps {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}
