# DevPulse 🔍

A GitHub Profile Analyzer built with **React + Recharts** — search any GitHub username and get a beautiful visual breakdown of their profile.

🔗 **[Live Demo](https://abinaya-arjunan.github.io/devpulse)**

---

## Features

- 🔍 **Search any GitHub username** — real data from the GitHub REST API
- 👤 **Profile card** — avatar, bio, followers, following, location, blog
- 📊 **Language chart** — horizontal bar chart of top languages using Recharts
- 🏆 **Stats grid** — total stars, forks, watchers, most starred repo, account age
- 📁 **Top repositories** — sorted by stars, with language badges and fork counts
- 🌙 **Dark / Light mode toggle**
- ⚡ **Loading, error, and empty states** handled cleanly
- 📱 **Fully responsive** — works on mobile

---

## Tech Stack

| Layer       | Tech                        |
|-------------|-----------------------------|
| Framework   | React 18 (Vite)             |
| Charts      | Recharts                    |
| API         | GitHub REST API (no key needed) |
| Styling     | CSS custom properties       |
| Deploy      | GitHub Pages (gh-pages)     |

---

## Project Structure

```
src/
├── App.jsx
├── index.css
├── main.jsx
├── components/
│   ├── SearchBar.jsx
│   ├── ProfileCard.jsx
│   ├── RepoCard.jsx
│   ├── RepoList.jsx
│   ├── LanguageChart.jsx
│   ├── StatsGrid.jsx
│   ├── LoadingSpinner.jsx
│   └── ErrorCard.jsx
├── hooks/
│   └── useGitHub.js
└── utils/
    └── helpers.js
```

---

## Run Locally

```bash
git clone https://github.com/abinaya-arjunan/devpulse.git
cd devpulse
npm install
npm run dev
```

---

## What I Learned

- Writing custom React hooks (`useGitHub`) with `useEffect` and `useState`
- Fetching parallel API calls with `Promise.all`
- Handling loading, error, and success UI states in React
- Transforming raw API data into chart-ready format
- Using Recharts `BarChart` with custom colors and tooltips
- Passing data between components via props
- Deploying a Vite React app to GitHub Pages

---

## Roadmap

- [ ] Commit activity heatmap
- [ ] Compare two GitHub profiles side by side
- [ ] Export profile as PDF

---

