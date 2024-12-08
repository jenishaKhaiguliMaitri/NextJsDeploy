import React from "react";

const NewsDetailsLayout = ({ children, modal }) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default NewsDetailsLayout;
