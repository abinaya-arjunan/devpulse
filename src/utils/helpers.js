// helpers.js — utility/formatting functions
// Used across components to format numbers and dates

// Format large numbers: 1200 → "1.2k"
export function formatNumber(num) {
  if (!num) return "0";
  if (num >= 1000) return (num / 1000).toFixed(1) + "k";
  return num.toString();
}

// How long ago was a date: "2021-03-01" → "3 years ago"
export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const years = now.getFullYear() - date.getFullYear();
  const months = now.getMonth() - date.getMonth() + years * 12;
  if (years >= 1) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months >= 1) return `${months} month${months > 1 ? "s" : ""} ago`;
  return "This month";
}

// Capitalize first letter: "javascript" → "JavaScript"
export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Language → color mapping for badges
export const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python:     "#3572A5",
  HTML:       "#e34c26",
  CSS:        "#563d7c",
  Java:       "#b07219",
  Go:         "#00ADD8",
  Rust:       "#dea584",
  C:          "#555555",
  "C++":      "#f34b7d",
  Ruby:       "#701516",
  Swift:      "#F05138",
  Kotlin:     "#A97BFF",
  Shell:      "#89e051",
};