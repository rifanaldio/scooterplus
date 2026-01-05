
import { Instagram } from 'lucide-react';
import Logo from '../assets/logo.png';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <path
      fill="#000000"
      d="M16.3 5.2c1 1.1 2.2 1.7 3.7 1.9v2.6c-1.4-.1-2.6-.6-3.7-1.3v5.6c0 4.5-4.9 6.7-8.1 4.1-2.4-1.9-2.6-5.6-.4-7.7 1.1-1 2.4-1.5 4-1.4v2.7c-.6-.1-1.2.1-1.7.5-1 .8-.9 2.4.1 3.1 1.2.9 3 .1 3-1.5V2.5h3.1v2.7Z"
    />
    <path
      fill="#00F2EA"
      d="M16.3 5.2c1 1.1 2.2 1.7 3.7 1.9v2.1c-1.5-.2-2.7-.8-3.7-1.7v1.7c-.7-.2-1.5-.3-2.3-.3-.1 0-.2 0-.3.1V2.5h2.6v2.7Z"
    />
    <path
      fill="#FF0050"
      d="M10.4 8.8v2.6c-.6-.1-1.2.1-1.7.5-1 .8-.9 2.4.1 3.1.4.3.8.4 1.3.4v2.7c-2-.1-3.7-1.5-4.1-3.5-.4-1.9.5-3.9 2.3-4.8.7-.5 1.4-.7 2.1-.8Z"
    />
  </svg>
);
const Footer = () => (
  <footer className="border-t border-ink/5 py-6 sm:py-8 text-sm shadow-inner dark:border-white/10 dark:bg-black bg-ink text-white/70">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:gap-6 px-4 sm:px-6 md:flex-row md:items-start md:justify-between md:px-8">
      <div className="space-y-2 sm:space-y-1">
        <img src={Logo} alt="Scooter Plus Garage" className="h-12 sm:h-14 w-auto" />
        <p className="text-xs sm:text-sm leading-relaxed">Jl. Hang Jebat No.4, 1a, RT.04/RW.005, Gunung, Kebayoran Baru, Jakarta Selatan</p>
        <p className="text-xs sm:text-sm">
          Telp: <a className="font-semibold hover:text-white transition-colors" href="tel:+6281385063145">0813-8506-3145</a>
        </p>
      </div>
      <div className="flex flex-row items-center gap-2 sm:gap-3 flex-wrap">
        <a
          href="https://www.instagram.com/scooter_plus_official/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/5 px-3 py-2 text-xs sm:text-sm text-white transition hover:border-ink/30 hover:bg-white/10 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Follow us on Instagram"
        >
          <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf]">
            <Instagram size={12} className="sm:w-[14px] sm:h-[14px] text-white" />
          </span>
          <span className="hidden sm:inline">Instagram</span>
        </a>
        <a
          href="https://www.tiktok.com/@scooterplus_official"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/5 px-3 py-2 text-xs sm:text-sm text-white transition hover:border-ink/30 hover:bg-white/10 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Follow us on TikTok"
        >
          <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white text-black">
            <TikTokIcon />
          </span>
          <span className="hidden sm:inline">TikTok</span>
        </a>
      </div>
      <div className='flex flex-col justify-start'>
      <p className="text-center text-xs sm:text-sm md:text-right">© {new Date().getFullYear()} Scooter Garage Plus</p>
      <p className="text-center text-xs sm:text-sm md:text-right">Powered by Rifan Aldio.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

