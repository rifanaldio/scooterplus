import { Sparkles, Shield, Wrench, MapPin, Navigation } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import CTAButton from '../components/CTAButton';
import PartnerCircle from '../components/PartnerCircle';
import { generateWhatsAppUrl } from '../utils/whatsapp';
import motulLogo from '../assets/partners/motul.png';
import ravenolLogo from '../assets/partners/ravenol.png';
import piaggioLogo from '../assets/partners/piaggio.png';
import castrolLogo from '../assets/partners/castrol.png';
import pulleyLogo from '../assets/partners/pulley.png';

const features = [
  {
    icon: <Sparkles className="text-stripe-teal" />,
    title: 'Perawatan Premium',
    desc: 'Detailing, tune-up, dan parts orisinal untuk Vespa matic Anda.'
  },
  {
    icon: <Shield className="text-stripe-red" />,
    title: 'Garansi Pengerjaan',
    desc: 'Teknisi tersertifikasi dengan SOP aman dan transparan.'
  },
  {
    icon: <Wrench className="text-stripe-orange" />,
    title: 'Suku Cadang Siap',
    desc: 'Stok fast-moving untuk servis cepat tanpa antre panjang.'
  }
];

const partners = [
  {
    name: 'Motul',
    imageUrl: motulLogo,
    website: 'https://www.motul.com'
  },
  {
    name: 'Ravenol',
    imageUrl: ravenolLogo,
    website: 'https://www.ravenol.de'
  },
  {
    name: 'Piaggio',
    imageUrl: piaggioLogo,
    website: 'https://www.piaggio.com'
  },
  {
    name: 'Castrol',
    imageUrl: castrolLogo,
    website: 'https://www.castrol.com'
  },
  {
    name: 'Dr. Pulley',
    imageUrl: pulleyLogo,
    website: 'https://www.drpulley.com'
  }
];

