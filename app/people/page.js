const groups = [
  ['Faculty', [['Dr. Amara Rivera', 'Director & Associate Professor', 'Natural language processing, computational social science'], ['Dr. Daniel Kim', 'Associate Professor', 'Machine learning, information retrieval']]],
  ['Researchers', [['Dr. Leila Okafor', 'Research Scientist', 'Scientific text mining, model evaluation'], ['Marcus Chen', 'Postdoctoral Researcher', 'Digital humanities, historical language data']]],
  ['Graduate Students', [['Sofia Patel', 'PhD Candidate', 'Multilingual NLP, fairness in language technologies'], ['Jonah Park', 'PhD Candidate', 'Document understanding, knowledge extraction'], ['Elena Torres', 'PhD Student', 'Computational linguistics, discourse analysis']]],
];

// A small reusable component keeps every profile card consistent.
function PersonCard({ person, index }) {
  const [name, role, interests] = person;
  return <article className="person-card"><img src={`/images/profile.png`} alt={`Placeholder portrait for ${name}`} /><div><h3>{name}</h3><p className="person-role">{role}</p><p className="person-interests">{interests}</p></div></article>;
}

export default function PeoplePage() {
  let index = 0;
  return <div className="page-shell interior-page">
    <div className="page-intro"><p className="eyebrow">Our community</p><h1>People</h1><p>CAT brings together researchers with different perspectives on language, data, and computation.</p></div>
    {groups.map(([group, people]) => <section className="people-group" key={group}><h2>{group}</h2><div className="people-grid">{people.map(person => <PersonCard key={person[0]} person={person} index={index++} />)}</div></section>)}
  </div>;
}
