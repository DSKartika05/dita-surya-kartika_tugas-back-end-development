"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext(undefined);

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/api/favorites")
      .then((res) => res.json())
      .then(setFavorites);
  }, []);

  async function addFavorite(user) {
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      const saved = await res.json();
      setFavorites((prev) => [...prev, saved]);
    }
  }

  async function removeFavorite(userId) {
    const res = await fetch(`/api/favorites/${userId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setFavorites((prev) => prev.filter((f) => f.id !== userId));
    }
  }

  async function updateFavorite(userId, note) {
    const res = await fetch(`/api/favorites/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || "Gagal mengubah favorite");
    }

    const updated = await res.json();

    setFavorites((prev) =>
      prev.map((f) => (f.id === userId ? updated : f))
    );

    return updated;
  }

  function isFavorite(userId) {
    return favorites.some((f) => f.id === userId);
  }

  const favoritesCount = favorites.length;

  const value = {
    favorites,
    favoritesCount,
    addFavorite,
    removeFavorite,
    updateFavorite,
    isFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoriteContext);

  if (context === undefined) {
    throw new Error(
      "useFavorites harus dipakai di dalam <FavoriteProvider>"
    );
  }

  return context;
}

// Alias agar component lama yang masih menggunakan useFavorite tetap bekerja
export const useFavorite = useFavorites;