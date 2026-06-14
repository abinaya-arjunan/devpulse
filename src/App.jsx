// App.jsx — Day 2: useGitHub hook wired up, shows profile card on search

import { useState } from "react";
import SearchBar     from "./components/SearchBar";
import ProfileCard   from "./components/ProfileCard";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorCard     from "./components/ErrorCard";
import useGitHub     from "./hooks/useGitHub";
import "./index.css";

function App() {
  const [username, setUsername]       = useState("");
  const [searchedUser, setSearchedUser] = useState("");

  // Custom hook — fetches user + repos when searchedUser changes
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

      {/* RESULTS AREA */}
      <div style={styles.results}>

        {/* Loading state */}
        {loading && <LoadingSpinner username={searchedUser} />}

        {/* Error state */}
        {error && !loading && (
          <ErrorCard
            message={error}
            onRetry={() => handleSearch(searchedUser)}
          />
        )}

        {/* Success state — profile card */}
        {user && !loading && !error && (
          <div style={styles.grid}>
            <ProfileCard user={user} />
            {/* Day 3: RepoCard list goes here */}
            {/* Day 4: Language chart + StatsGrid go here */}
          </div>
        )}

        {/* Empty state — nothing searched yet */}
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
    maxWidth: "860px",
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
    gap: "20px",
  },
  empty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    padding: "60px 0",
  },
  emptyIcon: {
    fontSize: "40px",
  },
  emptyText: {
    fontSize: "14px",
    color: "var(--muted)",
    textAlign: "center",
  },
};

export default App;