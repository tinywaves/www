import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog">
            Blogs →
          </Link>
        </div>
      </div>
    </header>
  );
};

export default function Home(): JSX.Element {
  return (
    <Layout description="tinyRipple's Personal Website(Technology accumulations, Technology blogs...) | tinyRipple's 个人网站(技术积累, 技术博客...)">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
