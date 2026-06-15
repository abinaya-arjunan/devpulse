// RepoCard.jsx — Day 3: displays a single GitHub repo with stats
// Props: repo (GitHub API repo object)

import { formatNumber, LANG_COLORS } from "../utils/helpers";

function RepoCard({ repo }) {
  return (
    <div style={styles.card}>

      {/* Repo name — clickable link */}
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.repoName}
      >
        📁 {repo.name}
      </a>

      {/* Description */}
      {repo.description && (
        <p style={styles.description}>{repo.description}</p>
      )}

      {/* Bottom row: language + stars + forks */}
      <div style={styles.bottomRow}>

        {/* Language badge */}
        {repo.language && (
          <span style={styles.langBadge}>
            <span
              style={{
                ...styles.langDot,
                background: LANG_COLORS[repo.language] || "#7d8590",
              }}
            />
            {repo.language}
          </span>
        )}

        {/* Stars */}
        <span style={styles.stat}>
          ⭐ {formatNumber(repo.stargazers_count)}
        </span>

        {/* Forks */}
        <span style={styles.stat}>
          🍴 {formatNumber(repo.forks_count)}
        </span>

        {/* Watchers */}
        {repo.watchers_count > 0 && (
          <span style={styles.stat}>
            👁 {formatNumber(repo.watchers_count)}
          </span>
        )}

      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    padding: "16px 18px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    transition: "border-color 0.2s",
    cursor: "default",
  },
  repoName: {
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--accent)",
    textDecoration: "none",
    wordBreak: "break-word",
  },
  description: {
    fontSize: "12px",
    color: "var(--muted)",
    lineHeight: 1.5,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  bottomRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "4px",
  },
  langBadge: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "12px",
    color: "var(--muted)",
  },
  langDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    flexShrink: 0,
  },
  stat: {
    fontSize: "12px",
    color: "var(--muted)",
  },
};

export default RepoCard;