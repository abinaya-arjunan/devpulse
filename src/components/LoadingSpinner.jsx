// LoadingSpinner.jsx — shown while GitHub API is fetching

function LoadingSpinner({ username }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner} />
      <p style={styles.text}>
        Fetching <span style={{ color: "var(--accent)" }}>@{username}</span>...
      </p>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
    padding: "48px 0",
  },
  spinner: {
    width: "36px",
    height: "36px",
    border: "3px solid var(--border)",
    borderTop: "3px solid var(--accent)",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  text: {
    fontSize: "14px",
    color: "var(--muted)",
  },
};

// Inject keyframe animation into document
const styleTag = document.createElement("style");
styleTag.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(styleTag);

export default LoadingSpinner;