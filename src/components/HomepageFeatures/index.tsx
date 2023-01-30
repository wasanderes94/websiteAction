import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

//const diagram = require('@site/src/images/diagram.jpg');
/* const FeatureList: FeatureItem[] = [{
  title: 'Easy to Use',
  Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  description: (
    <>
      Docusaurus was designed from the ground up to be easily installed and
      used to get your website up and running quickly.
    </>
  ),
},]; */

export default function HomepageFeatures(): JSX.Element {
  try {
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
             <img src={require('@site/images/diagram.jpg').default}></img>
          </div>
        </div>
      </section>
    );
  } catch (err) {
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
             <div className="alert alert--warning" role="alert">
              Architecture diagram is missing. Please provide a diagram that shows the architecture of your components inside your monorepo.
             </div>
          </div>
        </div>
      </section>
    );
  }
}
