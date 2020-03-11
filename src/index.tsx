import React, {
  useEffect,
  useState,
  Suspense,
  useRef,
  ReactElement,
  FC,
} from 'react';

import Fallback from './Fallback';

interface Props {
  children?: ReactElement;
  onLoad: Function;
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number | number[];
  fallback: ReactElement | string | number;
  wrapperClass: string;
  styles: object;
}

const ReactLazy: FC<Props> = ({
  children,
  onLoad,
  root,
  rootMargin,
  threshold,
  fallback,
  wrapperClass,
  styles,
}) => {
  if (typeof window === 'undefined') {
    return null;
  }
  if (!children) {
    throw new Error('You need to pass children to the ReactLazy component.');
  }
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementWrapper = useRef<HTMLDivElement>(null);

  const defaultWrapperStyles = { minHeight: 1 };

  const handleIntersection = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        {
          onLoad && onLoad(entry, observer);
        }
      }
    });
  };
  useEffect(() => {
    if (elementWrapper.current) {
      const observer = new IntersectionObserver(handleIntersection, {
        root,
        rootMargin,
        threshold,
      });
      observer.observe(elementWrapper.current);
      return () => observer.disconnect();
    }
    return () => undefined;
  }, [elementWrapper, handleIntersection]);

  return (
    <Suspense fallback={fallback}>
      <div
        ref={elementWrapper}
        className={wrapperClass}
        style={{ ...defaultWrapperStyles, ...styles }}
      >
        {isVisible && children}
      </div>
    </Suspense>
  );
};

ReactLazy.defaultProps = {
  children: undefined,
  onLoad: () => undefined,
  root: null,
  rootMargin: '0px',
  threshold: 1,
  fallback: <Fallback />,
  wrapperClass: '',
  styles: {},
};

export default ReactLazy;
