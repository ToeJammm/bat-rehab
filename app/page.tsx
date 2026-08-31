import VideoCarousel from './components/VideoCarousel'

const images = [
  'A4CC575C-5F07-44F5-B815-4A74A874FDB7.jpeg',
  'ABCFB928-5D43-40F1-A822-1FC7246B7237_1_102_o.jpeg',
  'D4B38C5F-29C8-4EED-83B0-A26E54DE2A39.jpeg',
  'E1F97CFA-F012-43FB-8BB5-3A8AED8E60AE.jpeg',
  'EADABB4A-5F95-4302-A016-DE6CE7F718FD.jpeg',
  'EFDD8A44-23D7-4977-8E64-19E3728FE267.jpeg',
]


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <header className="pt-12 pb-8 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">Grainger County, Tennessee</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight max-w-xl mx-auto">
          Bat Education and Rehabilitation of Grainger County
        </h1>
      </header>

      <div className="border-y border-black/10 px-6 py-3 flex justify-center gap-8 text-xs text-black/50">
        <a href="mailto:susiekaplar@gmail.com" className="hover:text-black transition-colors">
          susiekaplar@gmail.com
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61560281851317"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
        >
          Facebook
        </a>
      </div>

      <section className="max-w-xl mx-auto px-6 pb-16 pt-10 border-b border-black/10">
        <h2 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Our Mission</h2>
        <p className="text-base leading-relaxed mb-10">
          We are dedicated to supporting local bat populations in Grainger County through
          hands-on rehabilitation and community education.
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
              Educate the public about bats and their vital role in our ecosystem.
            </p>
          </li>
        </ul>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-10 text-center">Gallery</h2>
        <div className="mb-12">
          <VideoCarousel />
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

      <footer className="border-t border-black/10 py-8 px-6 text-center text-xs text-black/30 tracking-wide">
        © {new Date().getFullYear()} Bat Education and Rehabilitation of Grainger County Inc.
      </footer>
    </main>
  )
}
