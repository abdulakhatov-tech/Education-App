import React, { FunctionComponent } from 'react';
import { LayoutProps } from './layout.props';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Footer from './footer/footer';
import styles from './layout.module.css';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { ScrollUp } from '../components';
import { useRouter } from 'next/router';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
      <ScrollUp />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    const router = useRouter();

    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        {router.asPath === '/' ? (
          <Component {...props} />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      </AppContextProvider>
    );
  };
};
