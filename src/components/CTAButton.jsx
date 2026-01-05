import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CTAButton = ({ to, label, variant = 'primary' }) => {
  const base =
    'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const styles =
    variant === 'ghost'
      ? 'border border-ink/10 bg-stripe-teal/5 text-ink hover:border-ink/20 hover:bg-stripe-teal/10 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
      : 'bg-gradient-to-r from-stripe-teal to-stripe-orange text-white shadow-lg shadow-stripe-teal/30 hover:opacity-95 dark:from-stripe-teal dark:to-stripe-orange';

  return (
    <Link to={to} className={`${base} ${styles}`}>
      {label}
    </Link>
  );
};

CTAButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'ghost'])
};

export default CTAButton;

