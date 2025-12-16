import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', 'black-bg')}>
      <div className="container">
        <div className="glass-card" style={{padding: '4rem 2rem', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem', backdropFilter: 'blur(16px)'}}>
          <div style={{flex: 1, textAlign: 'left'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>

              <Heading as="h1" className="hero__title" style={{color: 'white', fontWeight: '800', textAlign: 'left', margin: 0}}>
                Introduction to Physical AI & Humanoid Robotics
              </Heading>
            </div>
            <p className="hero__subtitle" style={{color: 'white', fontSize: '1.1rem', marginBottom: '2rem', textAlign: 'left'}}>
              A comprehensive textbook for students and professionals applying their AI knowledge to control Humanoid Robots
            </p>
            <div style={{display: 'flex', justifyContent: 'flex-start', gap: '1rem', flexWrap: 'wrap'}}>
              <Link
                className="button button--secondary button--lg button--glass"
                to="/docs/foundations-of-physical-ai">
                Start Learning
              </Link>
            </div>
          </div>
          <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <img
              src="/img/icon.png"
              alt="Robot illustration"
              style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', maxHeight: '300px'}}
            />
          </div>
        </div>

        <div className="text--center padding-horiz--md" style={{marginTop: '4rem'}}>
          <div className="row">
            <div className="col col--4">
              <div className="glass-card" style={{height: '100%'}}>
                <h2 style={{color: 'white', fontWeight: 'bold'}}>AI-Powered</h2>
                <p>Integrated RAG chatbot to answer questions based on the entire book content</p>
              </div>
            </div>
            <div className="col col--4">
              <div className="glass-card" style={{height: '100%'}}>
                <h2 style={{color: 'white', fontWeight: 'bold'}}>Personalized</h2>
                <p>Content adapts to your background (software/hardware focus)</p>
              </div>
            </div>
            <div className="col col--4">
              <div className="glass-card" style={{height: '100%'}}>
                <h2 style={{color: 'white', fontWeight: 'bold'}}>Multilingual</h2>
                <p>Available in English and Urdu for broader accessibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageModules() {
  const modules = [
    {
      title: 'Foundations of Physical AI',
      description: 'Introduction to Physical AI concepts and principles',
      chapters: 2,
      difficulty: 'Beginner',
      link: '/docs/foundations-of-physical-ai'
    },
    {
      title: 'Humanoid Robotics Fundamentals',
      description: 'Core concepts in humanoid robot design and control',
      chapters: 2,
      difficulty: 'Intermediate',
      link: '/docs/humanoid-robotics-fundamentals'
    },
    {
      title: 'Advanced Control Systems',
      description: 'Advanced techniques for humanoid robot control',
      chapters: 1,
      difficulty: 'Advanced',
      link: '/docs/advanced-control-systems'
    },
    {
      title: 'Real-world Applications',
      description: 'Practical applications of Physical AI and humanoid robots',
      chapters: 1,
      difficulty: 'Intermediate',
      link: '/docs/real-world-applications'
    }
  ];

  return (
    <section className="features-section">
      <div className="container padding-horiz--md">
        <Heading as="h2" className="text-gradient text--center" style={{marginBottom: '3rem', fontSize: '2.5rem'}}>
          Course Modules
        </Heading>
        <div className="row" style={{rowGap: '2rem'}}>
          {modules.map((module, index) => (
            <div key={index} className="col col--6">
              <div className="glass-card module-card" style={{minHeight: '300px', height: '100%'}}>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <div style={{marginTop: 'auto', paddingTop: '1rem'}}>
                  <p><strong>Chapters:</strong> {module.chapters}</p>
                  <p><strong>Difficulty:</strong> {module.difficulty}</p>
                  <Link
                    className="button button--primary button--block"
                    to={module.link}>
                    Explore Module
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Introduction to Physical AI & Humanoid Robotics`}
      description="A comprehensive textbook for students and professionals applying their AI knowledge to control Humanoid Robots">
      <HomepageHeader />
      <main>
        <HomepageModules />
      </main>
    </Layout>
  );
}


