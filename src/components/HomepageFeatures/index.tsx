import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  description: JSX.Element;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'About Me',
    description: <>Now Working At MagicCreative HZ.</>
  },
  {
    title: 'My Skills',
    description: (
      <>
        React.js, Node.js, TypeScript, Go and so on.
        <div>
          <a href="https://github.com/tinyRipple">GitHub</a>
        </div>
      </>
    )
  },
  {
    title: 'Contact Me',
    description: <>isdhzh@outlook.com</>
  }
];

const Feature = ({ title, description }: FeatureItem) => (
  <div className={clsx('col col--4')}>
    <div className="text--center padding-horiz--md">
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
