const publications = [
  ['Measuring Evidence in Scientific Text', 'A. Rivera, M. Chen, & L. Okafor', '2025', 'Proceedings of ACL', '#'],
  ['Context-Aware Models for Long Documents', 'S. Patel & A. Rivera', '2024', 'Transactions of the Association for Computational Linguistics', '#'],
  ['A Practical Guide to Reproducible Text Analysis', 'M. Chen, J. Park, & A. Rivera', '2024', 'Journal of Computational Social Science', '#'],
  ['Mapping Change in Public Discourse', 'D. Kim, E. Torres, & L. Okafor', '2023', 'Proceedings of EMNLP', '#'],
  ['Interpretable Representations for Text Mining', 'A. Rivera & D. Kim', '2023', 'Information Processing & Management', '#'],
];

export default function PublicationsPage() {
  return <div className="page-shell interior-page">
    <div className="page-intro"><p className="eyebrow">Research output</p><h1>Publications</h1><p>A selection of recent work from members and collaborators of CAT.</p></div>
    <div className="publication-list full-list">{publications.map(([title, authors, year, venue, link]) => <article className="publication-row" key={title}><span className="pub-year">{year}</span><div><h2>{title}</h2><p>{authors}</p><p className="venue">{venue}</p></div><a className="arrow publication-link" href={link} aria-label={`View ${title}`}>↗</a></article>)}</div>
  </div>;
}
