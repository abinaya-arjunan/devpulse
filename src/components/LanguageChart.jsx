// LanguageChart.jsx — Day 4: horizontal bar chart of top languages
// Uses Recharts — already installed on Day 1

import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, Cell
} from "recharts";
import { LANG_COLORS } from "../utils/helpers";

function LanguageChart({ repos }) {

  // Count how many repos use each language
  const langCount = {};
  repos.forEach((repo) => {
    if (repo.language) {
      langCount[repo.language] = (langCount[repo.language] || 0) + 1;
    }
  });

  // Convert to array, sort by count, take top 6
  const data = Object.entries(langCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  if (data.length === 0) {
    return null;
  }

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, count } = payload[0].payload;
      return (
        <div style={styles.tooltip}>
          <span style={{ color: LANG_COLORS[name] || "#7d8590" }}>●</span>
          {" "}{name}: <strong>{count} repo{count > 1 ? "s" : ""}</strong>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.title}>
        Top Languages
        <span style={styles.count}>{data.length}</span>
      </h3>

      <div style={styles.chartBox}>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
          >
            <XAxis
              type="number"
              tick={{ fill: "#7d8590", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#e6edf3", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={90}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
            <Bar dataKey="count" radius={[0, 6, 6, 0]} maxBarSize={22}>
              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={LANG_COLORS[entry.name] || "#58a6ff"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Language legend dots */}
      <div style={styles.legend}>
        {data.map((entry) => (
          <span key={entry.name} style={styles.legendItem}>
            <span
              style={{
                ...styles.legendDot,
                background: LANG_COLORS[entry.name] || "#58a6ff",
              }}
            />
            {entry.name}
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    padding: "20px 24px",
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
  chartBox: {
    width: "100%",
  },
  tooltip: {
    background: "#1c2128",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    padding: "8px 12px",
    fontSize: "12px",
    color: "var(--text)",
  },
  legend: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "12px",
    color: "var(--muted)",
  },
  legendDot: {
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    flexShrink: 0,
  },
};

export default LanguageChart;