// error fallback should be a client components
"use client";

const FilterError = ({ error }) => {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>Invalid path.</p>
      <p>{error.message}</p>
    </div>
  );
};

export default FilterError;
