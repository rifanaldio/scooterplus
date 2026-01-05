import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 }
};

const PageTransition = ({ children }) => (
  <motion.section
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.35, ease: 'easeInOut' }}
    className="py-12 scrollbar-hide"
  >
    {children}
  </motion.section>
);

PageTransition.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTransition;

