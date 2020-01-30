import React, { useEffect, useState, Suspense, useRef } from 'react';

interface Props {
  children: React.ReactChildren | string;
  callback?: Function;
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const ReactLazy: React.FC<Props> = ({
  children,
  callback,
  root,
  rootMargin,
  threshold
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementWrapper = useRef<HTMLDivElement>(null);

  const handleIntersection = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        {
          callback && callback(entry, observer);
        }
      }
    });
  };
  useEffect(() => {
    if (elementWrapper.current) {
      const observer = new IntersectionObserver(handleIntersection, {
        root,
        rootMargin,
        threshold
      });
      observer.observe(elementWrapper.current);
      return () => observer.disconnect();
    }
    return () => undefined;
  }, [elementWrapper, handleIntersection]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div ref={elementWrapper}>{isVisible && children}</div>
      </Suspense>
    </>
  );
};

ReactLazy.defaultProps = {
  children: undefined,
  callback: () => undefined,
  root: null,
  rootMargin: '0px',
  threshold: 1
};

export default ReactLazy;

// TODO:
// 1. add intersection observer --------------
// 2. pass callback when intsersetced --------------
// 3. pass config object for observer --------------
// 4. pass props to the children
// 5. handle the errors
// 6. create an example page
// 7. add option for passing own callback as an option
// 8. pass fallback object as a props
