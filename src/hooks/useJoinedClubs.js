import { useEffect, useState } from "react";

const STORAGE_KEY = "campus-club-finder:joined-clubs";

const readJoinedClubs = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const useJoinedClubs = () => {
  const [joinedClubs, setJoinedClubs] = useState(readJoinedClubs);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(joinedClubs));
    } catch {
      return;
    }
  }, [joinedClubs]);

  const joinClub = (clubId) => {
    setJoinedClubs((current) =>
      current.includes(clubId) ? current : [...current, clubId]
    );
  };

  const isJoined = (clubId) => joinedClubs.includes(clubId);

  return { joinedClubs, joinClub, isJoined };
};
