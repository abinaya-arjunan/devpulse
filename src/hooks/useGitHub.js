// useGitHub.js — Day 2: custom hook that fetches real GitHub data
// Fetches both user profile AND their repos in parallel using Promise.all

import { useState, useEffect } from "react";

function useGitHub(username) {
  const [user, setUser]       = useState(null);
  const [repos, setRepos]     = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  useEffect(() => {
    // Don't fetch if no username given
    if (!username) return;

    async function fetchGitHubData() {
      setLoading(true);
      setError(null);
      setUser(null);
      setRepos([]);

      try {
        // Fetch user profile and repos at the same time
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);

        // Handle user not found
        if (userRes.status === 404) {
          setError(`User "@${username}" not found on GitHub.`);
          return;
        }

        // Handle rate limit
        if (userRes.status === 403) {
          setError("GitHub API rate limit reached. Please wait a minute and try again.");
          return;
        }

        // Handle other errors
        if (!userRes.ok) {
          setError("Something went wrong. Please try again.");
          return;
        }

        const userData  = await userRes.json();
        const reposData = await reposRes.json();

        setUser(userData);
        setRepos(Array.isArray(reposData) ? reposData : []);

      } catch (err) {
        setError("Network error. Check your connection and try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, [username]); // re-runs every time username changes

  return { user, repos, loading, error };
}

export default useGitHub;