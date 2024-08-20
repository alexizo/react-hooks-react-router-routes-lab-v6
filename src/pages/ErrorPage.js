
// src/pages/ErrorPage.js
import React from 'react';

const ErrorPage = () => {
  return (
    <div>
      <h2>Unexpected Application Error!</h2>
      <h3 style={{ fontStyle: 'italic' }}>404 Not Found</h3>
      <p>💿 Hey developer 👋</p>
      <p>
        You can provide a way better UX than this when your app throws errors by providing your own
        <code style={{ padding: '2px 4px', backgroundColor: 'rgba(200, 200, 200, 0.5)' }}>
          ErrorBoundary
        </code>
        or
        <code style={{ padding: '2px 4px', backgroundColor: 'rgba(200, 200, 200, 0.5)' }}>
          errorElement
        </code>
        prop on your route.
      </p>
    </div>
  );
};

export default ErrorPage;
