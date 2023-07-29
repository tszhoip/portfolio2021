import React, { useState, useEffect } from 'react';
import { BlockMenuFloating } from '../component/BlockMenuFloating';

const PageWrapper = ({ component }) => {
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const footerElement = document.querySelector('.block-footer');
    if (footerElement) {
      setFooterHeight(footerElement.offsetHeight);

      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          if (entry.target === footerElement) {
            setFooterHeight(entry.target.offsetHeight);
          }
        }
      });

      resizeObserver.observe(footerElement);

      return () => {
        resizeObserver.unobserve(footerElement);
      };
    }
  }, [component]); // Add 'component' to the dependency array to observe content changes

  return (
    <>
      {component}
      <BlockMenuFloating footerHeight={footerHeight} />
    </>
  );
};

export default PageWrapper;
