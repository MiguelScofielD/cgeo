import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    
    title: 'Servidor',
    Svg: require('@site/static/img/servidor.svg').default,
    description: (
      
      <>
        Tutorial para reiniciar os serviços da Cia Prod Geoinfo hospedados no servidor.
      </>
    ),
  },
  {
    title: 'SAP',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Sistema de Apoio a Produção.
      </>
    ),
  },
  {
    title: 'FME',
    Svg: require('@site/static/img/fme.svg').default,
    description: (
      <>
        Feature Manipulation Engine
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
