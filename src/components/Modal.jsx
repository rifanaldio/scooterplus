import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children, showCloseButton = true }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-ink dark:text-white"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {(title || showCloseButton) && (
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/10 bg-white/95 px-6 py-4 backdrop-blur-sm dark:border-white/10 dark:bg-ink/95">
                {title && (
                  <h2 id="modal-title" className="text-lg font-bold text-ink dark:text-white">
                    {title}
                  </h2>
                )}
                {showCloseButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="ml-auto rounded-full p-1 text-ink/60 transition hover:bg-ink/10 hover:text-ink dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            )}
            <div className="p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  showCloseButton: PropTypes.bool
};

export default Modal;

