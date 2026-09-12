# CAT Lab

**CAT — Computational Analysis of Text** is a research laboratory website built with Next.js. It presents the lab's work at the intersection of language, data, and society, with a focus on natural language processing, text mining, computational linguistics, and machine learning.

## Features

- Responsive research-lab homepage with research focus areas and selected publications
- Dedicated pages for lab news, team members, publications, and opportunities to join the lab
- Shared navigation, branding, metadata, and footer across all pages
- Locally served images and reusable, global styling
- Contact call-to-action for prospective students, research assistants, and collaborators

## Project structure

```text
cat_lab/
├── app/
│   ├── globals.css            # Global styles and responsive layout rules
│   ├── layout.js              # Shared page layout, navigation, and footer
│   ├── page.js                # Homepage
│   ├── news/page.js           # News and lab updates
│   ├── people/page.js         # Faculty, researchers, and student profiles
│   ├── publications/page.js   # Research publication list
│   └── join-us/page.js        # Opportunities and contact information
├── public/
│   └── images/                # Logo, portraits, and other static assets
├── package.json               # Dependencies and npm scripts
├── package-lock.json          # Locked dependency versions
└── .gitignore                 # Files excluded from version control
```

## Getting started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

```bash
npm run dev    # Start the local development server
npm run build  # Create a production build
npm run start  # Serve the production build
npm run lint   # Run linting
```
