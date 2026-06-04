import { useEffect, useState } from 'react';
import { useMotionValue, useSpring, useTransform, animate } from 'motion/react';

export function useCountUp(value, duration = 1.4) {
  const [displayValue, setDisplayId] = useState("0");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (typeof value === 'string' && value.includes(',')) {
      return Math.round(latest).toLocaleString();
    }
    return Math.round(latest * 100) / 100;
  });

  useEffect(() => {
    const numericValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;
    const animation = animate(count, numericValue, { duration, ease: "easeOut" });
    
    return rounded.on("change", (v) => setDisplayId(v.toString()));
  }, [value, count, rounded]);

  return displayValue;
}
