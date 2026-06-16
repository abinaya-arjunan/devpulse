// App.jsx — Day 5: dark/light mode toggle, footer, full polish

import { useState } from "react";
import SearchBar      from "./components/SearchBar";
import ProfileCard    from "./components/ProfileCard";
import RepoList       from "./components/RepoList";
import LanguageChart  from "./components/LanguageChart";
import StatsGrid      from "./components/StatsGrid";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorCard      from "./components/ErrorCard";
import useGitHub      from "./hooks/useGitHub";
import "./index.css";

function App() {
  const [username, setUsername]         = useState("");
  const [searchedUser, setSearchedUser] = useState("");
  const [darkMode, setDarkMode]         = useState(true);

  const { user, repos, loading, error } = useGitHub(searchedUser);

  function handleSearch(value) {
    if (!value.trim()) return;
    setSearchedUser(value.trim().toLowerCase());
  }

  function toggleTheme() {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
  }

  return (
    <div style={styles.wrapper}>

      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerTop}>
          <h1 style={styles.logo}>
            <span style={{ color: "var(--accent)" }}>Dev</span>Pulse
          </h1>
          {/* Dark / Light toggle */}
          <button onClick={toggleTheme} style={styles.themeBtn} title="Toggle theme">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
        <p style={styles.tagline}>GitHub Profile Analyzer</p>
      </header>

      {/* SEARCH */}
      <SearchBar
        value={username}
        onChange={setUsername}
        onSearch={handleSearch}
      />

      {/* RESULTS */}
      <div style={styles.results}>

        {loading && <LoadingSpinner username={searchedUser} />}

        {error && !loading && (
          <ErrorCard
            message={error}
            onRetry={() => handleSearch(searchedUser)}
          />
        )}

        {user && !loading && !error && (
          <div style={styles.grid}>
            <ProfileCard user={user} />
            <div className="two-col" style={styles.twoCol}>
              <StatsGrid user={user} repos={repos} />
              <LanguageChart repos={repos} />
            </div>
            <RepoList repos={repos} />
          </div>
        )}

        {!searchedUser && !loading && (
          <div style={styles.empty}>
            <span style={styles.emptyIcon}>🔍</span>
            <p style={styles.emptyText}>
              Search any GitHub username to analyze their profile
            </p>
            <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "6px" }}>
              Try searching your own username: <strong style={{ color: "var(--accent)" }}>abinaya-arjunan</strong>
            </p>
          </div>
        )}

      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        Built with React + Recharts &nbsp;·&nbsp;
        <a
          href="https://github.com/abinaya-arjunan/devpulse"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
        &nbsp;·&nbsp; Data from{" "}
        <a href="https://api.github.com" target="_blank" rel="noopener noreferrer">
          GitHub API
        </a>
      </footer>

    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "40px 16px 60px",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  headerTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    marginBottom: "6px",
    position: "relative",
  },
  logo: {
    fontSize: "36px",
    fontWeight: 700,
    letterSpacing: "-1px",
  },
  themeBtn: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "6px 10px",
    fontSize: "18px",
    cursor: "pointer",
    position: "absolute",
    right: 0,
    transition: "border-color 0.15s",
  },
  tagline: {
    fontSize: "14px",
    color: "var(--muted)",
  },
  results: {
    marginTop: "28px",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  empty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    padding: "60px 0",
  },
  emptyIcon: { fontSize: "40px" },
  emptyText: {
    fontSize: "14px",
    color: "var(--muted)",
    textAlign: "center",
  },
  footer: {
    marginTop: "60px",
    textAlign: "center",
    fontSize: "12px",
    color: "var(--muted)",
  },
};

export default App;