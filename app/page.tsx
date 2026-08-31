const images = [
  'A4CC575C-5F07-44F5-B815-4A74A874FDB7.jpeg',
  'ABCFB928-5D43-40F1-A822-1FC7246B7237_1_102_o.jpeg',
  'D4B38C5F-29C8-4EED-83B0-A26E54DE2A39.jpeg',
  'E1F97CFA-F012-43FB-8BB5-3A8AED8E60AE.jpeg',
  'EADABB4A-5F95-4302-A016-DE6CE7F718FD.jpeg',
  'EFDD8A44-23D7-4977-8E64-19E3728FE267.jpeg',
]

const videoIds = [
  'QICN4s5WDYE',
  '0XdAdN5sCuU',
  'muZxV64VjFQ',
  '_Byekl8bFbA',
  'BXEesGUaKq0',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <header className="py-20 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">Grainger County, Tennessee</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight max-w-xl mx-auto">
          Bat Education and Rehabilitation of Grainger County
        </h1>
      </header>

      <section className="max-w-xl mx-auto px-6 pb-20 border-b border-black/10">
        <h2 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Mission</h2>
        <p className="text-base leading-relaxed mb-10">
          The mission of the Bat Education and Rehabilitation is to support local bat populations
          through rehabilitation and public education.
        </p>
        <ul className="space-y-5">
          <li className="flex gap-6 items-start">
            <span className="text-xs font-semibold text-black/30 mt-1 shrink-0">01</span>
            <p className="leading-relaxed">
              Rehabilitate and release as many bats back into the wild as possible.
            </p>
          </li>
          <li className="flex gap-6 items-start">
            <span className="text-xs font-semibold text-black/30 mt-1 shrink-0">02</span>
            <p className="leading-relaxed">
              Educate the public about bats and their importance in our ecosystem.
            </p>
          </li>
        </ul>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-10 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto mb-3">
          {videoIds.map((id) => (
            <div key={id} className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 max-w-5xl mx-auto">
          {images.map((img) => (
            <div key={img} className="mb-3 break-inside-avoid overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/media/${img}`}
                alt="Bat Education and Rehabilitation of Grainger County"
                loading="lazy"
                className="w-full block"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-xl mx-auto px-6 py-20 border-t border-black/10">
        <h2 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Contact</h2>
        <div className="space-y-4">
          <a
            href="mailto:susiekaplar@gmail.com"
            className="flex items-center gap-3 group"
          >
            <span className="text-xs font-semibold text-black/30 shrink-0">Email</span>
            <span className="group-hover:underline">susiekaplar@gmail.com</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61560281851317"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <span className="text-xs font-semibold text-black/30 shrink-0">Facebook</span>
            <span className="group-hover:underline">Bat Education and Rehabilitation of Grainger County</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-black/10 py-8 px-6 text-center text-xs text-black/30 tracking-wide">
        © {new Date().getFullYear()} Bat Education and Rehabilitation of Grainger County Inc.
      </footer>
    </main>
  )
}
