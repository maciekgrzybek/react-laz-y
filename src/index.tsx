import React, { useEffect, useState, Suspense, useRef } from 'react';

interface Props {
  children?: React.ReactChildren | string;
}

const ReactLazy: React.FC<Props> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementWrapper = useRef(null);

  useEffect(() => {
    if (elementWrapper.current) {
      console.log('siema');
    }
  }, [elementWrapper]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <div ref={elementWrapper}>{isVisible && children}</div>
      </Suspense>
      <button onClick={() => setIsVisible(true)}>show me</button>
    </div>
  );
};

export default ReactLazy;
