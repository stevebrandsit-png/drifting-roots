export default function Home() {
  return (
    <main className="min-h-screen bg-dr-void text-dr-concrete font-sans flex flex-col justify-between">
      {/* --- BRAND HEADER WORDMARK --- */}
<header className="w-full flex justify-center py-12 px-6">
  <img 
    src="/dr-wordmark.svg" 
    alt="Drifting Roots Wordmark" 
    className="w-full max-w-sm h-auto drop-shadow-2xl" 
  />
</header>
      {/* Hero Section: The Manifesto */}
      <section className="flex-grow flex flex-col items-center justify-center text-center p-8 max-w-4xl mx-auto space-y-8">
        <h2 className="text-sm uppercase tracking-[0.2em] text-dr-accent font-bold border-b-2 border-dr-accent pb-1">
          Subculture • Resilience • Recovery
        </h2>
        
        <h1 className="text-5xl font-black tracking-tighter text-dr-bone uppercase sm:text-7xl md:text-8xl">
          Roots shatter <br />concrete.
        </h1>
        
        <p className="text-base text-dr-concrete max-w-2xl leading-relaxed md:text-lg">
          We are building a foundation for those who lived through the grit of the underground and are now doing the quiet, heavy work of rebuilding. Authentic gear for the subculture of survivors.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full sm:w-auto">
          <a href="#drops" className="bg-dr-bone text-dr-void font-black uppercase tracking-wider py-4 px-10 hover:bg-dr-concrete transition-all cursor-pointer text-center">
            View the Vault
          </a>
          <a href="/style-guide" className="border border-dr-concrete text-dr-concrete font-bold uppercase tracking-wider py-4 px-10 hover:bg-dr-concrete hover:text-dr-void transition-all cursor-pointer text-center">
            Code Sandbox
          </a>
        </div>
      </section>

      {/* Product Teaser / Waitlist Grid (Placeholder until graphics are ready) */}
      <section id="drops" className="bg-dr-asphalt py-24 px-8 border-t border-dr-void">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-black text-dr-bone uppercase tracking-tight md:text-4xl">
              Upcoming Artifacts
            </h3>
            <p className="text-xs uppercase tracking-widest text-dr-accent mt-2">
              Edition 001: Quiet Nods & Heavy Roots
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border border-dr-asphalt bg-dr-void/50 p-8 flex flex-col justify-between h-96 group hover:border-dr-concrete transition-all">
              <div className="w-full h-48 bg-dr-asphalt flex items-center justify-center text-[10px] tracking-widest text-dr-concrete/30 uppercase font-bold">
                [Visual Asset: Rooted Metaphor Pending]
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-dr-bone group-hover:text-dr-accent transition-all">Concrete Roots Tee</h4>
                <p className="text-xs text-dr-concrete/70 uppercase">Heavyweight • Vintage Wash</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="font-black text-sm text-dr-bone">$42.00</span>
                  <span className="text-[10px] bg-dr-asphalt py-1 px-3 text-dr-concrete tracking-widest uppercase font-bold">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-dr-asphalt bg-dr-void/50 p-8 flex flex-col justify-between h-96 group hover:border-dr-concrete transition-all">
              <div className="w-full max-w-xs mx-auto overflow-hidden flex justify-center items-center">
  <img 
    src="/dr-punk-stamp-final.svg" 
    alt="Drifting Roots Punk Stamp" 
    className="w-full h-auto object-contain invert" 
  />
</div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-dr-bone group-hover:text-dr-accent transition-all">Chain Breaker Hoodie</h4>
                <p className="text-xs text-dr-concrete/70 uppercase">Standard Fit • Pigment Dyed</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="font-black text-sm text-dr-bone">$75.00</span>
                  <span className="text-[10px] bg-dr-asphalt py-1 px-3 text-dr-concrete tracking-widest uppercase font-bold">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-dr-asphalt bg-dr-void/50 p-8 flex flex-col justify-between h-96 group hover:border-dr-concrete transition-all">
              <div className="w-full h-48 bg-dr-asphalt flex items-center justify-center text-[10px] tracking-widest text-dr-concrete/30 uppercase font-bold">
                [Visual Asset: Monogram Pending]
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-dr-bone group-hover:text-dr-accent transition-all">Gnarled Beanie</h4>
                <p className="text-xs text-dr-concrete/70 uppercase">Embroidered • Cuffed</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="font-black text-sm text-dr-bone">$28.00</span>
                  <span className="text-[10px] bg-dr-asphalt py-1 px-3 text-dr-concrete tracking-widest uppercase font-bold">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}