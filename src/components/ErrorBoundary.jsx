import PropTypes from 'prop-types';
import { Component } from 'react';
import { AlertCircle } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-paper p-4 dark:bg-ink">
          <div className="max-w-md space-y-4 rounded-2xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-800 dark:bg-red-900/20">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/40">
              <AlertCircle size={24} className="text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-xl font-bold text-ink dark:text-white">Something went wrong</h2>
            <p className="text-sm text-ink/70 dark:text-white/70">
              We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={this.handleReset}
                className="flex-1 rounded-lg bg-stripe-teal px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Try Again
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="flex-1 rounded-lg border border-ink/20 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-ink/5 dark:border-white/20 dark:bg-ink dark:text-white dark:hover:bg-ink/80"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;

