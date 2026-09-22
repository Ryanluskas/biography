"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollFrameSequenceProps {
  frameCount: number;
}

const DEBUG_MODE = process.env.NODE_ENV === 'development';

export default function ScrollFrameSequence({ frameCount }: ScrollFrameSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [currentRendered, setCurrentRendered] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  const frames = useRef<(HTMLImageElement | null)[]>(new Array(frameCount).fill(null));
  const loadedSet = useRef<Set<number>>(new Set());
  const currentFrameRef = useRef(0);
  
  // Accessibility check
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Preload logic (Intelligent)
  useEffect(() => {
    let isMounted = true;
    
    const loadFrame = (index: number): Promise<void> => {
      if (loadedSet.current.has(index)) return Promise.resolve();
      return new Promise((resolve) => {
        const img = new Image();
        const src = `/sequence/frame_${(index + 1).toString().padStart(4, '0')}.webp`;
        img.onload = () => {
          frames.current[index] = img;
          loadedSet.current.add(index);
          setLoadedCount(loadedSet.current.size);
          resolve();
        };
        img.onerror = () => {
          console.warn(`Failed to load ${src}`);
          loadedSet.current.add(index); // Mark as loaded to prevent infinite retry
          resolve();
        };
        img.src = src;
      });
    };

    const loaderLoop = async () => {
      while (isMounted && loadedSet.current.size < frameCount) {
        const current = currentFrameRef.current;
        let nextToLoad = -1;
        
        let minDistance = Infinity;
        for (let i = 0; i < frameCount; i++) {
          if (!loadedSet.current.has(i)) {
            // Favor forward scrolling slightly by penalizing backwards
            const diff = i - current;
            const distance = diff >= 0 ? diff : Math.abs(diff) + 0.5;
            
            if (distance < minDistance) {
              minDistance = distance;
              nextToLoad = i;
            }
          }
        }
        
        if (nextToLoad !== -1) {
          await loadFrame(nextToLoad);
        } else {
          break;
        }
      }
    };
    
    const initLoad = async () => {
       // Priority load first 10 frames + end frame
       for (let i = 0; i < Math.min(10, frameCount); i++) {
         if (!isMounted) return;
         await loadFrame(i);
       }
       if (!isMounted) return;
       setIsReady(true);
       loaderLoop(); 
    };
    
    initLoad();
    
    return () => { isMounted = false; };
  }, [frameCount]);

  // Render frame function
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const img = frames.current[index];
    if (!img) return;

    const dpr = window.devicePixelRatio || 1;
    const canvasWidth = canvas.clientWidth * dpr;
    const canvasHeight = canvas.clientHeight * dpr;
    
    if (canvasWidth === 0 || canvasHeight === 0) return;
    
    if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    }

    const canvasRatio = canvasWidth / canvasHeight;
    const imgRatio = img.width / img.height;
    let w, h, x, y;

    // object-fit: cover
    if (canvasRatio > imgRatio) {
      w = canvasWidth;
      h = canvasWidth / imgRatio;
      x = 0;
      y = (canvasHeight - h) / 2;
    } else {
      w = canvasHeight * imgRatio;
      h = canvasHeight;
      x = (canvasWidth - w) / 2;
      y = 0;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, x, y, w, h);
  };

  // Canvas resize handler
  useEffect(() => {
    const resizeCanvas = () => {
      if (isReady) {
        requestAnimationFrame(() => renderFrame(currentFrameRef.current));
      }
    };
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [isReady]);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] 
  });

  // Update canvas on scroll
  useEffect(() => {
    if (reducedMotion) {
      if (frames.current[0] && isReady) {
        requestAnimationFrame(() => renderFrame(0));
      }
      return;
    }

    const unsubscribe = scrollYProgress.on('change', (v) => {
      const frameIndex = Math.round(v * (frameCount - 1));
      currentFrameRef.current = frameIndex;
      
      let renderIndex = frameIndex;
      
      // Fallback if specific frame not loaded
      if (!frames.current[renderIndex]) {
        let offset = 1;
        while (offset <= frameCount) {
          if (frameIndex - offset >= 0 && frames.current[frameIndex - offset]) {
            renderIndex = frameIndex - offset;
            break;
          } else if (frameIndex + offset < frameCount && frames.current[frameIndex + offset]) {
            renderIndex = frameIndex + offset;
            break;
          }
          offset++;
        }
      }
      
      if (frames.current[renderIndex]) {
        requestAnimationFrame(() => renderFrame(renderIndex));
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, reducedMotion, frameCount, isReady]);

  // Initial draw when ready
  useEffect(() => {
    if (isReady && frames.current[0]) {
      // Sometimes CSS hasn't applied immediately, so clientWidth is 0.
      // We can try to render immediately, and also slightly delayed to be safe.
      requestAnimationFrame(() => renderFrame(0));
      setTimeout(() => requestAnimationFrame(() => renderFrame(0)), 50);
      setTimeout(() => requestAnimationFrame(() => renderFrame(0)), 150);
    }
  }, [isReady]);

  const fadeOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const progress = Math.round((loadedCount / 10) * 100) || 0;

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: reducedMotion ? "100vh" : "500vh" }}>
      
      {/* Loading UI Overlay */}
      {!isReady && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] text-white">
          <div className="flex flex-col items-center gap-6">
            <div className="font-medium tracking-[0.3em] text-sm uppercase">RYAN LUKAS</div>
            <div className="font-mono text-xs text-zinc-600 flex items-center gap-4">
              <div className="w-32 h-[1px] bg-zinc-800 relative">
                <div 
                  className="absolute top-0 left-0 h-full bg-zinc-200 transition-all duration-300 ease-out" 
                  style={{ width: `${Math.min(100, progress)}%` }} 
                />
              </div>
              <span className="w-8 text-right">{Math.min(100, progress)}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Container */}
      <div className="sticky top-0 w-full h-[100svh] overflow-hidden bg-black flex items-center justify-center">
        
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full"
        />

        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 z-10 w-full h-full max-w-7xl mx-auto px-4 md:px-12 flex flex-col justify-center pointer-events-none mix-blend-difference"
        >
          <h1 className="text-[18vw] md:text-[14vw] leading-[0.8] tracking-tighter flex flex-col">
            <span className="block font-medium text-white">RYAN</span>
            <span className="block font-serif italic text-zinc-300 md:pr-12 md:text-right">LUKAS.</span>
          </h1>
          <p className="mt-8 md:mt-0 font-mono text-[10px] md:text-xs tracking-widest uppercase text-zinc-400 md:text-right md:pr-12 max-w-2xl md:ml-auto">
            Software Engineer & Product Builder. Desenvolvendo ecossistemas escaláveis, interfaces minimalistas e automações reais.
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity: fadeOpacity }}
          className="absolute inset-0 bg-[#0a0a0a] pointer-events-none z-20"
        />
      </div>
    </div>
  );
}
