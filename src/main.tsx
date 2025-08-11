import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Lenis from 'lenis';

declare global {
  interface Window {
    __lenisInstance?: Lenis;
    __lenisRafId?: number;
  }
}

// Initialize Lenis once globally with rAF loop and smooth anchor handling
if (typeof window !== 'undefined' && !window.__lenisInstance) {
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    window.__lenisRafId = requestAnimationFrame(raf);
  }

  window.__lenisInstance = lenis;
  window.__lenisRafId = requestAnimationFrame(raf);

  // Smooth anchor links (e.g., <a href="#section">)
  document.addEventListener('click', (event) => {
    const target = event.target as Element | null;
    const anchor = target?.closest('a');
    const href = anchor?.getAttribute('href') ?? '';
    if (!anchor || !href || !href.startsWith('#') || href.length === 1) return;

    const destination = document.querySelector(href);
    if (!destination) return;

    event.preventDefault();
    lenis.scrollTo(destination as HTMLElement, { offset: 0 });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
