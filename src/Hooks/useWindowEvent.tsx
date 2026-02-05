import { useEffect } from "react";

type WindowEventListener<K extends keyof WindowEventMap> = (
  this: Window,
  ev: WindowEventMap[K],
) => any;

export function useWindowEvent<K extends keyof WindowEventMap>(
  type: K,
  listener: WindowEventListener<K>,
  options?: boolean | AddEventListenerOptions,
) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options]);
}
