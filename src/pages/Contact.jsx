import { useState } from 'react';
import { Send } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Modal from '../components/Modal';
import Toast from '../components/Toast';
import useAppDispatch from '../hooks/useAppDispatch';
import { closeMenu } from '../store/uiSlice';
import { validateContactForm } from '../utils/validation';

const Contact = () => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [toast, setToast] = useState({ isOpen: false, message: '', type: 'success' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ isOpen: true, message, type });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(closeMenu());

    const validation = validateContactForm(form);
    if (!validation.isValid) {
      setErrors(validation.errors);
      showToast('Please fix the errors in the form', 'error');
      return;
    }

    // Simulate form submission
    setShowSuccessModal(true);
    setErrors({});
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stripe-red dark:text-stripe-yellow">
            Booking
          </p>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl dark:text-white">Jadwalkan servis Vespa Anda.</h2>
          <p className="text-ink/80 dark:text-white/80">Isi form, kami hubungi dalam 1 hari kerja untuk konfirmasi slot.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-ink/5 bg-white p-6 shadow-lg shadow-stripe-teal/10 dark:border-white/10 dark:bg-ink/60"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-ink dark:text-white">
              Name <span className="text-red-500">*</span>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={`w-full rounded-lg border px-3 py-2 bg-white text-ink placeholder:text-ink/40 focus:outline-none dark:bg-ink dark:text-white dark:placeholder:text-white/40 ${
                  errors.name
                    ? 'border-red-500 focus:border-red-500 dark:border-red-500'
                    : 'border-ink/10 focus:border-stripe-teal dark:border-white/20 dark:focus:border-stripe-teal'
                }`}
                placeholder="Jane Doe"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-red-500" role="alert">
                  {errors.name}
                </p>
              )}
            </label>
            <label className="space-y-2 text-sm text-ink dark:text-white">
              Email <span className="text-red-500">*</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full rounded-lg border px-3 py-2 bg-white text-ink placeholder:text-ink/40 focus:outline-none dark:bg-ink dark:text-white dark:placeholder:text-white/40 ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500 dark:border-red-500'
                    : 'border-ink/10 focus:border-stripe-teal dark:border-white/20 dark:focus:border-stripe-teal'
                }`}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-red-500" role="alert">
                  {errors.email}
                </p>
              )}
            </label>
          </div>
          <label className="space-y-2 text-sm text-ink dark:text-white">
            Message <span className="text-red-500">*</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className={`w-full rounded-lg border px-3 py-2 bg-white text-ink placeholder:text-ink/40 focus:outline-none dark:bg-ink dark:text-white dark:placeholder:text-white/40 ${
                errors.message
                  ? 'border-red-500 focus:border-red-500 dark:border-red-500'
                  : 'border-ink/10 focus:border-stripe-teal dark:border-white/20 dark:focus:border-stripe-teal'
              }`}
              placeholder="What problem can we solve?"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-red-500" role="alert">
                {errors.message}
              </p>
            )}
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-stripe-teal to-stripe-orange px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-stripe-teal/30 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-stripe-teal focus:ring-offset-2"
          >
            <Send size={16} />
            Send message
          </button>
        </form>

        <Modal
          isOpen={showSuccessModal}
          onClose={handleCloseModal}
          title="Message Sent!"
          showCloseButton={true}
        >
          <div className="space-y-4">
            <p className="text-ink/80 dark:text-white/80">
              Thanks, <strong>{form.name || 'friend'}</strong>! We received your message and will reach out to you soon.
            </p>
            <button
              type="button"
              onClick={handleCloseModal}
              className="w-full rounded-lg bg-gradient-to-r from-stripe-teal to-stripe-orange px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-stripe-teal/30 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-stripe-teal focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </Modal>

        <Toast
          isOpen={toast.isOpen}
          onClose={closeToast}
          message={toast.message}
          type={toast.type}
        />
      </div>
    </PageTransition>
  );
};

export default Contact;

