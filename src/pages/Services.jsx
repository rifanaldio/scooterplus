import { motion } from 'framer-motion';
import { Layers, Gauge, Palette } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PackageCard from '../components/PackageCard';
import { PACKAGES } from '../utils/constants';

const services = [
  {
    icon: <Layers className="text-stripe-teal" />,
    title: 'Servis Berkala',
    desc: 'Ganti oli, filter, kampas rem, CVT check dengan part orisinal.'
  },
  {
    icon: <Gauge className="text-stripe-red" />,
    title: 'Diagnostik & Tuning',
    desc: 'Engine scan, setelan idle, kalibrasi CVT untuk tarikan halus.'
  },
  {
    icon: <Palette className="text-stripe-orange" />,
    title: 'Detailing & Coating',
    desc: 'Cuci premium, polishing, dan proteksi cat agar tetap berkilau.'
  }
];

const packages = PACKAGES;

const Services = () => (
  <PageTransition>
    <div className="mx-auto max-w-6xl space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stripe-teal dark:text-stripe-yellow">
          Layanan
        </p>
        <h2 className="text-3xl font-bold text-ink sm:text-4xl dark:text-white">
          Semua yang Vespa matic Anda butuhkan.
        </h2>
        <p className="text-ink/80 dark:text-white/80">
          Dari perawatan rutin hingga upgrade performa, semua dikerjakan oleh teknisi spesialis Vespa.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="rounded-2xl border border-ink/5 bg-white p-6 shadow-lg shadow-stripe-teal/10 dark:border-white/10 dark:bg-ink/60"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.25 }}
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-stripe-yellow/10 dark:bg-white/10">
              {service.icon}
            </div>
            <p className="text-lg font-semibold text-ink dark:text-white">{service.title}</p>
            <p className="text-sm text-ink/70 dark:text-white/70">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stripe-teal dark:text-stripe-yellow">
            Special package
          </p>
          <h3 className="text-2xl font-bold text-ink dark:text-white">Paket servis Vespa matic</h3>
          <p className="text-ink/70 dark:text-white/70">Terinspirasi dari flyer resmi ScooterPlus Garage.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  </PageTransition>
);

export default Services;

