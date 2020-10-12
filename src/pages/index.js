import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Getting Started</>,
    imageUrl: 'img/getting-started.svg',
    description: (
      <>
        A step-by-step guide to setup Axioms according to your authentication and access-control requirements.
      </>
    ),
    pageUrl: "docs/getting-started/index"
  },
  {
    title: <>SDKs & Samples</>,
    imageUrl: 'img/sdks-samples.svg',
    description: (
      <>
      Use our languages and framework specific SDKs and samples to integrate Axioms with your apps and services.
      </>
    ),
    pageUrl: "docs/sdks-samples/index"
  },
  {
    title: <>OpenID & OAuth 2</>,
    imageUrl: 'img/standard-compliance.svg',
    description: (
      <>
        Deep-dive into all OpenID Connect (OIDC) and OAuth 2 compliant platform features using our advanced guides.
      </>
    ),
    pageUrl: "docs/openid-connect/index"
  },
];

function Feature({imageUrl, title, description, pageUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="learn-more"><a href={pageUrl}>Learn more →</a></p>
    </div>
    
  );
}

const iframe = '<iframe src="https://d3metalab.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>'

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}



function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Home"
      description="Add strong authentication, fine-grained authorization in your apps, devices, and APIs.">
      <header className={classnames('hero hero--secondary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button cta-btn button--outline button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started/index')}>
              <i className="feather icon-arrow-right"></i> Get started
            </Link>
            <Link
              className={classnames(
                'button cta-btn button--outline button--success button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/sdks-samples/index')}>
              <i className="feather icon-github"></i> Explore SDKs
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
