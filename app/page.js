const focusAreas = [
  ['01', 'Natural Language Processing', 'Language technologies that help people discover, understand, and communicate knowledge.'],
  ['02', 'Text Mining', 'Methods for finding patterns, evidence, and structure in large collections of documents.'],
  ['03', 'Computational Linguistics', 'Data-driven approaches to the structure, meaning, and use of human language.'],
  ['04', 'Machine Learning', 'Reliable and interpretable learning systems for text-centered research questions.'],
];

const selectedPublications = [
  ['Measuring Evidence in Scientific Text', 'A. Rivera, M. Chen, & L. Okafor', '2025'],
  ['Context-Aware Models for Long Documents', 'S. Patel & A. Rivera', '2024'],
  ['A Practical Guide to Reproducible Text Analysis', 'M. Chen, J. Park, & A. Rivera', '2024'],
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="page-shell hero-grid">
          <div>
            <p className="eyebrow">Research laboratory</p>
            <h1>Understanding text,<br /><em>at scale.</em></h1>
            <p className="hero-copy">CAT is a research group studying how computational methods can make the world’s text more useful, accessible, and understandable.</p>
            <div className="hero-actions">
              <a className="button" href="/join-us">Join our lab <span>→</span></a>
              <a className="text-link" href="/publications">Explore our work <span>↗</span></a>
            </div>
          </div>
          <aside className="hero-note">
            <span className="note-line" />
            <p>Based at the intersection of language, data, and society.</p>
            <small>Established 2018</small>
          </aside>
        </div>
      </section>

      <section className="section page-shell">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">What we study</p><h2>Research focus</h2></div>
          <p>We build thoughtful computational tools for asking ambitious questions about language and text.</p>
        </div>
        <div className="focus-grid">
          {focusAreas.map(([number, title, description]) => (
            <article className="focus-card" key={title}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-band">
        <div className="page-shell about-grid">
          <p className="eyebrow">About the lab</p>
          <div>
            <h2>Rigorous methods for meaningful language questions.</h2>
            <p>We are an interdisciplinary group of researchers, students, and collaborators. Our work combines computational modeling with humanistic and social-scientific insight to study language in its many forms.</p>
            <a className="text-link" href="/people">Meet the people of CAT <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="section page-shell publications-preview">
        <div className="section-heading inline-heading"><div><p className="eyebrow">Selected work</p><h2>Recent publications</h2></div><a className="text-link" href="/publications">All publications <span>→</span></a></div>
        <div className="publication-list">
          {selectedPublications.map(([title, authors, year]) => (
            <article className="publication-row" key={title}>
              <span className="pub-year">{year}</span><div><h3>{title}</h3><p>{authors}</p></div><span className="arrow">↗</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
