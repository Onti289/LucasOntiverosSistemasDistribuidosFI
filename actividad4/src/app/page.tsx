import PokemonList from "./components/PokemonList";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Mi primer app con Next.js + TypeScript + PokéAPI</h1>
      <PokemonList />
    </main>
  );
}
