// StatsGrid.jsx — Day 4: total stars, forks, most starred repo, account age

import { formatNumber, timeAgo } from "../utils/helpers";

function StatsGrid({ user, repos }) {

  // Total stars across all repos
  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  // Total forks across all repos
  const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);

  // Most starred repo
  const topRepo = [...repos].sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  )[0];

  // Total watchers
  const totalWatchers = repos.reduce((sum, r) => sum + r.watchers_count, 0);

  const stats = [
    {
      icon: "⭐",
      label: "Total Stars",
      value: formatNumber(totalStars),
    },
    {
      icon: "🍴",
      label: "Total Forks",
      value: formatNumber(totalForks),
    },
    {
      icon: "👁",
      label: "Total Watchers",
      value: formatNumber(totalWatchers),
    },
    {
      icon: "🏆",
      label: "Most Starred",
      value: topRepo ? topRepo.name : "—",
      small: true,
    },
    {
      icon: "📦",
      label: "Public Repos",
      value: formatNumber(user.public_repos),
    },
    {
      icon: "🗓",
      label: "On GitHub",
      value: timeAgo(user.created_at),
      small: true,
    },
  ];

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.title}>Stats Overview</h3>
      <div style={styles.grid}>
        {stats.map((s) => (
          <div key={s.label} style={styles.card}>
            <span style={styles.icon}>{s.icon}</span>
            <span
              style={{
                ...styles.value,
                fontSize: s.small ? "14px" : "22px",
              }}
            >
              {s.value}
            </span>
            <span style={styles.label}>{s.label}</span>
          </div>
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
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
    gap: "12px",
  },
  card: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    padding: "16px 12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    textAlign: "center",
  },
  icon: {
    fontSize: "20px",
    marginBottom: "2px",
  },
  value: {
    fontWeight: 700,
    color: "var(--text)",
    lineHeight: 1.2,
    wordBreak: "break-word",
  },
  label: {
    fontSize: "11px",
    color: "var(--muted)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
};

export default StatsGrid;