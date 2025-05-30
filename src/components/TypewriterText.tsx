
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypewriterText = ({ text, speed = 80, className = '' }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        
        // Add random variation to timing (±20ms)
        const randomVariation = Math.random() * 40 - 20;
        const delay = speed + randomVariation;
        
        timeout = setTimeout(typeText, delay);
      } else {
        setIsTyping(false);
        setIsComplete(true);
        
        // After 3 seconds, start fading out the cursor
        setTimeout(() => {
          setShowCursor(false);
        }, 3000);
      }
    };

    typeText();

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text, speed]);

  // Cursor blinking effect
  useEffect(() => {
    if (!isComplete || !showCursor) return;

    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, [isComplete, showCursor]);

  return (
    <span className={`font-mono ${className}`}>
      {displayedText}
      <span 
        className={`inline-block w-0.5 bg-current transition-opacity duration-300 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          animation: isTyping || isComplete ? 'blink 1s infinite' : 'none',
          height: '1em',
          marginLeft: '1px'
        }}
      >
        |
      </span>
    </span>
  );
};

export default TypewriterText;
