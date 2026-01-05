/**
 * Email validation regex
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Form validation helper
 */
export const validateContactForm = (form) => {
  const errors = {};

  if (!form.name || form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!form.email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(form.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!form.message || form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

