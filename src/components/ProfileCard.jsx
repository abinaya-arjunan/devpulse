import { formatNumber, timeAgo } from "../utils/helpers";

function ProfileCard({ user }) {
  return (
    <div style={styles.card}>
      <div className="profile-top" style={styles.topRow}>
        <img src={user.avatar_url} alt={user.login} className="profile-avatar" style={styles.avatar} />
        <div style={styles.nameBlock}>
          <h2 style={styles.name}>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={styles.username}>
            @{user.login}
          </a>
          {user.bio && <p style={styles.bio}>{user.bio}</p>}
        </div>
      </div>

      <div className="profile-stats" style={styles.statsRow}>
        <StatItem label="Repos"     value={formatNumber(user.public_repos)} />
        <StatItem label="Followers" value={formatNumber(user.followers)} />
        <StatItem label="Following" value={formatNumber(user.following)} />
        <StatItem label="Joined"    value={timeAgo(user.created_at)} />
      </div>

      <div className="profile-info-row" style={styles.infoRow}>
        {user.location && <InfoTag icon="📍" text={user.location} />}
        {user.blog && <InfoTag icon="🔗" text={user.blog} href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`} />}
        {user.twitter_username && <InfoTag icon="🐦" text={`@${user.twitter_username}`} href={`https://twitter.com/${user.twitter_username}`} />}
        {user.company && <InfoTag icon="🏢" text={user.company} />}
      </div>
    </div>
  );
}

function StatItem({ label, value }) {
  return (
    <div style={styles.statItem}>
      <span style={styles.statValue}>{value}</span>
      <span style={styles.statLabel}>{label}</span>
    </div>
  );
}

function InfoTag({ icon, text, href }) {
  const content = <span style={styles.infoTag}>{icon} {text}</span>;
  return href
    ? <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>{content}</a>
    : content;
}

const styles = {
  card: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "16px" },
  topRow: { display: "flex", gap: "16px", alignItems: "flex-start" },
  avatar: { width: "80px", height: "80px", borderRadius: "50%", border: "2px solid var(--border)", flexShrink: 0 },
  nameBlock: { display: "flex", flexDirection: "column", gap: "4px" },
  name: { fontSize: "18px", fontWeight: 700, color: "var(--text)" },
  username: { fontSize: "13px", color: "var(--accent)", textDecoration: "none" },
  bio: { fontSize: "13px", color: "var(--muted)", marginTop: "4px", lineHeight: 1.5 },
  statsRow: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", background: "var(--bg)", borderRadius: "8px", padding: "12px" },
  statItem: { display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" },
  statValue: { fontSize: "16px", fontWeight: 700, color: "var(--text)" },
  statLabel: { fontSize: "10px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em" },
  infoRow: { display: "flex", flexWrap: "wrap", gap: "8px" },
  infoTag: { fontSize: "12px", color: "var(--muted)", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "6px", padding: "3px 8px" },
};

export default ProfileCard;