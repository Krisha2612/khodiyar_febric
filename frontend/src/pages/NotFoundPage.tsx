import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container-padded flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary-600 mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-heading mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;