const Home = () => (
  <PageTransition>
    <div className="mx-auto flex max-w-6xl flex-col gap-12 space-y-10 lg:space-y-14">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stripe-red dark:text-stripe-yellow">
            Scooter Garage Plus
          </p>
          <h1 className="text-4xl font-black leading-tight text-ink sm:text-5xl dark:text-white">
            Servis Vespa matic premium, cepat, dan bergaransi.
          </h1>
          <p className="text-lg text-ink/80 dark:text-white/80">
            Dari ganti oli, tune-up, detailing, sampai upgrade performa. Kami siapkan servis menyeluruh dengan kualitas
            showroom dan harga transparan.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton to="/services" label="Lihat paket servis" />
            <CTAButton to="/contact" label="Booking sekarang" variant="ghost" />
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-ink/5 bg-gradient-to-br from-stripe-yellow/20 via-stripe-orange/10 to-stripe-teal/10 p-8 shadow-2xl dark:border-white/10 dark:bg-gradient-to-br dark:from-stripe-red/10 dark:via-stripe-teal/10 dark:to-stripe-orange/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-stripe-teal/20 via-transparent to-stripe-red/15 blur-3xl dark:from-white/10 dark:to-white/5" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-ink/5 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/10">
                <div>
                  <p className="text-sm text-ink dark:text-white">Servis Berkala</p>
                  <p className="text-xs text-ink/60 dark:text-white/60">Oli, filter, rem, CVT</p>
                </div>
                <span className="rounded-full bg-stripe-teal/15 px-3 py-1 text-xs font-semibold text-stripe-teal dark:bg-white/10 dark:text-white">
                  45 menit*
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-ink/5 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/10">
                <div>
                  <p className="text-sm text-ink dark:text-white">Detailing</p>
                  <p className="text-xs text-ink/60 dark:text-white/60">Body care & coating</p>
                </div>
                <span className="rounded-full bg-stripe-orange/15 px-3 py-1 text-xs font-semibold text-stripe-orange dark:bg-white/10 dark:text-white">
                  Kilap
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-ink/5 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/10">
                <div>
                  <p className="text-sm text-ink dark:text-white">Diagnostik</p>
                  <p className="text-xs text-ink/60 dark:text-white/60">Scan & uji jalan</p>
                </div>
                <span className="rounded-full bg-stripe-red/15 px-3 py-1 text-xs font-semibold text-stripe-red dark:bg-white/10 dark:text-white">
                  Bebas bunyi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((item) => (
          <div
            key={item.title}
            className="space-y-3 rounded-2xl border border-ink/5 bg-white p-6 shadow-lg shadow-stripe-teal/10 dark:border-white/10 dark:bg-ink/60"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stripe-yellow/10 dark:bg-white/10">
              {item.icon}
            </div>
            <p className="text-lg font-semibold text-ink dark:text-white">{item.title}</p>
            <p className="text-sm text-ink/70 dark:text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stripe-teal dark:text-stripe-yellow">
            Lokasi Bengkel
          </p>
          <h3 className="text-2xl font-bold text-ink dark:text-white">Scooter Garage Plus</h3>
          <p className="text-ink/80 dark:text-white/70">
            Jl. Hang Jebat No.4, 1a, RT.04/RW.005, Gunung, Kebayoran Baru, Jakarta Selatan. Klik peta untuk membuka
            Google Maps dan langsung navigasi ke bengkel.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://maps.app.goo.gl/3UfCrTyKeckJJAGY7?g_st=aw"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-stripe-teal px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-stripe-teal/30 transition hover:opacity-95"
            >
              <Navigation size={18} />
              Buka di Google Maps
            </a>
            <a
              href={generateWhatsAppUrl('081385063145', 'Halo, saya ingin bertanya tentang layanan servis Vespa.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-ink/10 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 hover:border-green-500 hover:bg-green-100 dark:border-green-600/30 dark:bg-green-900/20 dark:text-green-400 dark:hover:border-green-500 dark:hover:bg-green-900/30 transition-colors"
              aria-label="Hubungi kami via WhatsApp"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              0813-8506-3145
            </a>
          </div>
        </div>
        <a
          href="https://maps.app.goo.gl/3UfCrTyKeckJJAGY7?g_st=aw"
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-xl shadow-stripe-teal/10 transition hover:-translate-y-1 dark:border-white/10 dark:bg-ink/70"
          aria-label="Buka lokasi Scooter Plus Garage di Google Maps"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 z-10" />
          <div className="aspect-video w-full relative overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img
              src="/map-preview.jpg"
              alt="Peta lokasi Scooter Plus Garage di Jl. Hang Jebat, Kebayoran Baru"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                // Fallback jika gambar tidak ditemukan
                e.target.style.display = 'none';
                const fallback = e.target.parentElement;
                if (fallback && !fallback.querySelector('.fallback-content')) {
                  const fallbackDiv = document.createElement('div');
                  fallbackDiv.className = 'fallback-content flex h-full w-full items-center justify-center bg-gradient-to-br from-stripe-teal/30 via-stripe-red/20 to-stripe-yellow/20';
                  fallbackDiv.innerHTML = `
                    <div class="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 dark:text-white/60">
                      Map preview (klik untuk buka Google Maps)
                    </div>
                  `;
                  fallback.appendChild(fallbackDiv);
                }
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="rounded-lg bg-white/90 dark:bg-ink/90 px-4 py-2 text-xs font-semibold text-ink dark:text-white shadow-lg backdrop-blur">
                Klik untuk buka Google Maps
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-ink shadow-md backdrop-blur md:text-sm dark:bg-ink/80 dark:text-white z-20">
            <MapPin size={16} />
            Hang Jebat, Kebayoran Baru
          </div>
        </a>
      </div>

      {/* Partner Section */}
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stripe-teal dark:text-stripe-yellow">
            Partner
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-ink dark:text-white">
            Brand Terpercaya Kami
          </h3>
          <p className="text-ink/70 dark:text-white/70 text-sm sm:text-base">
            Bekerja sama dengan brand terbaik untuk kualitas servis yang optimal
          </p>
        </div>

        <div className="relative">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex items-center gap-8 sm:gap-12 px-4 sm:px-6 md:px-8">
              {partners.map((partner, index) => (
                <PartnerCircle
                  key={partner.name}
                  name={partner.name}
                  imageUrl={partner.imageUrl}
                  website={partner.website}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-paper to-transparent pointer-events-none dark:from-ink z-10" />
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-paper to-transparent pointer-events-none dark:from-ink z-10" />
        </div>
      </div>
    </div>
  </PageTransition>
);

export default Home;

