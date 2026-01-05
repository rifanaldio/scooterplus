import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const PartnerCircle = ({ name, imageUrl, index, website }) => (
  <motion.a
    className="flex flex-col items-center gap-4 flex-shrink-0 cursor-pointer"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.3 }}
    href={website}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl dark:border-gray-700 bg-white dark:bg-gray-800 group hover:scale-105 transition-transform duration-300 flex items-center justify-center p-4">
      <img
        src={imageUrl}
        alt={`Logo ${name}`}
        className="w-full h-full object-contain object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
    <p className="text-sm sm:text-base font-semibold text-ink dark:text-white text-center max-w-[120px] sm:max-w-[160px]">
      {name}
    </p>
  </motion.a>
);

PartnerCircle.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  website: PropTypes.string.isRequired
};

export default PartnerCircle;

