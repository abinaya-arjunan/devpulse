// App.jsx — Day 4: LanguageChart + StatsGrid added

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

  const { user, repos, loading, error } = useGitHub(searchedUser);

  function handleSearch(value) {
    if (!value.trim()) return;
    setSearchedUser(value.trim().toLowerCase());
  }

  return (
    <div style={styles.wrapper}>

      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.logo}>
          <span style={{ color: "var(--accent)" }}>Dev</span>Pulse
        </h1>
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

            {/* Row 1: Profile card */}
            <ProfileCard user={user} />

            {/* Row 2: Stats + Language chart side by side */}
            <div style={styles.twoCol}>
              <StatsGrid user={user} repos={repos} />
              <LanguageChart repos={repos} />
            </div>

            {/* Row 3: Top repos */}
            <RepoList repos={repos} />

          </div>
        )}

        {!searchedUser && !loading && (
          <div style={styles.empty}>
            <span style={styles.emptyIcon}>🔍</span>
            <p style={styles.emptyText}>
              Search any GitHub username to analyze their profile
            </p>
          </div>
        )}

      </div>
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
  logo: {
    fontSize: "36px",
    fontWeight: 700,
    letterSpacing: "-1px",
    marginBottom: "6px",
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
    gap: "12px",
    padding: "60px 0",
  },
  emptyIcon: { fontSize: "40px" },
  emptyText: {
    fontSize: "14px",
    color: "var(--muted)",
    textAlign: "center",
  },
};

export default App;