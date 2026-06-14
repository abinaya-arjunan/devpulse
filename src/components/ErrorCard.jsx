// ErrorCard.jsx — shown when API returns an error

function ErrorCard({ message, onRetry }) {
  return (
    <div style={styles.card}>
      <span style={styles.icon}>⚠️</span>
      <p style={styles.message}>{message}</p>
      {onRetry && (
        <button style={styles.btn} onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}

const styles = {
  card: {
    background: "var(--surface)",
    border: "1px solid #f8514933",
    borderRadius: "12px",
    padding: "32px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  icon: { fontSize: "32px" },
  message: {
    fontSize: "14px",
    color: "var(--muted)",
    maxWidth: "320px",
    lineHeight: 1.6,
  },
  btn: {
    background: "var(--accent)",
    color: "#0d1117",
    border: "none",
    borderRadius: "8px",
    padding: "8px 20px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit",
  },
};

export default ErrorCard;