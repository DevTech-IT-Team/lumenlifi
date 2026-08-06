import { useState, useEffect, useRef } from 'react';

export default function LazyOnVisible({ load, minHeight = '50vh', className = '' }) {
  const ref = useRef(null);
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || Component) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        load().then((mod) => setComponent(() => mod.default));
        observer.disconnect();
      },
      { rootMargin: '300px 0px', threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [load, Component]);

  if (!Component) {
    return <div ref={ref} aria-hidden="true" className={className} style={{ minHeight }} />;
  }

  return <Component />;
}
