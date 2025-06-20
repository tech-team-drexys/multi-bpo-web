import React from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface SmoothScrollLinkProps {
  to: string | number;
  offset?: number;
  duration?: number;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  to,
  offset = -80,
  duration = 1.2,
  children,
  className = "",
  onClick,
}) => {
  const { scrollTo } = useSmoothScroll();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(to, { offset, duration });
    onClick?.();
  };

  return (
    <a
      href={typeof to === "string" ? to : "#"}
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
};
