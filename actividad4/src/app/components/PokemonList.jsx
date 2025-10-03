"use client";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function PokemonItem({ name, count, onUse }) {
  return (
    <button
      onClick={onUse}
      style={{
        margin: "8px",
        padding: "10px 16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        cursor: "pointer",
        background: "#f0f0f0",
      }}
    >
      {name} — Usado {count} veces
    </button>
  );
}

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => {
        if (!mounted) return;
        setPokemons(res.data.results);
      })
      .catch((err) => setError(err.message))
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  const increment = useCallback((name) => {
    setCounts((prev) => ({
      ...prev,
      [name]: (prev[name] ?? 0) + 1,
    }));
  }, []);

  if (loading) return <p>Cargando pokemons...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Listado de Pokemons</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemons.map((p) => (
          <PokemonItem
            key={p.name}
            name={p.name}
            count={counts[p.name] ?? 0}
            onUse={() => increment(p.name)}
          />
        ))}
      </div>
    </div>
  );
}
