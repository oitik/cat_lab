const news = [
  ['September 10, 2026', 'CAT welcomes new graduate researchers', 'Three new doctoral students join the lab this autumn, bringing interests in multilingual NLP, digital humanities, and evaluation.'],
  ['August 22, 2026', 'Paper accepted at EMNLP 2026', 'Our work on evaluating contextual evidence in long-form text will be presented at this year’s conference.'],
  ['June 05, 2026', 'New project: Public discourse over time', 'CAT begins a collaborative project examining how public language shifts across decades of news archives.'],
  ['March 18, 2026', 'Open-source dataset release', 'We released an annotated collection for studying scientific claims and their supporting evidence.'],
];

export default function NewsPage() {
  return <div className="page-shell interior-page">
    <div className="page-intro"><p className="eyebrow">From CAT</p><h1>News & updates</h1><p>Recent work, people, and milestones from the lab.</p></div>
    <div className="news-list">{news.map(([date, title, description]) => <article className="news-item" key={title}><time>{date}</time><div><h2>{title}</h2><p>{description}</p></div><span className="arrow">↗</span></article>)}</div>
  </div>;
}
