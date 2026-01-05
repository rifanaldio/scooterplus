import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { generateWhatsAppUrl, formatPackageMessage } from '../utils/whatsapp';

const WHATSAPP_NUMBER = '+62 813-8506-3145';
const stripes = ['bg-stripe-teal', 'bg-stripe-red', 'bg-stripe-orange', 'bg-stripe-yellow'];

const PackageCard = ({ title, subtitle, items, price2v, price3v, addon }) => {
  const handlePriceClick = (engineType) => {
    const packageData = { title, subtitle, items, price2v, price3v, addon };
    const message = formatPackageMessage(packageData, engineType);
    const whatsappUrl = generateWhatsAppUrl(WHATSAPP_NUMBER, message);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
  <motion.article
    className="flex flex-col gap-6 rounded-2xl border border-ink/5 bg-white/90 p-6 shadow-lg shadow-stripe-teal/10 backdrop-blur-md dark:border-white/10 dark:bg-ink/70"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.25 }}
  >
    <div className="space-y-3">
      <div className="flex flex-col gap-1">
        {stripes.map((cls, idx) => (
          <div key={cls} className={`h-2 w-full rounded-full ${cls}`} style={{ opacity: 0.9, width: `${100 - idx * 5}%` }} />
        ))}
      </div>
      <div className="space-y-1">
        <h3 className="text-3xl font-black uppercase tracking-tight text-ink dark:text-white">{title}</h3>
        {subtitle ? <p className="text-sm font-semibold text-stripe-red dark:text-stripe-yellow">{subtitle}</p> : null}
      </div>
    </div>

    <ul className="space-y-2 text-ink dark:text-white">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm sm:text-base">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink dark:bg-white" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <div className="grid gap-3 sm:grid-cols-2">
      <button
        type="button"
        onClick={() => handlePriceClick('2v')}
        className="rounded-xl bg-stripe-teal/10 p-4 text-left text-ink transition-all hover:bg-stripe-teal/20 hover:scale-105 active:scale-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-stripe-teal focus:ring-offset-2 cursor-pointer"
        aria-label={`Pesan paket ${title} untuk engine 2V dengan harga Rp ${price2v.toLocaleString('id-ID')}`}
      >
        <p className="text-xs uppercase tracking-wide text-ink/70 dark:text-white/70">Price only</p>
        <p className="text-2xl font-black text-indigo-600 sm:text-3xl md:text-xl">Rp.{price2v.toLocaleString('id-ID')},-</p>
        <p className="text-xs font-semibold text-ink/70 dark:text-white/70">For 2V engine</p>
        <p className="mt-2 text-xs text-stripe-teal dark:text-stripe-yellow font-semibold">Klik untuk pesan via WhatsApp</p>
      </button>
      <button
        type="button"
        onClick={() => handlePriceClick('3v')}
        className="rounded-xl bg-stripe-orange/10 p-4 text-left text-ink transition-all hover:bg-stripe-orange/20 hover:scale-105 active:scale-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-stripe-orange focus:ring-offset-2 cursor-pointer"
        aria-label={`Pesan paket ${title} untuk engine 3V dengan harga Rp ${price3v.toLocaleString('id-ID')}`}
      >
        <p className="text-xs uppercase tracking-wide text-ink/70 dark:text-white/70">Price only</p>
        <p className="text-2xl font-black text-indigo-600 sm:text-3xl md:text-xl">Rp.{price3v.toLocaleString('id-ID')},-</p>
        <p className="text-xs font-semibold text-ink/70 dark:text-white/70">For 3V engine</p>
        <p className="mt-2 text-xs text-stripe-orange dark:text-stripe-yellow font-semibold">Klik untuk pesan via WhatsApp</p>
      </button>
    </div>

    {addon ? (
      <div className="rounded-xl border border-dashed border-ink/20 bg-stripe-yellow/10 p-4 text-sm font-semibold text-ink dark:border-white/20 dark:bg-white/10 dark:text-white">
        {addon}
      </div>
    ) : null}
  </motion.article>
  );
};

PackageCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  price2v: PropTypes.number.isRequired,
  price3v: PropTypes.number.isRequired,
  addon: PropTypes.string
};

PackageCard.defaultProps = {
  subtitle: '',
  addon: ''
};

export default PackageCard;

