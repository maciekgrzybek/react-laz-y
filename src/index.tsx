import React, {
  useEffect,
  useState,
  Suspense,
  useRef,
  cloneElement,
  ReactElement,
  FC
} from 'react';

interface Props {
  children: ReactElement;
  callback: Function;
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number | number[];
  fallback: ReactElement | string | number;
  wrapperClass: string;
}

const Fallback = () => <div>loading...</div>;

const ReactLazy: FC<Props> = ({
  children,
  callback,
  root,
  rootMargin,
  threshold,
  fallback,
  wrapperClass,
  ...rest
}) => {
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
      <Suspense fallback={fallback}>
        <div
          ref={elementWrapper}
          className={wrapperClass}
          style={defaultWrapperStyles}
        >
          {isVisible && cloneElement(children, { ...rest })}
        </div>
      </Suspense>
    </>
  );
};

ReactLazy.defaultProps = {
  children: undefined,
  callback: () => undefined,
  root: null,
  rootMargin: '0px',
  threshold: 1,
  fallback: <Fallback />,
  wrapperClass: ''
};

export default ReactLazy;

// TODO:
// 1. add intersection observer --------------
// 2. pass callback when intersected --------------
// 3. pass config object for observer --------------
// 4. pass props to the children ---------
// 5. handle the errors --------
// 6. create an example page
// 7. add option for passing own callback as an option -----------
// 8. pass fallback object as a props --------
// 9. Write tests
//// a. simple - when right after it's in viewport
//// b. half of the screen until viewport
//// c. some percent after it's visible
//// d. with custom fallback
// 10. pass additional styles to the div wrapper ---------
// 11. Add checking for SSR - use without suspense and lazy if true - next release
// 12. Write readme and simple docs
