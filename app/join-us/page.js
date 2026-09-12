const opportunities = [
  ['Graduate Students', 'We welcome curious students interested in language, computation, and real-world questions. Prospective students should apply through the university’s graduate program and mention CAT in their statement.'],
  ['Research Assistants', 'Undergraduate and master’s students can contribute to data collection, annotation, software, and analysis. We value careful work and a willingness to learn.'],
  ['Collaborators', 'We enjoy working across disciplines. If your research involves text, language, or human communication, we would be glad to start a conversation.'],
];

export default function JoinUsPage() {
  return <div className="page-shell interior-page join-page">
    <div className="page-intro"><p className="eyebrow">Work with us</p><h1>Join CAT</h1><p>We are always interested in meeting thoughtful people excited by the possibilities of computational text research.</p></div>
    <div className="opportunity-list">{opportunities.map(([title, description], index) => <article className="opportunity" key={title}><span>0{index + 1}</span><div><h2>{title}</h2><p>{description}</p></div></article>)}</div>
    <section className="contact-panel"><p className="eyebrow">Get in touch</p><h2>Interested in working together?</h2><p>Send a short note about your interests, background, and the work you would like to explore.</p><a className="button light-button" href="mailto:cat-lab@example.edu">cat-lab@example.edu <span>→</span></a></section>
  </div>;
}
