import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const Toast = ({ isOpen, onClose, message, type = 'success', duration = 5000 }) => {
  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  const icons = {
    success: <CheckCircle size={20} className="text-green-500" />,
    error: <XCircle size={20} className="text-red-500" />,
    info: <Info size={20} className="text-blue-500" />
  };

  const bgColors = {
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-4 right-4 z-50 max-w-md"
          initial={{ opacity: 0, y: -20, x: 100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div
            className={`flex items-center gap-3 rounded-lg border p-4 shadow-lg ${bgColors[type]}`}
          >
            {icons[type]}
            <p className="flex-1 text-sm font-medium text-ink dark:text-white">{message}</p>
            <button
              type="button"
              onClick={onClose}
              className="rounded p-1 text-ink/40 transition hover:bg-black/10 hover:text-ink dark:text-white/40 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label="Close toast"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Toast.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info']),
  duration: PropTypes.number
};

export default Toast;
