import React from 'react';
import { SidebarProps } from './sidebar.props';
import Menu from '../menu/menu';
import cn from 'classnames';
import styles from './sidebar.module.css';
import Link from 'next/link';
import Logo from '../logo2.svg';
import Divider from '../../components/divider/divider';
import { Search } from '../../components';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Link href={'/'}>
        <Logo style={{ width: '40px', height: '40px' }} />
        <Divider />
      </Link>
      <Search />
      <Menu />
    </div>
  );
};

export default Sidebar;
