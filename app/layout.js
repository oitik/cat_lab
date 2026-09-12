import './globals.css';

// The root layout wraps every route in the App Router. Shared UI such as the
// navigation and footer belongs here, so it does not need to be repeated.
export const metadata = {
  title: 'CAT — Computational Analysis of Text',
  description: 'A research laboratory for computational analysis of text.',
};

const navigation = [
  ['Home', '/'],
  ['News', '/news'],
  ['People', '/people'],
  ['Publications', '/publications'],
  ['Join Us', '/join-us'],
  ['Contact', '/contact'],
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="nav-shell">
            <a className="brand" href="/" aria-label="CAT home">
              {/* Files in public/ are served from the site root. */}
              <img className="brand-logo" src="/images/cat_lab.jpeg" alt="CAT lab logo" />
              <span className="brand-title">
                <strong>CAT</strong>
                <span className="brand-name">Computational Analysis of Text</span>
              </span>
            </a>
            <nav className="main-nav" aria-label="Main navigation">
              {navigation.map(([label, href]) => (
                <a key={href} href={href}>{label}</a>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="footer-shell">
            <p><strong>CAT</strong> — Computational Analysis of Text</p>
            <p>University Research Lab · © {new Date().getFullYear()}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
