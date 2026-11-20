import React from 'react';
import { Home } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 relative overflow-hidden bg-white">
      <div className="text-center max-w-lg mx-auto">
        <span className="text-7xl sm:text-8xl font-black bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 bg-clip-text text-transparent block mb-4">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 mb-8 font-normal leading-relaxed">
          The page you are looking for might have been moved or is temporarily unavailable. Let us get you back to the right route.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/"
            variant="primary"
            icon={<Home className="h-4 w-4" />}
            iconPosition="left"
          >
            Return to Home
          </Button>
          <Button
            to="/services"
            variant="secondary"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
