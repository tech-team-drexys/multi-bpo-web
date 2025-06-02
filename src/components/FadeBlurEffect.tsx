
import { useState, useEffect } from 'react';

interface FadeBlurEffectProps {
  texts: string[];
  className?: string;
  textDuration?: number;
  transitionDuration?: number;
  pauseDuration?: number;
}

const FadeBlurEffect = ({ 
  texts, 
  className = "", 
  textDuration = 4000,
  transitionDuration = 800,
  pauseDuration = 500
}: FadeBlurEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const cycle = async () => {
      // Show text for specified duration
      await new Promise(resolve => setTimeout(resolve, textDuration));
      
      // Start fade out with blur
      setIsVisible(false);
      
      // Wait for transition to complete
      await new Promise(resolve => setTimeout(resolve, transitionDuration));
      
      // Pause between changes
      setIsPaused(true);
      await new Promise(resolve => setTimeout(resolve, pauseDuration));
      setIsPaused(false);
      
      // Change to next text
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      
      // Start fade in
      setIsVisible(true);
    };

    const timer = setTimeout(cycle, textDuration);
    return () => clearTimeout(timer);
  }, [currentTextIndex, texts.length, textDuration, transitionDuration, pauseDuration]);

  const currentText = texts[currentTextIndex];

  return (
    <span 
      className={`${className} transition-all duration-[800ms] ease-in-out ${
        isVisible 
          ? 'opacity-100 blur-0' 
          : 'opacity-30 blur-sm'
      }`}
      style={{
        transitionDuration: `${transitionDuration}ms`
      }}
    >
      {currentText}
    </span>
  );
};

export default FadeBlurEffect;
