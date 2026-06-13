import { useState } from "react";
import SearchBar from "./components/SearchBar";
import "./index.css";

// App.jsx — Day 1: root component with search bar wired up
// Day 2: we will add useGitHub hook and render profile data here

function App() {
  const [username, setUsername] = useState("");
  const [searchedUser, setSearchedUser] = useState("");

  function handleSearch(value) {
    if (!value.trim()) return;
    setSearchedUser(value.trim());
  }

  return (
    <div style={styles.wrapper}>

      {/* ── HEADER ── */}
      <header style={styles.header}>
        <h1 style={styles.logo}>
          <span style={{ color: "var(--accent)" }}>Dev</span>Pulse
        </h1>
        <p style={styles.tagline}>GitHub Profile Analyzer</p>
      </header>

      {/* ── SEARCH ── */}
      <SearchBar
        value={username}
        onChange={setUsername}
        onSearch={handleSearch}
      />

      {/* ── PLACEHOLDER until Day 2 ── */}
      {searchedUser && (
        <div style={styles.placeholder}>
          <p style={{ color: "var(--muted)", fontSize: "14px" }}>
            Searching for{" "}
            <span style={{ color: "var(--accent)", fontWeight: 600 }}>
              @{searchedUser}
            </span>
            ... (API hook coming Day 2)
          </p>
        </div>
      )}

    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "40px 16px",
  },
  header: {
    textAlign: "center",
    marginBottom: "36px",
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
  placeholder: {
    marginTop: "24px",
    padding: "20px",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default App;