// RepoList.jsx — Day 3: sorts repos by stars, shows top 6
// Props: repos (array of GitHub repo objects)

import RepoCard from "./RepoCard";

function RepoList({ repos }) {

  // Sort by stars descending, take top 6
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  // Filter out forked repos for a cleaner view
  const ownRepos = topRepos.filter(r => !r.fork);
  const display  = ownRepos.length > 0 ? ownRepos : topRepos;

  if (display.length === 0) {
    return (
      <div style={styles.empty}>
        <p style={{ color: "var(--muted)", fontSize: "13px" }}>
          No public repositories yet.
        </p>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.title}>
        Top Repositories
        <span style={styles.count}>{display.length}</span>
      </h3>
      <div style={styles.grid}>
        {display.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  title: {
    fontSize: "15px",
    fontWeight: 600,
    color: "var(--text)",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  count: {
    background: "var(--border)",
    color: "var(--muted)",
    fontSize: "11px",
    padding: "2px 8px",
    borderRadius: "10px",
    fontWeight: 400,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "12px",
  },
  empty: {
    padding: "20px",
    textAlign: "center",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
  },
};

export default RepoList;