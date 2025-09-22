export const metadata = {
  title: "Mi primera página en Next.js",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center p-6">
      <header className="bg-gray-800 text-white p-4 rounded-2xl w-full text-center">
        <h1>Bienvenido a mi página</h1>
      </header>
      <section className="flex flex-col gap-4 items-center p-4">
        <p>Está re difícil esto.</p>
        <textarea
          defaultValue="Escribí algo acá..."
          className="border p-2 rounded-md w-64"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Click me
          (no funciona)
        </button>
      </section>
      <footer className="bg-gray-200 p-4 rounded-2xl w-full text-center">
        <small>Hecho en Next.js</small>
      </footer>
    </main>
  );
}