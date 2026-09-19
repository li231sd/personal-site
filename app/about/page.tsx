export const metadata = { title: "About — Sahil Singla" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[65ch] px-[var(--page-gutter)] py-16 md:py-24 page-reveal">
      <h1 className="font-[var(--font-sans-var)] text-2xl mb-8">About</h1>
      <div className="prose-notebook">
        <p>
          I am Sahil Singla, a student, builder, and researcher interested in
          physics, fluid dynamics, computational tools, and hardware. I like
          working where a physical question meets a piece of software or a thing
          that can be tested in the real world.
        </p>
        <p>
          My work has ranged from Python and PyTorch research to autonomous
          systems, computer vision, web development, and engineering teams. I
          have also learned a great deal through Civil Air Patrol, leading
          technical projects, teaching, and helping younger builders find their
          way into STEM.
        </p>
        <p>
          This site is a working notebook: a place for notes on what I am
          studying, records of current work, and explanations that become
          clearer when I write them down. The common thread is careful
          iteration, from the first rough idea through measurement and review.
        </p>
      </div>
    </div>
  );
}
