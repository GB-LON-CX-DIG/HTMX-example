# Star Wars Characters HTMX App

This is a simple single-page application built using HTMX and Node.js (Express). It displays a list of Star Wars characters in a table and allows filtering by gender, affiliation, and name search.

## Features

- Filter characters by gender and affiliation
- Search characters by name
- Real-time updates as you type or change filters
- Reset button to clear all filters and search input

## Setup

```bash
# Install dependencies
npm install

# Run development server with auto-reload and browser opening
npm run dev

# Run production server
npm start
```

Then visit [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
project-root/
├── public/          # Static CSS
├── views/           # EJS templates and partials
│   └── partials/    # EJS template fragments
├── data/            # Sample data files
├── app.js           # Express server
└── README.md        # Project documentation
```

## Dependencies

- Express 5.1.0
- EJS 3.1.0
- HTMX 1.9.2 (loaded via CDN)
- Nodemon 3.1.10 (dev dependency)
