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

// TODO:
// 1. add intersection observer
// 2. pass callback when intsersetced
// 3. pass config object for observer
// 4. pass props to the children
// 5. handle the errors
// 6. create an example page
// 7. add option for passing own callback as an option
// 8. pass fallback object as a props
