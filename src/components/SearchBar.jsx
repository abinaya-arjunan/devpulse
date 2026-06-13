import { useState } from "react";

// SearchBar.jsx — controlled input component
// Props:
//   value      → current input value (controlled by App)
//   onChange   → update App state on every keystroke
//   onSearch   → called when user submits (button click or Enter key)

function SearchBar({ value, onChange, onSearch }) {

  function handleKeyDown(e) {
    if (e.key === "Enter") onSearch(value);
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.inputRow}>

        {/* GitHub icon prefix */}
        <span style={styles.icon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--muted)">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </span>

        {/* Controlled text input */}
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          style={styles.input}
          aria-label="GitHub username"
          autoComplete="off"
          spellCheck="false"
        />

        {/* Search button */}
        <button
          onClick={() => onSearch(value)}
          style={styles.button}
          disabled={!value.trim()}
        >
          Analyze
        </button>

      </div>

      {/* Quick example links */}
      <div style={styles.examples}>
        <span style={styles.exampleLabel}>Try: </span>
        {["abinaya-arjunan", "torvalds", "gaearon"].map((name) => (
          <button
            key={name}
            style={styles.exampleBtn}
            onClick={() => {
              onChange(name);
              onSearch(name);
            }}
          >
            @{name}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  inputRow: {
    display: "flex",
    alignItems: "center",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    padding: "4px 4px 4px 14px",
    gap: "10px",
    transition: "border-color 0.2s",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  },
  input: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "var(--text)",
    fontSize: "15px",
    padding: "10px 0",
    fontFamily: "inherit",
  },
  button: {
    background: "var(--accent)",
    color: "#0d1117",
    border: "none",
    borderRadius: "8px",
    padding: "10px 22px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "opacity 0.15s",
    flexShrink: 0,
  },
  examples: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    flexWrap: "wrap",
  },
  exampleLabel: {
    fontSize: "12px",
    color: "var(--muted)",
  },
  exampleBtn: {
    background: "transparent",
    border: "1px solid var(--border)",
    color: "var(--muted)",
    borderRadius: "6px",
    padding: "3px 10px",
    fontSize: "12px",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.15s",
  },
};

export default SearchBar;