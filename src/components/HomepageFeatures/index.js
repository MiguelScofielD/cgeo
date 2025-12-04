import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    
    title: '',
    Svg: require('@site/static/img/servidor.svg').default,
    description: (
      
      <>
        Tutorial para reiniciar os serviços da Cia Prod Geoinfo hospedados no servidor.
      </>
    ),
    link: '/docs/category/tileserver-gl',
    buttonText: 'SERVIDOR',
  },
  {
    title: '',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Sistema de Apoio a Produção.
      </>
    ),
    link: '/docs/category/sap',
    buttonText: 'SAP',
  },
  {
    title: '',
    Svg: require('@site/static/img/fme.svg').default,
    description: (
      <>
        Feature Manipulation Engine
      </>
    ),
    link: '/docs/disseminacao',
    buttonText: 'Disseminação',
  },
];

function Feature({Svg, title, description,link, buttonText}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        {link && (
          <Link className="button button--primary button--sm" to={link}>
            {buttonText}
          </Link>
        )}

        <p className={styles.featureDescription}>{description}</p>
        
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
