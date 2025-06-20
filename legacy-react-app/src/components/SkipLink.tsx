import React from 'react';

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onFocus={(e) => {
        // Make visible when focused
        e.target.classList.remove('sr-only');
      }}
      onBlur={(e) => {
        // Hide when focus is lost
        e.target.classList.add('sr-only');
      }}
    >
      {children}
    </a>
  );
};

export default SkipLink;
