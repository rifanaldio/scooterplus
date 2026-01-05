import PropTypes from 'prop-types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useState, useCallback } from 'react';
import PageTransition from '../components/PageTransition';
import LazyImage from '../components/LazyImage';
import g1a from '../assets/group1/SaveClip.App_542754253_17858490405497318_4587921541313826048_n.jpg';
import g1b from '../assets/group1/SaveClip.App_542761226_17858490426497318_6621836611999192204_n.jpg';
import g1c from '../assets/group1/SaveClip.App_543054216_17858490417497318_5036450805475253256_n.jpg';
import g2a from '../assets/group2/SaveClip.App_564991753_17862447945497318_892197669800932845_n.jpg';
import g2b from '../assets/group2/SaveClip.App_565091524_17862447936497318_4548412200180244142_n.jpg';
import g2c from '../assets/group2/SaveClip.App_565109978_17862447927497318_7768362896212449680_n.jpg';
import g3a from '../assets/group3/SaveClip.App_558956915_17861249826497318_2620696988272476088_n.jpg';
import g3b from '../assets/group3/SaveClip.App_558957649_17861249835497318_4561088487883104044_n.jpg';
import g3c from '../assets/group3/SaveClip.App_559021228_17861249844497318_188081457799900453_n.jpg';

const galleryGroups = [
  { title: 'Group 1', vibe: 'Daily ride & detail', images: [g1a, g1b, g1c] },
  { title: 'Group 2', vibe: 'Premium coating', images: [g2a, g2b, g2c] },
  { title: 'Group 3', vibe: 'Night & performance', images: [g3a, g3b, g3c] }
];

const Gallery = () => (
  <GalleryWithModal />
);

const GalleryWithModal = () => {
  const [activeImage, setActiveImage] = useState(null);
  const close = useCallback(() => setActiveImage(null), []);

  return (
    <PageTransition>
      <GalleryBackground />
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stripe-red dark:text-stripe-yellow">
            Gallery
          </p>
          <h1 className="text-3xl font-bold text-ink dark:text-white sm:text-4xl">Vespa shots & builds</h1>
          <p className="text-ink/80 dark:text-white/70">
            Slide horizontal untuk lihat koleksi Vespa. Klik foto untuk memperbesar; setiap section punya mood berbeda
            dengan animasi scroll modern.
          </p>
        </div>

        <div className="flex flex-col gap-12 pb-12">
          {galleryGroups.map((group, idx) => (
            <GalleryRail key={group.title} group={group} index={idx} onOpen={setActiveImage} />
          ))}
        </div>
      </div>

      {activeImage && <Lightbox image={activeImage} onClose={close} />}
    </PageTransition>
  );
};

const GalleryRail = ({ group, index, onOpen }) => {
  const { scrollYProgress } = useScroll();
  const stripeShift = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? 120 : -120]);
  const cardTilt = useMemo(() => (index % 2 === 0 ? 3 : -3), [index]);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-2xl shadow-stripe-teal/10 backdrop-blur dark:border-white/10 dark:bg-ink/70">
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-stripe-teal/15 via-stripe-red/10 to-stripe-yellow/15 blur-3xl"
        style={{ x: stripeShift }}
      />
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stripe-teal dark:text-stripe-yellow">
            {`#${index + 1} Vespa set`}
          </p>
          <h3 className="text-2xl font-bold text-ink dark:text-white">{group.title}</h3>
          <p className="text-sm text-ink/70 dark:text-white/70">{group.vibe}</p>
        </div>
        <p className="text-xs text-ink/60 dark:text-white/60">Swipe/scroll →</p>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex snap-x snap-mandatory gap-4">
          {group.images.map((imgSrc, i) => (
            <motion.div
              key={imgSrc}
              className="group relative aspect-[4/5] w-64 flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-ink/10 bg-black shadow-lg shadow-stripe-teal/20 dark:border-white/10"
              whileHover={{ scale: 1.02, rotate: cardTilt }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              onClick={() => (typeof onOpen === 'function' ? onOpen(imgSrc) : null)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (typeof onOpen === 'function') onOpen(imgSrc);
                }
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.35 }}
                className="h-full w-full"
              >
                <LazyImage
                  src={imgSrc}
                  alt={`${group.title} ${i + 1}`}
                  className="h-full w-full"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-ink shadow-md backdrop-blur dark:bg-ink/80 dark:text-white">
                ScooterPlus • {group.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

GalleryRail.propTypes = {
  group: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vibe: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  onOpen: PropTypes.func.isRequired
};

const Lightbox = ({ image, onClose }) => (
  <motion.div
    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      onClick={(e) => e.stopPropagation()}
    >
      <img src={image} alt="Vespa detail" className="h-full w-full max-h-[90vh] object-contain" />
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow"
      >
        Tutup
      </button>
    </motion.div>
  </motion.div>
);

Lightbox.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

const GalleryBackground = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800, 1600], [0, -140, -280]);
  const stripeX = useTransform(scrollY, [0, 1200, 2400], [0, 180, 360]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-stripe-teal/20 via-transparent to-stripe-orange/15 blur-3xl"
        style={{ y: bgY }}
      />
      <motion.div
        className="absolute left-[-20%] top-1/4 h-64 w-[140%] bg-gradient-to-r from-stripe-teal/20 via-stripe-red/15 to-stripe-yellow/20 blur-2xl"
        style={{ x: stripeX }}
      />
      <motion.div
        className="absolute right-[-30%] top-2/3 h-72 w-[150%] bg-gradient-to-l from-stripe-yellow/25 via-stripe-orange/15 to-stripe-teal/20 blur-3xl"
        style={{ x: useTransform(stripeX, (v) => -v * 0.6) }}
      />
    </div>
  );
};

export default Gallery;

