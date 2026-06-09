export default function StyleGuide() {
  return (
    <main className="min-h-screen bg-dr-void text-dr-concrete p-12 font-sans">
      
      {/* Block Header */}
      <div className="mb-16 border-b border-dr-asphalt pb-8">
        <h1 className="text-5xl font-black text-dr-bone uppercase tracking-tighter">
          Drifting Roots
        </h1>
        <p className="text-sm uppercase tracking-widest text-dr-accent mt-2">
          Living Style Guide & Component Sandbox
        </p>
      </div>

      {/* Typography Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-dr-bone mb-6 uppercase border-l-4 border-dr-accent pl-4">Typography</h2>
        <div className="space-y-4 bg-dr-asphalt p-8 rounded-sm">
          <h1 className="text-4xl font-black text-dr-bone uppercase">Heading 1: The Block Header</h1>
          <h2 className="text-2xl font-bold text-dr-bone">Heading 2: Subculture & Grit</h2>
          <p className="text-base leading-relaxed max-w-2xl">
            Body Text: This is how our standard paragraphs will look. It is legible, clean, and sits nicely on top of our void background. Roots shatter concrete, and we rebuild from the rubble.
          </p>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-dr-bone mb-6 uppercase border-l-4 border-dr-accent pl-4">Color DNA</h2>
        <div className="flex gap-4">
          <div className="h-32 w-32 bg-dr-void border border-dr-asphalt flex items-end p-2"><span className="text-xs">dr-void</span></div>
          <div className="h-32 w-32 bg-dr-asphalt flex items-end p-2"><span className="text-xs">dr-asphalt</span></div>
          <div className="h-32 w-32 bg-dr-concrete flex items-end p-2 text-dr-void"><span className="text-xs font-bold">dr-concrete</span></div>
          <div className="h-32 w-32 bg-dr-bone flex items-end p-2 text-dr-void"><span className="text-xs font-bold">dr-bone</span></div>
          <div className="h-32 w-32 bg-dr-accent flex items-end p-2"><span className="text-xs text-dr-bone font-bold">dr-accent</span></div>
        </div>
      </section>

      {/* Button Components */}
      <section>
        <h2 className="text-2xl font-bold text-dr-bone mb-6 uppercase border-l-4 border-dr-accent pl-4">Interactive</h2>
        <div className="flex gap-4">
          <button className="bg-dr-bone text-dr-void font-black uppercase tracking-wider py-3 px-8 hover:bg-dr-concrete transition-all cursor-pointer">
            Primary Action
          </button>
          <button className="border border-dr-accent text-dr-accent font-bold uppercase tracking-wider py-3 px-8 hover:bg-dr-accent hover:text-dr-bone transition-all cursor-pointer">
            Secondary / Warn
          </button>
        </div>
      </section>

    </main>
  );
}