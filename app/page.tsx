export default function Home() {
  return (
    <main className="min-h-screen bg-dr-void text-dr-concrete flex flex-col items-center justify-center font-sans p-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-6xl font-black text-dr-bone uppercase tracking-tighter sm:text-7xl">
          Drifting Roots
        </h1>
        <p className="text-xl uppercase tracking-widest text-dr-accent font-bold">
          Grit • Resilience • Recovery
        </p>
        <p className="text-lg leading-relaxed text-dr-concrete/80 max-w-xl mx-auto">
          Roots grow in the dark, beneath the surface. They push through the hardest concrete to find life. Welcome to the foundation.
        </p>
        <div className="pt-4">
          <a 
            href="/style-guide" 
            className="inline-block border border-dr-bone text-dr-bone font-bold uppercase tracking-wider py-4 px-10 hover:bg-dr-bone hover:text-dr-void transition-all cursor-pointer"
          >
            View Style Guide
          </a>
        </div>
      </div>
    </main>
  );
}